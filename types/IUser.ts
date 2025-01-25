import { IBlog } from './IBlog'
import { ObjectId } from 'mongodb'

export enum UserRole {
    Admin = 'admin',
    User = 'user',
}

export interface IUser {
    _id: ObjectId;
    name: string;
    email: string;
    image: string;
    password?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt?: Date; 
    blogs?: IBlog[],
}