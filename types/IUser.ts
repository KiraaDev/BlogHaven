import { ObjectId } from 'mongodb'

export enum UserRole {
    Admin = 'admin',
    User = 'user',
}

export interface IUser {
    _id?: ObjectId;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    emailVerified?: Date | null;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
  }
  