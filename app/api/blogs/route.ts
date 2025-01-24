import { connectDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    try {
        // Connect to the database
        const { db } = await connectDB();

        const blogs = await db.collection('blogs').find().toArray();

        // Return users as JSON
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
    }
}