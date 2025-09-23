import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Get the active portfolio data
    const portfolioData = await db
      .collection('portfolio')
      .findOne({ active: true });
    
    return NextResponse.json({ 
      success: true,
      data: portfolioData
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to database' 
    }, { status: 500 });
  }
}