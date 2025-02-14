import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client, { connectDB } from "./lib/mongodb";
import authConfig from "./auth.config";
import { IUser, UserRole } from "./types/IUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    session: { strategy: "jwt" },
    ...authConfig,
    callbacks: {
        async signIn({ user, account, profile }) {
            const { db } = await connectDB();

            const usersCollection = db.collection('users');

            const existingUser = await usersCollection.findOne({ email: user.email });

            if (!existingUser) {

                const newUser: IUser = {
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: UserRole.User,
                    createdAt: new Date(), 
                    updatedAt: new Date()
                }
                // Insert new user in MongoDB
                await usersCollection.insertOne(newUser);
            }

            return true;
        }
    },
})