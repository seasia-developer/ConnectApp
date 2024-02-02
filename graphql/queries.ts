/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReadReceiptsByUser = /* GraphQL */ `query GetReadReceiptsByUser($userId: ID!) {
  getReadReceiptsByUser(userId: $userId) {
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
` as GeneratedQuery<
  APITypes.GetReadReceiptsByUserQueryVariables,
  APITypes.GetReadReceiptsByUserQuery
>;
export const getUsersInRoom = /* GraphQL */ `query GetUsersInRoom($roomId: ID!) {
  getUsersInRoom(roomId: $roomId) {
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
` as GeneratedQuery<
  APITypes.GetUsersInRoomQueryVariables,
  APITypes.GetUsersInRoomQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const searchUsers = /* GraphQL */ `query SearchUsers(
  $filter: SearchableUserFilterInput
  $sort: [SearchableUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableUserAggregationInput]
) {
  searchUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchUsersQueryVariables,
  APITypes.SearchUsersQuery
>;
export const getUserConnection = /* GraphQL */ `query GetUserConnection($userId: ID!, $connectedUserId: ID!) {
  getUserConnection(userId: $userId, connectedUserId: $connectedUserId) {
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
` as GeneratedQuery<
  APITypes.GetUserConnectionQueryVariables,
  APITypes.GetUserConnectionQuery
>;
export const listUserConnections = /* GraphQL */ `query ListUserConnections(
  $userId: ID
  $connectedUserId: ModelIDKeyConditionInput
  $filter: ModelUserConnectionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserConnections(
    userId: $userId
    connectedUserId: $connectedUserId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      connectedUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserConnectionsQueryVariables,
  APITypes.ListUserConnectionsQuery
>;
export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const searchProjects = /* GraphQL */ `query SearchProjects(
  $filter: SearchableProjectFilterInput
  $sort: [SearchableProjectSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableProjectAggregationInput]
) {
  searchProjects(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchProjectsQueryVariables,
  APITypes.SearchProjectsQuery
>;
export const getProjectUser = /* GraphQL */ `query GetProjectUser($userId: ID!, $projectId: ID!) {
  getProjectUser(userId: $userId, projectId: $projectId) {
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
` as GeneratedQuery<
  APITypes.GetProjectUserQueryVariables,
  APITypes.GetProjectUserQuery
>;
export const listProjectUsers = /* GraphQL */ `query ListProjectUsers(
  $userId: ID
  $projectId: ModelIDKeyConditionInput
  $filter: ModelProjectUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProjectUsers(
    userId: $userId
    projectId: $projectId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
}
` as GeneratedQuery<
  APITypes.ListProjectUsersQueryVariables,
  APITypes.ListProjectUsersQuery
>;
export const searchProjectUsers = /* GraphQL */ `query SearchProjectUsers(
  $filter: SearchableProjectUserFilterInput
  $sort: [SearchableProjectUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableProjectUserAggregationInput]
) {
  searchProjectUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
      status
      role
      createdAt
      updatedAt
      projectMembersId
      projectUserUserId
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchProjectUsersQueryVariables,
  APITypes.SearchProjectUsersQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
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
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const searchGroups = /* GraphQL */ `query SearchGroups(
  $filter: SearchableGroupFilterInput
  $sort: [SearchableGroupSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableGroupAggregationInput]
) {
  searchGroups(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchGroupsQueryVariables,
  APITypes.SearchGroupsQuery
>;
export const getGroupUser = /* GraphQL */ `query GetGroupUser($userId: ID!, $groupId: ID!) {
  getGroupUser(userId: $userId, groupId: $groupId) {
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
` as GeneratedQuery<
  APITypes.GetGroupUserQueryVariables,
  APITypes.GetGroupUserQuery
>;
export const listGroupUsers = /* GraphQL */ `query ListGroupUsers(
  $userId: ID
  $groupId: ModelIDKeyConditionInput
  $filter: ModelGroupUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroupUsers(
    userId: $userId
    groupId: $groupId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
}
` as GeneratedQuery<
  APITypes.ListGroupUsersQueryVariables,
  APITypes.ListGroupUsersQuery
>;
export const searchGroupUsers = /* GraphQL */ `query SearchGroupUsers(
  $filter: SearchableGroupUserFilterInput
  $sort: [SearchableGroupUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableGroupUserAggregationInput]
) {
  searchGroupUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
      status
      role
      createdAt
      updatedAt
      groupMembersId
      groupUserUserId
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchGroupUsersQueryVariables,
  APITypes.SearchGroupUsersQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const searchPosts = /* GraphQL */ `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: [SearchablePostSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchablePostAggregationInput]
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchPostsQueryVariables,
  APITypes.SearchPostsQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getRoom = /* GraphQL */ `query GetRoom($id: ID!) {
  getRoom(id: $id) {
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
` as GeneratedQuery<APITypes.GetRoomQueryVariables, APITypes.GetRoomQuery>;
export const listRooms = /* GraphQL */ `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListRoomsQueryVariables, APITypes.ListRoomsQuery>;
export const roomsByGroupId = /* GraphQL */ `query RoomsByGroupId(
  $groupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByGroupId(
    groupId: $groupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByGroupIdQueryVariables,
  APITypes.RoomsByGroupIdQuery
>;
export const roomsByProjectId = /* GraphQL */ `query RoomsByProjectId(
  $projectId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  roomsByProjectId(
    projectId: $projectId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomsByProjectIdQueryVariables,
  APITypes.RoomsByProjectIdQuery
>;
export const searchRooms = /* GraphQL */ `query SearchRooms(
  $filter: SearchableRoomFilterInput
  $sort: [SearchableRoomSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableRoomAggregationInput]
) {
  searchRooms(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchRoomsQueryVariables,
  APITypes.SearchRoomsQuery
>;
export const getRoomUser = /* GraphQL */ `query GetRoomUser($id: ID!, $userId: ID!, $roomId: ID!) {
  getRoomUser(id: $id, userId: $userId, roomId: $roomId) {
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
` as GeneratedQuery<
  APITypes.GetRoomUserQueryVariables,
  APITypes.GetRoomUserQuery
>;
export const listRoomUsers = /* GraphQL */ `query ListRoomUsers(
  $id: ID
  $userIdRoomId: ModelRoomUserPrimaryCompositeKeyConditionInput
  $filter: ModelRoomUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRoomUsers(
    id: $id
    userIdRoomId: $userIdRoomId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
      room {
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
      roomId
      isTyping
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRoomUsersQueryVariables,
  APITypes.ListRoomUsersQuery
>;
export const roomUsersByUserId = /* GraphQL */ `query RoomUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomUserFilterInput
  $limit: Int
  $nextToken: String
) {
  roomUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      room {
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
      roomId
      isTyping
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomUsersByUserIdQueryVariables,
  APITypes.RoomUsersByUserIdQuery
>;
export const roomUsersByRoomId = /* GraphQL */ `query RoomUsersByRoomId(
  $roomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRoomUserFilterInput
  $limit: Int
  $nextToken: String
) {
  roomUsersByRoomId(
    roomId: $roomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
      room {
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
      roomId
      isTyping
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RoomUsersByRoomIdQueryVariables,
  APITypes.RoomUsersByRoomIdQuery
>;
export const searchRoomUsers = /* GraphQL */ `query SearchRoomUsers(
  $filter: SearchableRoomUserFilterInput
  $sort: [SearchableRoomUserSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableRoomUserAggregationInput]
) {
  searchRoomUsers(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
      room {
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
      roomId
      isTyping
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchRoomUsersQueryVariables,
  APITypes.SearchRoomUsersQuery
>;
export const getMessage = /* GraphQL */ `query GetMessage($id: ID!, $roomId: ID!) {
  getMessage(id: $id, roomId: $roomId) {
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
` as GeneratedQuery<
  APITypes.GetMessageQueryVariables,
  APITypes.GetMessageQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $id: ID
  $roomId: ModelIDKeyConditionInput
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMessages(
    id: $id
    roomId: $roomId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const messagesByRoomId = /* GraphQL */ `query MessagesByRoomId(
  $roomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByRoomId(
    roomId: $roomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByRoomIdQueryVariables,
  APITypes.MessagesByRoomIdQuery
>;
export const messagesByUserId = /* GraphQL */ `query MessagesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByUserIdQueryVariables,
  APITypes.MessagesByUserIdQuery
>;
export const searchMessages = /* GraphQL */ `query SearchMessages(
  $filter: SearchableMessageFilterInput
  $sort: [SearchableMessageSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableMessageAggregationInput]
) {
  searchMessages(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
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
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchMessagesQueryVariables,
  APITypes.SearchMessagesQuery
>;
export const getReadReceipt = /* GraphQL */ `query GetReadReceipt($id: ID!, $messageId: ID!) {
  getReadReceipt(id: $id, messageId: $messageId) {
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
` as GeneratedQuery<
  APITypes.GetReadReceiptQueryVariables,
  APITypes.GetReadReceiptQuery
>;
export const listReadReceipts = /* GraphQL */ `query ListReadReceipts(
  $id: ID
  $messageId: ModelIDKeyConditionInput
  $filter: ModelReadReceiptFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listReadReceipts(
    id: $id
    messageId: $messageId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
}
` as GeneratedQuery<
  APITypes.ListReadReceiptsQueryVariables,
  APITypes.ListReadReceiptsQuery
>;
export const readReceiptsByMessageId = /* GraphQL */ `query ReadReceiptsByMessageId(
  $messageId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReadReceiptFilterInput
  $limit: Int
  $nextToken: String
) {
  readReceiptsByMessageId(
    messageId: $messageId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
}
` as GeneratedQuery<
  APITypes.ReadReceiptsByMessageIdQueryVariables,
  APITypes.ReadReceiptsByMessageIdQuery
>;
export const readReceiptsByUserId = /* GraphQL */ `query ReadReceiptsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReadReceiptFilterInput
  $limit: Int
  $nextToken: String
) {
  readReceiptsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
}
` as GeneratedQuery<
  APITypes.ReadReceiptsByUserIdQueryVariables,
  APITypes.ReadReceiptsByUserIdQuery
>;
