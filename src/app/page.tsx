'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/backgrounds/GlobalBackground'
import ClickEffect from '@/components/backgrounds/ClickEffect'
import { BentoGrid, BentoGridItem } from '@/components/ui/BentoGrid'

// Import refactored components for Bento Grid
import HeroBento from '@/components/bento/HeroBento'
import AboutBento from '@/components/bento/AboutBento'
import SkillsBento from '@/components/bento/SkillsBento'
import ProjectsBento from '@/components/bento/ProjectsBento'
import ContactBento from '@/components/bento/ContactBento'

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
    <ClickEffect>
      <GlobalBackground>
        <div className="min-h-screen">
          <Header />
          
          {/* Bento Grid Layout */}
          <div className="pt-20 pb-4 lg:pt-24 lg:pb-6">
            <BentoGrid>
              {/* Hero Section - Full width hero */}
              <BentoGridItem size="hero" glowColor="rgba(99, 102, 241, 0.4)" delay={0.1} id="hero">
                <HeroBento data={portfolioData.hero} />
              </BentoGridItem>
              
              {/* About Section */}
              <BentoGridItem size="wide" glowColor="rgba(16, 185, 129, 0.4)" delay={0.2} id="about">
                <AboutBento data={portfolioData.about} />
              </BentoGridItem>
              
              {/* Skills Section */}
              <BentoGridItem size="wide" glowColor="rgba(59, 130, 246, 0.4)" delay={0.3} id="skills">
                <SkillsBento data={portfolioData.skills} />
              </BentoGridItem>
              
              {/* Projects Section */}
              <BentoGridItem size="wide" glowColor="rgba(168, 85, 247, 0.4)" delay={0.4} id="projects">
                <ProjectsBento data={portfolioData.projects} />
              </BentoGridItem>
              
              {/* Contact Section */}
              <BentoGridItem size="wide" glowColor="rgba(245, 101, 101, 0.4)" delay={0.5} id="contact">
                <ContactBento data={portfolioData.contact} />
              </BentoGridItem>
            </BentoGrid>
          </div>
          
          <Footer />
        </div>
      </GlobalBackground>
    </ClickEffect>
  )
}
