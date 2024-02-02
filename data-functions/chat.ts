// TODO: investigate if this approach is better for us, and why


import type { Message, Room, User } from '~/models'

export type UserRooms = Pick<Room, 'id' | 'name'> & {
  users: {
    items: Array<
      { isTyping: boolean } & {
        user: Pick<User, 'id' | 'lastName' | 'firstName' | 'profilePicture'>
      }
    >
  }
  messages: {
    items: Array<Pick<Message, 'content' | 'createdAt'> & { authoredBy: { id: string } }>
  }
}

export type ChatRoomData = Awaited<ReturnType<typeof getChatRoomData>>

export async function getUserChats(userId: string) {
  try {
    const { data } = await useLeanQuery({
      query: getUser,
      variables: { id: userId },
      fields: [
        `rooms {
          items {
            room {
              id
              name
              messages(limit: 1, sortDirection: DESC) {
                items {
                  content
                  createdAt
                  authoredBy {
                    id
                  }
                }
              }
              users {
                items {
                  isTyping
                  user {
                    id
                    lastName
                    firstName
                    profilePicture
                  }
                }
              }
            }
          }
        }`,
      ],
    })

    return data.getUser?.rooms?.items.map(item => item?.room) as unknown as Array<UserRooms>
  }
  catch (e) {
    useLogger().error(e)
  }
}

export async function getChatRoomName(roomIdToFetch: string) {
  try {
    const roomNameData = await useLeanQuery({
      query: getRoom,
      variables: {
        id: roomIdToFetch,
      },
      fields: ['name'],
    })
    return roomNameData.data?.getRoom?.name
  }
  catch (error) {
    useLogger().error(error)
  }
}

export async function getChatRoomData(roomIdToFetch: string) {
  const {
    data: { getRoom: room },
  } = await useLeanQuery({
    query: getRoom,
    variables: {
      id: roomIdToFetch,
    },
    fields: [
      'name',
      'users { items { id, user { id, firstName, lastName, profilePicture } } }',
      'messages { items { id, userId, content, createdAt, authoredBy { firstName, lastName, id, profilePicture } } }',
    ],
  })

  return reactive({
    roomId: roomIdToFetch,
    roomName: room?.name,
    usersInRoom: room?.users?.items,
    messagesDataForRoom: room?.messages?.items,
  })
}

export function userAddedToRoomSubscription(roomIdToObserve: string, usersInRoomRef: Ref<any[]>) {
  return useAPI()
    .graphql({ query: onUserAddedToRoom, variables: { roomId: roomIdToObserve } })
    .subscribe({
      next: ({ data }) => {
        const newUserAdded = data.onUserAddedToRoom
        useLogger().info('newUserAdded', newUserAdded.user?.firstName)
        if (newUserAdded && usersInRoomRef.value)
          usersInRoomRef.value.unshift(newUserAdded)
      },
      error: err => console.error(err),
    })
}

export function usersInRoomTypingStatusSubscription(
  roomIdToObserve: string,
  usersThatAreTypingRef: Ref<any[]>,
) {
  return useAPI()
    .graphql({ query: onRoomUserTyping, variables: { roomId: roomIdToObserve } })
    .subscribe({
      next: ({ data }) => {
        useLogger().log('usersInRoomTypingStatusSubscription', data)
        const userTyping = data.onRoomUserTyping

        // Check if the user is already in the usersThatAreTyping array
        const userExists = usersThatAreTypingRef.value.some(
          user => user.id === userTyping.userId,
        )

        if (userTyping.isTyping && !userExists) {
          // Add the user to the array if they're typing and not already in the array
          usersThatAreTypingRef.value.unshift({
            id: userTyping.userId,
            firstName: userTyping.user?.firstName,
            lastName: userTyping.user?.lastName,
          })
        }
        else if (!userTyping.isTyping && userExists) {
          // Remove the user from the array if they're not typing and in the array
          usersThatAreTypingRef.value = usersThatAreTypingRef.value.filter(
            user => user.id !== userTyping.userId,
          )
        }
      },
      error: err => console.error(err),
    })
}

export function messageAddedToRoomSubscription(
  roomIdToObserve: string,
  messagesDataForRoomRef: Ref<any[]>,
) {
  return useAPI()
    .graphql({ query: onCreateMessageInRoom, variables: { roomId: roomIdToObserve } })
    .subscribe({
      next: ({ data }) => {
        const newMessageAdded = data.onCreateMessageInRoom
        useLogger().info('newMessageAdded', newMessageAdded)
        if (newMessageAdded && messagesDataForRoomRef.value)
          messagesDataForRoomRef.value.unshift(newMessageAdded)
      },
      error: err => console.error(err),
    })
}

export async function setUserTypingStateForRoom({
  roomUserDocId,
  typingStatus,
  chatRoomId,
  chatRoomUserId,
}: {
  roomUserDocId: string
  typingStatus: boolean
  chatRoomId: string
  chatRoomUserId: string
}) {
  try {
    return await useAPI().graphql({
      query: updateRoomUser,
      variables: {
        input: {
          id: roomUserDocId,
          roomId: chatRoomId,
          userId: chatRoomUserId,
          isTyping: typingStatus,
        },
      },
    })
  }
  catch (error) {
    useLogger().error('Error setting user typing state', error)
  }

  if (typingStatus)
    useLogger().info('The user is typing')
  else useLogger().info('The user stopped typing')
}

export async function getRoomUserData(roomIdToFetch: string) {
  try {
    const roomUserData = await useLeanQuery({
      query: roomUsersByRoomId,
      variables: {
        roomId: roomIdToFetch,
      },
      fields: ['items { id, userId, user { firstName, lastName } }'],
    })

    return roomUserData.data.roomUsersByRoomId?.items[0]?.id
  }
  catch (error) {
    useLogger().error(error)
  }
}

export async function handleChatInput(
  event: Event,
  isTypingRef: Ref<boolean>,
  timeout: Ref<NodeJS.Timeout | undefined>,
) {
  const messageInput = ref('')

  try {
    clearTimeout(timeout.value)
    isTypingRef.value = true
    messageInput.value = (event.target as HTMLInputElement).value

    return (timeout.value = setTimeout(() => {
      useLogger().info('User stopped typing from timeout')
      isTypingRef.value = false
    }, 1200))
  }
  catch (e) {
    useLogger().error(e)
  }
}

export async function createRoomAndAddUsers({ roomName, userIds }: { roomName: string, userIds: string[] }): Promise<void> {
  try {
    const createRoomResult = await useAPI().graphql({
      query: createRoom,
      variables: {
        input: {
          name: roomName,
        },
      },
    })

    if (!createRoomResult.data.createRoom?.id)
      throw new Error('Unable to create a new room')

    for (const userId of userIds) {
      const addedUserResult = await useAPI().graphql({
        query: createRoomUser,
        variables: {
          input: {
            userId,
            roomId: createRoomResult.data.createRoom.id,
          },
        },
      })

      if (!addedUserResult.data.createRoomUser?.id)
        throw new Error('Unable to add user to room')
    }
    }
  catch (err) {
    useLogger().error(err)
  }
}
