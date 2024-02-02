/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserConnection = /* GraphQL */ `mutation CreateUserConnection(
  $input: CreateUserConnectionInput!
  $condition: ModelUserConnectionConditionInput
) {
  createUserConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserConnectionMutationVariables,
  APITypes.CreateUserConnectionMutation
>;
export const updateUserConnection = /* GraphQL */ `mutation UpdateUserConnection(
  $input: UpdateUserConnectionInput!
  $condition: ModelUserConnectionConditionInput
) {
  updateUserConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserConnectionMutationVariables,
  APITypes.UpdateUserConnectionMutation
>;
export const deleteUserConnection = /* GraphQL */ `mutation DeleteUserConnection(
  $input: DeleteUserConnectionInput!
  $condition: ModelUserConnectionConditionInput
) {
  deleteUserConnection(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserConnectionMutationVariables,
  APITypes.DeleteUserConnectionMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createProjectUser = /* GraphQL */ `mutation CreateProjectUser(
  $input: CreateProjectUserInput!
  $condition: ModelProjectUserConditionInput
) {
  createProjectUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProjectUserMutationVariables,
  APITypes.CreateProjectUserMutation
>;
export const updateProjectUser = /* GraphQL */ `mutation UpdateProjectUser(
  $input: UpdateProjectUserInput!
  $condition: ModelProjectUserConditionInput
) {
  updateProjectUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProjectUserMutationVariables,
  APITypes.UpdateProjectUserMutation
>;
export const deleteProjectUser = /* GraphQL */ `mutation DeleteProjectUser(
  $input: DeleteProjectUserInput!
  $condition: ModelProjectUserConditionInput
) {
  deleteProjectUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProjectUserMutationVariables,
  APITypes.DeleteProjectUserMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $input: CreateGroupInput!
  $condition: ModelGroupConditionInput
) {
  createGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $input: UpdateGroupInput!
  $condition: ModelGroupConditionInput
) {
  updateGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $input: DeleteGroupInput!
  $condition: ModelGroupConditionInput
) {
  deleteGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const createGroupUser = /* GraphQL */ `mutation CreateGroupUser(
  $input: CreateGroupUserInput!
  $condition: ModelGroupUserConditionInput
) {
  createGroupUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGroupUserMutationVariables,
  APITypes.CreateGroupUserMutation
>;
export const updateGroupUser = /* GraphQL */ `mutation UpdateGroupUser(
  $input: UpdateGroupUserInput!
  $condition: ModelGroupUserConditionInput
) {
  updateGroupUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGroupUserMutationVariables,
  APITypes.UpdateGroupUserMutation
>;
export const deleteGroupUser = /* GraphQL */ `mutation DeleteGroupUser(
  $input: DeleteGroupUserInput!
  $condition: ModelGroupUserConditionInput
) {
  deleteGroupUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGroupUserMutationVariables,
  APITypes.DeleteGroupUserMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createRoom = /* GraphQL */ `mutation CreateRoom(
  $input: CreateRoomInput!
  $condition: ModelRoomConditionInput
) {
  createRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoomMutationVariables,
  APITypes.CreateRoomMutation
>;
export const updateRoom = /* GraphQL */ `mutation UpdateRoom(
  $input: UpdateRoomInput!
  $condition: ModelRoomConditionInput
) {
  updateRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomMutationVariables,
  APITypes.UpdateRoomMutation
>;
export const deleteRoom = /* GraphQL */ `mutation DeleteRoom(
  $input: DeleteRoomInput!
  $condition: ModelRoomConditionInput
) {
  deleteRoom(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomMutationVariables,
  APITypes.DeleteRoomMutation
>;
export const createRoomUser = /* GraphQL */ `mutation CreateRoomUser(
  $input: CreateRoomUserInput!
  $condition: ModelRoomUserConditionInput
) {
  createRoomUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRoomUserMutationVariables,
  APITypes.CreateRoomUserMutation
>;
export const updateRoomUser = /* GraphQL */ `mutation UpdateRoomUser(
  $input: UpdateRoomUserInput!
  $condition: ModelRoomUserConditionInput
) {
  updateRoomUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRoomUserMutationVariables,
  APITypes.UpdateRoomUserMutation
>;
export const deleteRoomUser = /* GraphQL */ `mutation DeleteRoomUser(
  $input: DeleteRoomUserInput!
  $condition: ModelRoomUserConditionInput
) {
  deleteRoomUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRoomUserMutationVariables,
  APITypes.DeleteRoomUserMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const updateMessage = /* GraphQL */ `mutation UpdateMessage(
  $input: UpdateMessageInput!
  $condition: ModelMessageConditionInput
) {
  updateMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMessageMutationVariables,
  APITypes.UpdateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createReadReceipt = /* GraphQL */ `mutation CreateReadReceipt(
  $input: CreateReadReceiptInput!
  $condition: ModelReadReceiptConditionInput
) {
  createReadReceipt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReadReceiptMutationVariables,
  APITypes.CreateReadReceiptMutation
>;
export const updateReadReceipt = /* GraphQL */ `mutation UpdateReadReceipt(
  $input: UpdateReadReceiptInput!
  $condition: ModelReadReceiptConditionInput
) {
  updateReadReceipt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReadReceiptMutationVariables,
  APITypes.UpdateReadReceiptMutation
>;
export const deleteReadReceipt = /* GraphQL */ `mutation DeleteReadReceipt(
  $input: DeleteReadReceiptInput!
  $condition: ModelReadReceiptConditionInput
) {
  deleteReadReceipt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReadReceiptMutationVariables,
  APITypes.DeleteReadReceiptMutation
>;
