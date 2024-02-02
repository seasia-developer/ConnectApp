/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReadReceiptByUser = /* GraphQL */ `subscription OnCreateReadReceiptByUser($userId: ID!) {
  onCreateReadReceiptByUser(userId: $userId) {
    id
    messageId
    message {
      id
      content
      roomId
      userId
      authoredBy {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    readAt
    roomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReadReceiptByUserSubscriptionVariables,
  APITypes.OnCreateReadReceiptByUserSubscription
>;
export const onRoomUserTyping = /* GraphQL */ `subscription OnRoomUserTyping($roomId: ID!) {
  onRoomUserTyping(roomId: $roomId) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnRoomUserTypingSubscriptionVariables,
  APITypes.OnRoomUserTypingSubscription
>;
export const onCreateMessageInRoom = /* GraphQL */ `subscription OnCreateMessageInRoom($roomId: ID!) {
  onCreateMessageInRoom(roomId: $roomId) {
    id
    content
    roomId
    userId
    authoredBy {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageInRoomSubscriptionVariables,
  APITypes.OnCreateMessageInRoomSubscription
>;
export const onUserAddedToRoom = /* GraphQL */ `subscription OnUserAddedToRoom($roomId: ID!) {
  onUserAddedToRoom(roomId: $roomId) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUserAddedToRoomSubscriptionVariables,
  APITypes.OnUserAddedToRoomSubscription
>;
export const onUserRemovedFromRoom = /* GraphQL */ `subscription OnUserRemovedFromRoom($roomId: ID!) {
  onUserRemovedFromRoom(roomId: $roomId) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUserRemovedFromRoomSubscriptionVariables,
  APITypes.OnUserRemovedFromRoomSubscription
>;
export const onUserUpdatedById = /* GraphQL */ `subscription OnUserUpdatedById($id: ID!) {
  onUserUpdatedById(id: $id) {
    id
    owner
    birthdate
    emailAddress
    firstName
    lastName
    location
    phoneNumber
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    coverImage
    profilePicture
    jobTitle
    linkedInURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUserUpdatedByIdSubscriptionVariables,
  APITypes.OnUserUpdatedByIdSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    owner
    birthdate
    emailAddress
    firstName
    lastName
    location
    phoneNumber
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    coverImage
    profilePicture
    jobTitle
    linkedInURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    owner
    birthdate
    emailAddress
    firstName
    lastName
    location
    phoneNumber
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    coverImage
    profilePicture
    jobTitle
    linkedInURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    owner
    birthdate
    emailAddress
    firstName
    lastName
    location
    phoneNumber
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    coverImage
    profilePicture
    jobTitle
    linkedInURL
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserConnection = /* GraphQL */ `subscription OnCreateUserConnection(
  $filter: ModelSubscriptionUserConnectionFilterInput
) {
  onCreateUserConnection(filter: $filter) {
    userId
    connectedUser {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    connectedUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserConnectionSubscriptionVariables,
  APITypes.OnCreateUserConnectionSubscription
>;
export const onUpdateUserConnection = /* GraphQL */ `subscription OnUpdateUserConnection(
  $filter: ModelSubscriptionUserConnectionFilterInput
) {
  onUpdateUserConnection(filter: $filter) {
    userId
    connectedUser {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    connectedUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserConnectionSubscriptionVariables,
  APITypes.OnUpdateUserConnectionSubscription
>;
export const onDeleteUserConnection = /* GraphQL */ `subscription OnDeleteUserConnection(
  $filter: ModelSubscriptionUserConnectionFilterInput
) {
  onDeleteUserConnection(filter: $filter) {
    userId
    connectedUser {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    connectedUserId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserConnectionSubscriptionVariables,
  APITypes.OnDeleteUserConnectionSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
  onCreateProject(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    status
    name
    profilePicture
    coverImage
    about
    members {
      items {
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        status
        role
        createdAt
        updatedAt
        projectMembersId
        projectUserUserId
        __typename
      }
      nextToken
      __typename
    }
    location
    startDate
    endDate
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
  onUpdateProject(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    status
    name
    profilePicture
    coverImage
    about
    members {
      items {
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        status
        role
        createdAt
        updatedAt
        projectMembersId
        projectUserUserId
        __typename
      }
      nextToken
      __typename
    }
    location
    startDate
    endDate
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
  onDeleteProject(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    status
    name
    profilePicture
    coverImage
    about
    members {
      items {
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        status
        role
        createdAt
        updatedAt
        projectMembersId
        projectUserUserId
        __typename
      }
      nextToken
      __typename
    }
    location
    startDate
    endDate
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreateProjectUser = /* GraphQL */ `subscription OnCreateProjectUser(
  $filter: ModelSubscriptionProjectUserFilterInput
) {
  onCreateProjectUser(filter: $filter) {
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    status
    role
    createdAt
    updatedAt
    projectMembersId
    projectUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProjectUserSubscriptionVariables,
  APITypes.OnCreateProjectUserSubscription
>;
export const onUpdateProjectUser = /* GraphQL */ `subscription OnUpdateProjectUser(
  $filter: ModelSubscriptionProjectUserFilterInput
) {
  onUpdateProjectUser(filter: $filter) {
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    status
    role
    createdAt
    updatedAt
    projectMembersId
    projectUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProjectUserSubscriptionVariables,
  APITypes.OnUpdateProjectUserSubscription
>;
export const onDeleteProjectUser = /* GraphQL */ `subscription OnDeleteProjectUser(
  $filter: ModelSubscriptionProjectUserFilterInput
) {
  onDeleteProjectUser(filter: $filter) {
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    status
    role
    createdAt
    updatedAt
    projectMembersId
    projectUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProjectUserSubscriptionVariables,
  APITypes.OnDeleteProjectUserSubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onCreateGroup(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    name
    profilePicture
    coverImage
    about
    members {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        status
        role
        createdAt
        updatedAt
        groupMembersId
        groupUserUserId
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    private
    visible
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
  onUpdateGroup(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    name
    profilePicture
    coverImage
    about
    members {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        status
        role
        createdAt
        updatedAt
        groupMembersId
        groupUserUserId
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    private
    visible
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
  onDeleteGroup(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    name
    profilePicture
    coverImage
    about
    members {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        status
        role
        createdAt
        updatedAt
        groupMembersId
        groupUserUserId
        __typename
      }
      nextToken
      __typename
    }
    rooms {
      items {
        id
        name
        users {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        group {
          id
          userId
          name
          profilePicture
          coverImage
          about
          private
          visible
          createdAt
          updatedAt
          __typename
        }
        groupId
        project {
          id
          userId
          status
          name
          profilePicture
          coverImage
          about
          location
          startDate
          endDate
          createdAt
          updatedAt
          __typename
        }
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    private
    visible
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateGroupUser = /* GraphQL */ `subscription OnCreateGroupUser($filter: ModelSubscriptionGroupUserFilterInput) {
  onCreateGroupUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    status
    role
    createdAt
    updatedAt
    groupMembersId
    groupUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupUserSubscriptionVariables,
  APITypes.OnCreateGroupUserSubscription
>;
export const onUpdateGroupUser = /* GraphQL */ `subscription OnUpdateGroupUser($filter: ModelSubscriptionGroupUserFilterInput) {
  onUpdateGroupUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    status
    role
    createdAt
    updatedAt
    groupMembersId
    groupUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupUserSubscriptionVariables,
  APITypes.OnUpdateGroupUserSubscription
>;
export const onDeleteGroupUser = /* GraphQL */ `subscription OnDeleteGroupUser($filter: ModelSubscriptionGroupUserFilterInput) {
  onDeleteGroupUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    status
    role
    createdAt
    updatedAt
    groupMembersId
    groupUserUserId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupUserSubscriptionVariables,
  APITypes.OnDeleteGroupUserSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
    id
    body
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      items {
        id
        body
        post {
          id
          body
          userId
          createdAt
          updatedAt
          __typename
        }
        postId
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
    id
    body
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      items {
        id
        body
        post {
          id
          body
          userId
          createdAt
          updatedAt
          __typename
        }
        postId
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
    id
    body
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      items {
        id
        body
        post {
          id
          body
          userId
          createdAt
          updatedAt
          __typename
        }
        postId
        createdAt
        updatedAt
        postCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    body
    post {
      id
      body
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      comments {
        items {
          id
          body
          postId
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    postId
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    id
    body
    post {
      id
      body
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      comments {
        items {
          id
          body
          postId
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    postId
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    id
    body
    post {
      id
      body
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      comments {
        items {
          id
          body
          postId
          createdAt
          updatedAt
          postCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    postId
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onCreateRoom(filter: $filter) {
    id
    name
    users {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onUpdateRoom(filter: $filter) {
    id
    name
    users {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
  onDeleteRoom(filter: $filter) {
    id
    name
    users {
      items {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        room {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        roomId
        isTyping
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    messages {
      items {
        id
        content
        roomId
        userId
        authoredBy {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        readReceipts {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    group {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      name
      profilePicture
      coverImage
      about
      members {
        items {
          id
          userId
          groupId
          status
          role
          createdAt
          updatedAt
          groupMembersId
          groupUserUserId
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      private
      visible
      createdAt
      updatedAt
      __typename
    }
    groupId
    project {
      id
      user {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      userId
      status
      name
      profilePicture
      coverImage
      about
      members {
        items {
          userId
          projectId
          status
          role
          createdAt
          updatedAt
          projectMembersId
          projectUserUserId
          __typename
        }
        nextToken
        __typename
      }
      location
      startDate
      endDate
      rooms {
        items {
          id
          name
          groupId
          projectId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    projectId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
export const onCreateRoomUser = /* GraphQL */ `subscription OnCreateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onCreateRoomUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoomUserSubscriptionVariables,
  APITypes.OnCreateRoomUserSubscription
>;
export const onUpdateRoomUser = /* GraphQL */ `subscription OnUpdateRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onUpdateRoomUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoomUserSubscriptionVariables,
  APITypes.OnUpdateRoomUserSubscription
>;
export const onDeleteRoomUser = /* GraphQL */ `subscription OnDeleteRoomUser($filter: ModelSubscriptionRoomUserFilterInput) {
  onDeleteRoomUser(filter: $filter) {
    id
    user {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    userId
    room {
      id
      name
      users {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      group {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        private
        visible
        createdAt
        updatedAt
        __typename
      }
      groupId
      project {
        id
        user {
          id
          owner
          birthdate
          emailAddress
          firstName
          lastName
          location
          phoneNumber
          coverImage
          profilePicture
          jobTitle
          linkedInURL
          createdAt
          updatedAt
          __typename
        }
        userId
        status
        name
        profilePicture
        coverImage
        about
        members {
          nextToken
          __typename
        }
        location
        startDate
        endDate
        rooms {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      projectId
      createdAt
      updatedAt
      __typename
    }
    roomId
    isTyping
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoomUserSubscriptionVariables,
  APITypes.OnDeleteRoomUserSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
    id
    content
    roomId
    userId
    authoredBy {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
    id
    content
    roomId
    userId
    authoredBy {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
    id
    content
    roomId
    userId
    authoredBy {
      id
      owner
      birthdate
      emailAddress
      firstName
      lastName
      location
      phoneNumber
      messages {
        items {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      rooms {
        items {
          id
          userId
          roomId
          isTyping
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      coverImage
      profilePicture
      jobTitle
      linkedInURL
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    readReceipts {
      items {
        id
        messageId
        message {
          id
          content
          roomId
          userId
          createdAt
          updatedAt
          __typename
        }
        userId
        readAt
        roomId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateReadReceipt = /* GraphQL */ `subscription OnCreateReadReceipt(
  $filter: ModelSubscriptionReadReceiptFilterInput
) {
  onCreateReadReceipt(filter: $filter) {
    id
    messageId
    message {
      id
      content
      roomId
      userId
      authoredBy {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    readAt
    roomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReadReceiptSubscriptionVariables,
  APITypes.OnCreateReadReceiptSubscription
>;
export const onUpdateReadReceipt = /* GraphQL */ `subscription OnUpdateReadReceipt(
  $filter: ModelSubscriptionReadReceiptFilterInput
) {
  onUpdateReadReceipt(filter: $filter) {
    id
    messageId
    message {
      id
      content
      roomId
      userId
      authoredBy {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    readAt
    roomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReadReceiptSubscriptionVariables,
  APITypes.OnUpdateReadReceiptSubscription
>;
export const onDeleteReadReceipt = /* GraphQL */ `subscription OnDeleteReadReceipt(
  $filter: ModelSubscriptionReadReceiptFilterInput
) {
  onDeleteReadReceipt(filter: $filter) {
    id
    messageId
    message {
      id
      content
      roomId
      userId
      authoredBy {
        id
        owner
        birthdate
        emailAddress
        firstName
        lastName
        location
        phoneNumber
        messages {
          nextToken
          __typename
        }
        readReceipts {
          nextToken
          __typename
        }
        rooms {
          nextToken
          __typename
        }
        coverImage
        profilePicture
        jobTitle
        linkedInURL
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      readReceipts {
        items {
          id
          messageId
          userId
          readAt
          roomId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    userId
    readAt
    roomId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReadReceiptSubscriptionVariables,
  APITypes.OnDeleteReadReceiptSubscription
>;
