import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ProjectStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  DISABLED = "DISABLED",
  ARCHIVED = "ARCHIVED"
}

export enum ProjectUserStatus {
  INVITED = "INVITED",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  BANNED = "BANNED"
}

export enum ProjectUserRole {
  MEMBER = "MEMBER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN"
}

export enum GroupUserStatus {
  INVITED = "INVITED",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  BANNED = "BANNED"
}

export enum GroupUserRole {
  MEMBER = "MEMBER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN"
}

export enum RoomUserIsTyping {
  TRUE = "TRUE",
  FALSE = "FALSE"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly emailAddress: string;
  readonly phoneNumber: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthdate: string;
  readonly profilePicture?: string | null;
  readonly roomsComposite?: (RoomUserComposite | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner: string;
  readonly emailAddress: string;
  readonly phoneNumber: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly birthdate: string;
  readonly profilePicture?: string | null;
  readonly roomsComposite: AsyncCollection<RoomUserComposite>;
  readonly messages: AsyncCollection<Message>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserConnection = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<UserConnection, ['userId', 'connectedUserId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly connectedUser?: User | null;
  readonly connectedUserId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserConnection = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<UserConnection, ['userId', 'connectedUserId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly userId: string;
  readonly connectedUser: AsyncItem<User | undefined>;
  readonly connectedUserId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserConnection = LazyLoading extends LazyLoadingDisabled ? EagerUserConnection : LazyUserConnection

export declare const UserConnection: (new (init: ModelInit<UserConnection>) => UserConnection) & {
  copyOf(source: UserConnection, mutator: (draft: MutableModel<UserConnection>) => MutableModel<UserConnection> | void): UserConnection;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly status?: ProjectStatus | keyof typeof ProjectStatus | null;
  readonly name: string;
  readonly profilePicture?: string | null;
  readonly coverImage?: string | null;
  readonly about?: string | null;
  readonly members?: (ProjectUser | null)[] | null;
  readonly location: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly rooms?: (Room | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly status?: ProjectStatus | keyof typeof ProjectStatus | null;
  readonly name: string;
  readonly profilePicture?: string | null;
  readonly coverImage?: string | null;
  readonly about?: string | null;
  readonly members: AsyncCollection<ProjectUser>;
  readonly location: string;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly rooms: AsyncCollection<Room>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerProjectUser = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ProjectUser, ['userId', 'projectId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly user?: User | null;
  readonly userId: string;
  readonly project?: Project | null;
  readonly projectId: string;
  readonly status?: ProjectUserStatus | keyof typeof ProjectUserStatus | null;
  readonly role?: ProjectUserRole | keyof typeof ProjectUserRole | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectMembersId?: string | null;
  readonly projectUserUserId?: string | null;
}

type LazyProjectUser = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ProjectUser, ['userId', 'projectId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly project: AsyncItem<Project | undefined>;
  readonly projectId: string;
  readonly status?: ProjectUserStatus | keyof typeof ProjectUserStatus | null;
  readonly role?: ProjectUserRole | keyof typeof ProjectUserRole | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly projectMembersId?: string | null;
  readonly projectUserUserId?: string | null;
}

export declare type ProjectUser = LazyLoading extends LazyLoadingDisabled ? EagerProjectUser : LazyProjectUser

export declare const ProjectUser: (new (init: ModelInit<ProjectUser>) => ProjectUser) & {
  copyOf(source: ProjectUser, mutator: (draft: MutableModel<ProjectUser>) => MutableModel<ProjectUser> | void): ProjectUser;
}

type EagerGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly name: string;
  readonly profilePicture?: string | null;
  readonly coverImage?: string | null;
  readonly about?: string | null;
  readonly members?: (GroupUser | null)[] | null;
  readonly private: boolean;
  readonly visible: boolean;
  readonly rooms?: (Room | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Group, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly name: string;
  readonly profilePicture?: string | null;
  readonly coverImage?: string | null;
  readonly about?: string | null;
  readonly members: AsyncCollection<GroupUser>;
  readonly private: boolean;
  readonly visible: boolean;
  readonly rooms: AsyncCollection<Room>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Group = LazyLoading extends LazyLoadingDisabled ? EagerGroup : LazyGroup

export declare const Group: (new (init: ModelInit<Group>) => Group) & {
  copyOf(source: Group, mutator: (draft: MutableModel<Group>) => MutableModel<Group> | void): Group;
}

type EagerGroupUser = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<GroupUser, ['userId', 'groupId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly group?: Group | null;
  readonly groupId: string;
  readonly status?: GroupUserStatus | keyof typeof GroupUserStatus | null;
  readonly role?: GroupUserRole | keyof typeof GroupUserRole | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMembersId?: string | null;
  readonly groupUserUserId?: string | null;
}

type LazyGroupUser = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<GroupUser, ['userId', 'groupId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly group: AsyncItem<Group | undefined>;
  readonly groupId: string;
  readonly status?: GroupUserStatus | keyof typeof GroupUserStatus | null;
  readonly role?: GroupUserRole | keyof typeof GroupUserRole | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly groupMembersId?: string | null;
  readonly groupUserUserId?: string | null;
}

export declare type GroupUser = LazyLoading extends LazyLoadingDisabled ? EagerGroupUser : LazyGroupUser

export declare const GroupUser: (new (init: ModelInit<GroupUser>) => GroupUser) & {
  copyOf(source: GroupUser, mutator: (draft: MutableModel<GroupUser>) => MutableModel<GroupUser> | void): GroupUser;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly user?: User | null;
  readonly userId: string;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly post?: Post | null;
  readonly postId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly body: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly postId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly users?: (RoomUserComposite | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly group?: Group | null;
  readonly groupId?: string | null;
  readonly project?: Project | null;
  readonly projectId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly users: AsyncCollection<RoomUserComposite>;
  readonly messages: AsyncCollection<Message>;
  readonly group: AsyncItem<Group | undefined>;
  readonly groupId?: string | null;
  readonly project: AsyncItem<Project | undefined>;
  readonly projectId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerRoomUserComposite = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<RoomUserComposite, ['id', 'userId', 'roomId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly roomId: string;
  readonly isTyping?: string | null;
  readonly typing: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoomUserComposite = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<RoomUserComposite, ['id', 'userId', 'roomId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly roomId: string;
  readonly isTyping?: string | null;
  readonly typing: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RoomUserComposite = LazyLoading extends LazyLoadingDisabled ? EagerRoomUserComposite : LazyRoomUserComposite

export declare const RoomUserComposite: (new (init: ModelInit<RoomUserComposite>) => RoomUserComposite) & {
  copyOf(source: RoomUserComposite, mutator: (draft: MutableModel<RoomUserComposite>) => MutableModel<RoomUserComposite> | void): RoomUserComposite;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Message, ['id', 'roomId']>;
  };
  readonly id: string;
  readonly content: string;
  readonly roomId: string;
  readonly userId: string;
  readonly authoredBy?: User | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly readReceipts?: (ReadReceipt | null)[] | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Message, ['id', 'roomId']>;
  };
  readonly id: string;
  readonly content: string;
  readonly roomId: string;
  readonly userId: string;
  readonly authoredBy: AsyncItem<User | undefined>;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly readReceipts: AsyncCollection<ReadReceipt>;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerReadReceipt = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ReadReceipt, ['id', 'messageId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId: string;
  readonly message?: Message | null;
  readonly userId: string;
  readonly readAt: string;
  readonly roomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReadReceipt = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<ReadReceipt, ['id', 'messageId']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId: string;
  readonly message: AsyncItem<Message | undefined>;
  readonly userId: string;
  readonly readAt: string;
  readonly roomId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReadReceipt = LazyLoading extends LazyLoadingDisabled ? EagerReadReceipt : LazyReadReceipt

export declare const ReadReceipt: (new (init: ModelInit<ReadReceipt>) => ReadReceipt) & {
  copyOf(source: ReadReceipt, mutator: (draft: MutableModel<ReadReceipt>) => MutableModel<ReadReceipt> | void): ReadReceipt;
}