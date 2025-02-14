import { connectDB } from '@/lib/mongodb';
import { IUser } from '@/types/IUser';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to the database
    const { db } = await connectDB();

    // Fetch all users from the 'users' collection
    const users = await db.collection('users').find().toArray() as IUser[];

    // Return users as JSON
    return NextResponse.json(users);

  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ message: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();  
    const { db } = await connectDB();

    // Example of how to insert a user (adjust based on your schema)
    const result = await db.collection('users').insertOne(body);

    return NextResponse.json({ message: 'User created', userId: result.insertedId });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json({ message: 'Failed to create user' }, { status: 500 });
  }
}