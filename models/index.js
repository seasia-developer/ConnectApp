// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProjectStatus = {
  "DRAFT": "DRAFT",
  "ACTIVE": "ACTIVE",
  "FINISHED": "FINISHED",
  "DISABLED": "DISABLED",
  "ARCHIVED": "ARCHIVED"
};

const ProjectUserStatus = {
  "INVITED": "INVITED",
  "ACTIVE": "ACTIVE",
  "SUSPENDED": "SUSPENDED",
  "BANNED": "BANNED"
};

const ProjectUserRole = {
  "MEMBER": "MEMBER",
  "MODERATOR": "MODERATOR",
  "ADMIN": "ADMIN"
};

const GroupUserStatus = {
  "INVITED": "INVITED",
  "ACTIVE": "ACTIVE",
  "SUSPENDED": "SUSPENDED",
  "BANNED": "BANNED"
};

const GroupUserRole = {
  "MEMBER": "MEMBER",
  "MODERATOR": "MODERATOR",
  "ADMIN": "ADMIN"
};

const RoomUserIsTyping = {
  "TRUE": "TRUE",
  "FALSE": "FALSE"
};

const { User, UserConnection, Project, ProjectUser, Group, GroupUser, Post, Comment, Room, Todo, RoomUserComposite, Message, ReadReceipt } = initSchema(schema);

export {
  User,
  UserConnection,
  Project,
  ProjectUser,
  Group,
  GroupUser,
  Post,
  Comment,
  Room,
  Todo,
  RoomUserComposite,
  Message,
  ReadReceipt,
  ProjectStatus,
  ProjectUserStatus,
  ProjectUserRole,
  GroupUserStatus,
  GroupUserRole,
  RoomUserIsTyping
};