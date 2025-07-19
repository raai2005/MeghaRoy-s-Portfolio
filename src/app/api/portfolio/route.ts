import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('MyPortfolioDB') // Use the database name from .env
    const portfolio = await db.collection('portfolio').findOne({ active: true })

    console.log('Portfolio data from database:', portfolio)

    if (!portfolio) {
      // Return default data if no portfolio found
      const defaultData = {
        hero: {
          name: 'Megha',
          title: 'Full Stack Developer',
          description: 'Passionate about creating beautiful and functional web applications',
          image: '/placeholder-avatar.jpg'
        },
        about: {
          description: 'I am a passionate full stack developer with experience in modern web technologies.',
          image: '/placeholder-about.jpg'
        },
        skills: [
          { name: 'React', level: 90 },
          { name: 'Node.js', level: 85 },
          { name: 'TypeScript', level: 80 },
          { name: 'MongoDB', level: 75 },
          { name: 'Next.js', level: 85 }
        ],
        projects: [],
        contact: {
          email: 'contact@megha.dev',
          phone: '+1 (555) 123-4567',
          linkedin: 'https://linkedin.com/in/megha',
          github: 'https://github.com/megha'
        }
      }
      console.log('No portfolio found, returning default data')
      return NextResponse.json(defaultData)
    }

    return NextResponse.json(portfolio)
  } catch (error) {
    console.error('Error fetching portfolio:', error)
    return NextResponse.json(
      { error: 'Failed to fetch portfolio data' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const client = await clientPromise
    const db = client.db('MyPortfolioDB') // Use the database name from .env
    
    console.log('Saving portfolio data:', data)
    
    const result = await db.collection('portfolio').updateOne(
      { active: true },
      { 
        $set: { 
          ...data, 
          active: true,
          updatedAt: new Date() 
        } 
      },
      { upsert: true }
    )

    console.log('Save result:', result)
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error updating portfolio:', error)
    return NextResponse.json(
      { error: 'Failed to update portfolio data' },
      { status: 500 }
    )
  }
}
