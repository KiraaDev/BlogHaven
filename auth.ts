import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client, { connectDB } from "./lib/mongodb";
import authConfig from "./auth.config";

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
                // Insert new user in MongoDB
                await usersCollection.insertOne({
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    createdAt: new Date(),
                });
            }
            
            return true;
        }
    }
})