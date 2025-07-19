'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/HeroNew'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

interface PortfolioData {
  hero?: {
    name?: string
    title?: string
    description?: string
    image?: string
  }
  about?: {
    title?: string
    description?: string
    image?: string
  }
  skills?: Array<{
    name: string
    level: number
    category: string
  }>
  projects?: Array<{
    title: string
    description: string
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
    image?: string
  }>
  contact?: {
    email?: string
    phone?: string
    location?: string
  }
}

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        console.log('Fetching portfolio data...')
        const response = await fetch('/api/portfolio')
        if (response.ok) {
          const data = await response.json()
          console.log('Portfolio data received:', data)
          setPortfolioData(data)
        } else {
          console.error('Failed to fetch portfolio data:', response.status)
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolioData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      <Footer />
    </div>
  )
}
