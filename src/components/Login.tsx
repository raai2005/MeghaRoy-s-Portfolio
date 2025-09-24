'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Image from 'next/image';
import AnimatedBackground from './backgrounds/AnimatedBackground';
import WaveBackground from './backgrounds/WaveBackground';

// Basic fallback animation data if remote animation fails
const fallbackAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 400,
  h: 400,
  nm: "Simple Orb",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [200, 200, 0] },
        s: { 
          a: 1, 
          k: [
            { t: 0, s: [70, 70, 100], e: [100, 100, 100] },
            { t: 30, s: [100, 100, 100], e: [70, 70, 100] },
            { t: 60 }
          ] 
        }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [140, 140] },
          d: 1,
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.4, 0.2, 0.8, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ]
    }
  ]
};

interface AboutData {
  title?: string;
  description?: string;
  image?: string; // Optional field
}

interface AboutProps {
  data?: AboutData;
}

export default function About({ data }: AboutProps) {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    // Fetch the Lottie animation data - with error handling
    fetch('https://lottie.host/b6f68d5a-df68-43e6-9c1d-c0a9f3778119/suM3AAQpkG.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Get as text first to check content
      })
      .then(text => {
        try {
          // Verify we can parse it as JSON
          const jsonData = JSON.parse(text);
          setLottieData(jsonData);
        } catch (err) {
          console.error('Error parsing animation JSON:', err);
          // Fallback to default animation
          setLottieData(fallbackAnimation);
        }
      })
      .catch(error => {
        console.error('Error loading Lottie animation:', error);
        // Use fallback animation instead of null
        setLottieData(fallbackAnimation);
      });
  }, []);

  const aboutData = data || {
    description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
    title: 'About',
    image: '/placeholder-about.jpg', // Default image as a fallback
  };

  const imageUrl = aboutData.image || '/placeholder-about.jpg';

  return (
    <AnimatedBackground variant="about">
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">

        <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {aboutData.title || 'About'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {aboutData.description}
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300">50+ Completed</p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                {[
                  { text: "Frontend Development", color: "blue" },
                  { text: "Backend Development", color: "green" },
                  { text: "Full Stack", color: "purple" },
                  { text: "Database Design", color: "orange" }
                ].map((skill, index) => (
                  <motion.span
                    key={skill.text}
                    className={`bg-${skill.color}-100 dark:bg-${skill.color}-900/30 text-${skill.color}-800 dark:text-${skill.color}-300 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: false }}
                  >
                    {skill.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="relative w-full h-96">
              {/* Dark tech background */}
              <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden">
                {/* Grid background pattern */}
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}>
                </div>
                
                {/* Animated particles in background */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-blue-500"
                    style={{
                      width: Math.random() * 2 + 1 + "px",
                      height: Math.random() * 2 + 1 + "px",
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>
              
              {/* Lottie animation with enhanced glow */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {/* Pulsating glow behind orb */}
                  <motion.div 
                    className="absolute w-full h-full rounded-full blur-xl"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(79, 70, 229, 0.6) 0%, rgba(124, 58, 237, 0.4) 40%, rgba(0, 0, 0, 0) 70%)',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Lottie animation */}
                  <div className="w-48 h-48 lg:w-64 lg:h-64">
                    {lottieData ? (
                      <Lottie 
                        animationData={lottieData}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-pulse w-36 h-36 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced tech-themed frame */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner elements with extended lines */}
                <div className="absolute top-0 left-0">
                  <motion.div className="w-20 h-2 bg-blue-500 origin-left opacity-70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.div className="w-2 h-20 bg-blue-500 origin-top opacity-70" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                
                <div className="absolute top-0 right-0">
                  <motion.div className="w-20 h-2 bg-blue-500 origin-right opacity-70 ml-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                  <motion.div className="w-2 h-20 bg-blue-500 origin-top opacity-70 ml-auto" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
                
                <div className="absolute bottom-0 left-0">
                  <motion.div className="w-2 h-20 bg-blue-500 origin-bottom opacity-70" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                  />
                  <motion.div className="w-20 h-2 bg-blue-500 origin-left opacity-70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  />
                </div>
                
                <div className="absolute bottom-0 right-0">
                  <motion.div className="w-2 h-20 bg-blue-500 origin-bottom opacity-70 ml-auto" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                  <motion.div className="w-20 h-2 bg-blue-500 origin-right opacity-70 ml-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                  />
                </div>
                
                {/* Tech scan line */}
                <motion.div
                  className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0"
                  animate={{ 
                    top: ['0%', '100%', '0%'],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
              </div>

              {/* Show profile image */}
              <Image
                src={imageUrl}
                alt="About Megha"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-cover opacity-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIyNy42MTQgMTUwIDI1MCAyNy4zODU4IDI1MCAyMDBDMjUwIDE3Mi42MTQgMjI3LjYxNCAxNTAgMjAwIDE1MEMxNzIuMzg2IDE1MCA1MCAxNzIuMzg2IDE1MCAyMDBDMTUwIDIyNy42MTQgMTcyLjM4NiAxNTAgMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K';
                }}
              />
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ImageUpload from './ImageUpload'

interface AdminPanelProps {}

export default function AdminPanel({}: AdminPanelProps) {
  const [portfolioData, setPortfolioData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    fetchPortfolioData()
  }, [])

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch('/api/portfolio')
      if (response.ok) {
        const data = await response.json()
        setPortfolioData(data)
      }
    } catch (error) {
      console.error('Error fetching portfolio data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    
    try {
      const response = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(portfolioData),
      })

      if (response.ok) {
        setMessage('Portfolio updated successfully!')
      } else {
        setMessage('Error updating portfolio')
      }
    } catch (error) {
      setMessage('Error updating portfolio')
    } finally {
      setSaving(false)
    }
  }

  const handleInputChange = (section: string, field: string, value: any) => {
    setPortfolioData((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleArrayChange = (section: string, index: number, field: string, value: any) => {
    setPortfolioData((prev: any) => ({
      ...prev,
      [section]: prev[section].map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const addNewItem = (section: string, template: any) => {
    setPortfolioData((prev: any) => ({
      ...prev,
      [section]: [...(prev[section] || []), template]
    }))
  }

  const removeItem = (section: string, index: number) => {
    setPortfolioData((prev: any) => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index)
    }))
  }

  const sections = [
    { id: 'hero', name: 'Hero Section', icon: '🏠', color: 'bg-blue-500' },
    { id: 'about', name: 'About Me', icon: '👤', color: 'bg-green-500' },
    { id: 'skills', name: 'Skills', icon: '⚡', color: 'bg-purple-500' },
    { id: 'projects', name: 'Projects', icon: '🚀', color: 'bg-orange-500' },
    { id: 'certificates', name: 'Certificates', icon: '🏆', color: 'bg-yellow-500' },
    { id: 'experience', name: 'Experience', icon: '💼', color: 'bg-indigo-500' },
    { id: 'hackathons', name: 'Hackathons', icon: '🎯', color: 'bg-pink-500' },
    { id: 'contact', name: 'Contact', icon: '📞', color: 'bg-red-500' }
  ]

  if (loading) {
    return (
      <motion.div 
        className="flex items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-2xl overflow-hidden">
        {/* Navigation Sidebar */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-64 bg-white border-r border-gray-200 p-6">
            <div className="space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? `${section.color} text-white shadow-lg transform scale-105`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className="font-medium">{section.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Success/Error Messages */}
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.includes('Error') 
                  ? 'bg-red-100 border-l-4 border-red-500 text-red-700' 
                  : 'bg-green-100 border-l-4 border-green-500 text-green-700'
              }`}>
                {message}
              </div>
            )}

            {/* Hero Section */}
            {activeSection === 'hero' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-blue-200">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                    <span className="mr-2">🏠</span>
                    Hero Section
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Name</label>
                      <input
                        type="text"
                        value={portfolioData?.hero?.name || ''}
                        onChange={(e) => handleInputChange('hero', 'name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-blue-800 mb-2">Professional Title</label>
                      <input
                        type="text"
                        value={portfolioData?.hero?.title || ''}
                        onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                        placeholder="e.g., Full Stack Developer"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">Description</label>
                    <textarea
                      value={portfolioData?.hero?.description || ''}
                      onChange={(e) => handleInputChange('hero', 'description', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                      rows={4}
                      placeholder="Brief description about yourself and your passion"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">Profile Image</label>
                    <ImageUpload
                      currentImage={portfolioData?.hero?.image}
                      onImageUpload={(imageUrl) => handleInputChange('hero', 'image', imageUrl)}
                      folder="portfolio/hero"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* About Section */}
            {activeSection === 'about' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-green-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                    <span className="mr-2">👤</span>
                    About Me
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-green-800 mb-2">About Description</label>
                      <textarea
                        value={portfolioData?.about?.description || ''}
                        onChange={(e) => handleInputChange('about', 'description', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-gray-900"
                        rows={6}
                        placeholder="Tell your story, background, and what drives you..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-green-800 mb-2">About Image</label>
                      <ImageUpload
                        currentImage={portfolioData?.about?.image}
                        onImageUpload={(imageUrl) => handleInputChange('about', 'image', imageUrl)}
                        folder="portfolio/about"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-purple-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-purple-800 flex items-center">
                      <span className="mr-2">⚡</span>
                      Skills & Technologies
                    </h2>
                    <button
                      onClick={() => addNewItem('skills', { name: '', level: 80 })}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
                    >
                      <span>+</span>
                      <span>Add Skill</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {(portfolioData?.skills || []).map((skill: any, index: number) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => handleArrayChange('skills', index, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                            placeholder="Skill name"
                          />
                        </div>
                        <div className="w-24">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => handleArrayChange('skills', index, 'level', parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                            placeholder="Level"
                          />
                        </div>
                        <button
                          onClick={() => removeItem('skills', index)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-orange-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-orange-800 flex items-center">
                      <span className="mr-2">🚀</span>
                      Projects
                    </h2>
                    <button
                      onClick={() => addNewItem('projects', { 
                        title: '', 
                        description: '', 
                        image: '', 
                        technologies: [], 
                        githubUrl: '', 
                        liveUrl: '' 
                      })}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                    >
                      <span>+</span>
                      <span>Add Project</span>
                    </button>
                  </div>
                  <div className="space-y-6">
                    {(portfolioData?.projects || []).map((project: any, index: number) => (
                      <div key={index} className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold text-orange-800">Project {index + 1}</h3>
                          <button
                            onClick={() => removeItem('projects', index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-orange-800 mb-2">Project Title</label>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => handleArrayChange('projects', index, 'title', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                              placeholder="Project name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-orange-800 mb-2">Project Image</label>
                            <ImageUpload
                              currentImage={project.image}
                              onImageUpload={(imageUrl) => handleArrayChange('projects', index, 'image', imageUrl)}
                              folder="portfolio/projects"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-orange-800 mb-2">Description</label>
                          <textarea
                            value={project.description}
                            onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                            rows={3}
                            placeholder="Project description"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-semibold text-orange-800 mb-2">GitHub URL</label>
                            <input
                              type="url"
                              value={project.githubUrl}
                              onChange={(e) => handleArrayChange('projects', index, 'githubUrl', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                              placeholder="GitHub repository URL"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-orange-800 mb-2">Live URL</label>
                            <input
                              type="url"
                              value={project.liveUrl}
                              onChange={(e) => handleArrayChange('projects', index, 'liveUrl', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                              placeholder="Live project URL"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-orange-800 mb-2">Technologies (comma-separated)</label>
                          <input
                            type="text"
                            value={Array.isArray(project.technologies) ? project.technologies.join(', ') : ''}
                            onChange={(e) => handleArrayChange('projects', index, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                            placeholder="React, Node.js, MongoDB, etc."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certificates Section */}
            {activeSection === 'certificates' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-yellow-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-yellow-800 flex items-center">
                      <span className="mr-2">🏆</span>
                      Certificates & Achievements
                    </h2>
                    <button
                      onClick={() => addNewItem('certificates', { 
                        name: '', 
                        issuer: '', 
                        date: '', 
                        credentialId: '', 
                        url: '' 
                      })}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors flex items-center space-x-2"
                    >
                      <span>+</span>
                      <span>Add Certificate</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {(portfolioData?.certificates || []).map((cert: any, index: number) => (
                      <div key={index} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold text-yellow-800">Certificate {index + 1}</h3>
                          <button
                            onClick={() => removeItem('certificates', index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-yellow-800 mb-2">Certificate Name</label>
                            <input
                              type="text"
                              value={cert.name}
                              onChange={(e) => handleArrayChange('certificates', index, 'name', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                              placeholder="Certificate name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-yellow-800 mb-2">Issuing Organization</label>
                            <input
                              type="text"
                              value={cert.issuer}
                              onChange={(e) => handleArrayChange('certificates', index, 'issuer', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                              placeholder="e.g., Google, Microsoft, AWS"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-yellow-800 mb-2">Date Issued</label>
                            <input
                              type="date"
                              value={cert.date}
                              onChange={(e) => handleArrayChange('certificates', index, 'date', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-yellow-800 mb-2">Credential ID</label>
                            <input
                              type="text"
                              value={cert.credentialId}
                              onChange={(e) => handleArrayChange('certificates', index, 'credentialId', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                              placeholder="Credential ID (optional)"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-yellow-800 mb-2">Certificate URL</label>
                          <input
                            type="url"
                            value={cert.url}
                            onChange={(e) => handleArrayChange('certificates', index, 'url', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                            placeholder="Link to certificate"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Hackathons Section */}
            {activeSection === 'hackathons' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-pink-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-pink-800 flex items-center">
                      <span className="mr-2">🎯</span>
                      Hackathon Experience
                    </h2>
                    <button
                      onClick={() => addNewItem('hackathons', {
                        event: '',
                        role: '',
                        project: '',
                        startDate: '',
                        endDate: '',
                        location: '',
                        award: '',
                        description: ''
                      })}
                      className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center space-x-2"
                    >
                      <span>+</span>
                      <span>Add Hackathon</span>
                    </button>
                  </div>
                  <div className="space-y-6">
                    {(portfolioData?.hackathons || []).map((hk: any, index: number) => (
                      <div key={index} className="p-6 bg-pink-50 rounded-lg border border-pink-200">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold text-pink-800">Hackathon {index + 1}</h3>
                          <button
                            onClick={() => removeItem('hackathons', index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Event</label>
                            <input
                              type="text"
                              value={hk.event}
                              onChange={(e) => handleArrayChange('hackathons', index, 'event', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="Hackathon / Event name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Role</label>
                            <input
                              type="text"
                              value={hk.role}
                              onChange={(e) => handleArrayChange('hackathons', index, 'role', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="Participant / Team Lead / Mentor"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Project</label>
                            <input
                              type="text"
                              value={hk.project}
                              onChange={(e) => handleArrayChange('hackathons', index, 'project', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="Project name (optional)"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Award</label>
                            <input
                              type="text"
                              value={hk.award}
                              onChange={(e) => handleArrayChange('hackathons', index, 'award', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="e.g., 1st Place, Finalist (optional)"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Start Date</label>
                            <input
                              type="date"
                              value={hk.startDate}
                              onChange={(e) => handleArrayChange('hackathons', index, 'startDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">End Date</label>
                            <input
                              type="date"
                              value={hk.endDate}
                              onChange={(e) => handleArrayChange('hackathons', index, 'endDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="Same as start if single-day"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-pink-800 mb-2">Location</label>
                            <input
                              type="text"
                              value={hk.location}
                              onChange={(e) => handleArrayChange('hackathons', index, 'location', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                              placeholder="City, Country or Remote"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-pink-800 mb-2">Description</label>
                          <textarea
                            value={hk.description}
                            onChange={(e) => handleArrayChange('hackathons', index, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-900"
                            rows={3}
                            placeholder="Project summary, stack, outcome, team size, etc."
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-indigo-200">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-indigo-800 flex items-center">
                      <span className="mr-2">💼</span>
                      Work Experience
                    </h2>
                    <button
                      onClick={() => addNewItem('experience', { 
                        company: '', 
                        position: '', 
                        startDate: '', 
                        endDate: '', 
                        description: '',
                        location: ''
                      })}
                      className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors flex items-center space-x-2"
                    >
                      <span>+</span>
                      <span>Add Experience</span>
                    </button>
                  </div>
                  <div className="space-y-6">
                    {(portfolioData?.experience || []).map((exp: any, index: number) => (
                      <div key={index} className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold text-indigo-800">Experience {index + 1}</h3>
                          <button
                            onClick={() => removeItem('experience', index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-indigo-800 mb-2">Company</label>
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                              placeholder="Company name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-indigo-800 mb-2">Position</label>
                            <input
                              type="text"
                              value={exp.position}
                              onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                              placeholder="Job title"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-indigo-800 mb-2">Start Date</label>
                            <input
                              type="date"
                              value={exp.startDate}
                              onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-indigo-800 mb-2">End Date</label>
                            <input
                              type="date"
                              value={exp.endDate}
                              onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-indigo-800 mb-2">Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) => handleArrayChange('experience', index, 'location', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            placeholder="City, State/Country"
                          />
                        </div>
                        <div className="mt-4">
                          <label className="block text-sm font-semibold text-indigo-800 mb-2">Description</label>
                          <textarea
                            value={exp.description}
                            onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            rows={4}
                            placeholder="Describe your responsibilities and achievements"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-md border border-red-200">
                  <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                    <span className="mr-2">📞</span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">Email</label>
                      <input
                        type="email"
                        value={portfolioData?.contact?.email || ''}
                        onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={portfolioData?.contact?.phone || ''}
                        onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={portfolioData?.contact?.linkedin || ''}
                        onChange={(e) => handleInputChange('contact', 'linkedin', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-red-800 mb-2">GitHub</label>
                      <input
                        type="url"
                        value={portfolioData?.contact?.github || ''}
                        onChange={(e) => handleInputChange('contact', 'github', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {saving ? (
                  <span className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Saving...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>💾</span>
                    <span>Save Changes</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './backgrounds/AnimatedBackground'
import ParticleField from './backgrounds/ParticleField'

interface ContactData {
  email?: string
  phone?: string
  linkedin?: string
  github?: string
}

interface ContactProps {
  data?: ContactData
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactData = data || {
    email: 'contact@megha.dev',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/megha',
    github: 'https://github.com/megha'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedBackground variant="contact">
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <ParticleField density={15} color="red" size="large" />
        <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition-colors duration-300">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Let&apos;s talk</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  bgColor: "bg-blue-100 dark:bg-blue-900/30",
                  title: "Email",
                  value: contactData.email,
                  href: `mailto:${contactData.email}`,
                  textColor: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  bgColor: "bg-green-100 dark:bg-green-900/30",
                  title: "Phone",
                  value: contactData.phone,
                  href: `tel:${contactData.phone}`,
                  textColor: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  ),
                  bgColor: "bg-purple-100 dark:bg-purple-900/30",
                  title: "LinkedIn",
                  value: "Connect with me",
                  href: contactData.linkedin,
                  textColor: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                    </svg>
                  ),
                  bgColor: "bg-gray-100 dark:bg-gray-700",
                  title: "GitHub",
                  value: contactData.github ? contactData.github.replace('https://github.com/', '') : "View my repositories",
                  href: contactData.github,
                  textColor: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  viewport={{ once: false }}
                >
                  <motion.div 
                    className={`${item.bgColor} p-3 rounded-full transition-colors duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">{item.title}</h4>
                    <a 
                      href={item.href} 
                      target={item.href?.startsWith('http') ? "_blank" : undefined}
                      rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                      className={`${item.textColor} transition-colors`}
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="text-green-600 dark:text-green-400 text-center transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="text-red-600 dark:text-red-400 text-center transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
        </div>
      </section>
    </AnimatedBackground>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParticleField from './backgrounds/ParticleField'

export default function Footer() {
  return (
    <footer className="relative bg-black text-red-100 py-12 transition-colors duration-300 overflow-hidden border-t border-red-600/30">
      <ParticleField density={10} color="red" size="small" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <Link href="#about" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Contact
            </Link>
            <Link href="#skills" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Projects
            </Link>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <a href="https://github.com/raai2005" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/megha1999r" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <p className="text-red-300/70">
              Copyright © {new Date().getFullYear()} - All right reserved by Megha Roy
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Megha</h1>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ml-10 flex items-baseline space-x-4"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </motion.button>
            
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Megha</h1>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ml-10 flex items-baseline space-x-4"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Theme Toggle Button */}
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </motion.button>
            
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroData {
  name?: string
  title?: string
  description?: string
  image?: string
}

interface HeroProps {
  data?: HeroData
}

export default function Hero({ data }: HeroProps) {
  const heroData = data || {
    name: 'Megha',
    title: 'Full Stack Developer',
    description: 'Passionate about creating beautiful and functional web applications',
    image: '/placeholder-avatar.jpg'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={heroData.image || '/placeholder.jpg'}
                alt={heroData.name || 'Profile Picture'}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwQzExNi41NjkgMTAwIDEzMCA4Ni41Njg1IDEzMCA3MEMxMzAgNTMuNDMxNSAxMTYuNTY5IDQwIDEwMCA0MEM4My40MzE1IDQwIDcwIDUzLjQzMTUgNzAgNzBDNzAgODYuNTY4NSA4My40MzE1IDEwMCAxMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTAwIDExMEMxMjQuODUzIDExMCAxNDUgMTMwLjE0NyAxNDUgMTU1VjE2MEg1NVYxNTVDNTUgMTMwLjE0NyA3NS4xNDcxIDExMCAxMDAgMTEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            variants={itemVariants}
          >
            Hi, I&apos;m{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {heroData.name}
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300"
            variants={itemVariants}
          >
            {heroData.title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
            variants={itemVariants}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedBackground from './backgrounds/AnimatedBackground'
import ParticleField from './backgrounds/ParticleField'

interface HeroData {
  name?: string
  title?: string
  description?: string
  image?: string
}

interface HeroProps {
  data?: HeroData
}

export default function Hero({ data }: HeroProps) {
  // Debug: Log the received data
  console.log('Hero component received data:', data)
  
  const heroData = {
    name: data?.name || 'Megha',
    title: data?.title || 'Full Stack Developer',
    description: data?.description || 'Passionate about creating beautiful and functional web applications',
    image: data?.image || '/placeholder-avatar.jpg'
  }
  
  // Debug: Log the final hero data
  console.log('Hero component final heroData:', heroData)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <AnimatedBackground variant="hero">
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <ParticleField density={40} color="red" size="medium" />
        <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={heroData.image || '/placeholder.jpg'}
                alt={heroData.name || 'Profile Picture'}
                width={192}
                height={192}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwQzExNi41NjkgMTAwIDEzMCA4Ni41Njg1IDEzMCA3MEMxMzAgNTMuNDMxNSAxMTYuNTY5IDQwIDEwMCA0MEM4My40MzE1IDQwIDcwIDUzLjQzMTUgNzAgNzBDNzAgODYuNTY4NSA4My40MzE1IDEwMCAxMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTAwIDExMEMxMjQuODUzIDExMCAxNDUgMTMwLjE0NyAxNDUgMTU1VjE2MEg1NVYxNTVDNTUgMTMwLjE0NyA3NS4xNDcxIDExMCAxMDAgMTEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I&apos;m{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {heroData.name}
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {heroData.title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </AnimatedBackground>
  )
}
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageUploadProps {
  currentImage?: string
  onImageUpload: (imageUrl: string) => void
  folder?: string
  className?: string
}

export default function ImageUpload({ 
  currentImage, 
  onImageUpload, 
  folder = 'portfolio',
  className = ''
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size must be less than 5MB')
      return
    }

    setUploading(true)
    setUploadError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Upload failed')
      }

      const result = await response.json()
      console.log('Upload response:', result)
      
      // Use the URL from the API response
      const imageUrl = result.url || result.secure_url
      if (imageUrl) {
        onImageUpload(imageUrl)
      } else {
        throw new Error('No image URL received from server')
      }
    } catch (error) {
      console.error('Upload error:', error)
      setUploadError(error instanceof Error ? error.message : 'Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Preview */}
      {currentImage && (
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={currentImage}
            alt="Current image"
            width={300}
            height={300}
            className="w-32 h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
          />
          {/* Success Tick Mark */}
          <motion.div 
            className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
        </motion.div>
      )}

      {/* Upload Button or Re-upload/Remove buttons */}
      <div className="flex items-center space-x-3">
        {currentImage ? (
          // Show Re-upload and Remove buttons when image exists
          <>
            <motion.label 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
              <div className={`
                inline-flex items-center px-4 py-2 border border-blue-300 dark:border-blue-600 rounded-lg shadow-sm text-sm font-medium transition-colors
                ${uploading 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                }
              `}>
                {uploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Re-upload
                  </>
                )}
              </div>
            </motion.label>

            <motion.button
              type="button"
              onClick={() => onImageUpload('')}
              className="inline-flex items-center px-4 py-2 border border-red-300 dark:border-red-600 rounded-lg shadow-sm text-sm font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              disabled={uploading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </motion.button>
          </>
        ) : (
          // Show initial upload button when no image
          <motion.label 
            className="relative cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
            <div className={`
              inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium transition-colors
              ${uploading 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
              }
            `}>
              {uploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  <svg className="-ml-1 mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Upload Image
                </>
              )}
            </div>
          </motion.label>
        )}
      </div>

      {/* Error Message */}
      {uploadError && (
        <motion.div 
          className="text-red-600 dark:text-red-400 text-sm mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {uploadError}
        </motion.div>
      )}

      {/* File Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageUploadProps {
  currentImage?: string
  onImageUpload: (imageUrl: string) => void
  folder?: string
  className?: string
}

export default function ImageUpload({ 
  currentImage, 
  onImageUpload, 
  folder = 'portfolio',
  className = ''
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size must be less than 5MB')
      return
    }

    setUploading(true)
    setUploadError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const result = await response.json()
      onImageUpload(result.secure_url)
    } catch (error) {
      console.error('Upload error:', error)
      setUploadError('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Preview */}
      {currentImage && (
        <div className="relative">
          <Image
            src={currentImage}
            alt="Current image"
            width={300}
            height={300}
            className="w-32 h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
          />
          {/* Success Tick Mark */}
          <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}

      {/* Upload Button or Re-upload/Remove buttons */}
      <div className="flex items-center space-x-3">
        {currentImage ? (
          // Show Re-upload and Remove buttons when image exists
          <>
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
              />
              <div className={`
                inline-flex items-center px-4 py-2 border border-blue-300 dark:border-blue-600 rounded-lg shadow-sm text-sm font-medium transition-colors
                ${uploading 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                }
              `}>
                {uploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Re-upload
                  </>
                )}
              </div>
            </label>

            <button
              type="button"
              onClick={() => onImageUpload('')}
              className="inline-flex items-center px-4 py-2 border border-red-300 dark:border-red-600 rounded-lg shadow-sm text-sm font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              disabled={uploading}
            >
              <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </>
        ) : (
          // Show initial upload button when no image
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
            <div className={`
              inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium transition-colors
              ${uploading 
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
              }
            `}>
              {uploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                <>
                  <svg className="-ml-1 mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Upload Image
                </>
              )}
            </div>
          </label>
        )}
      </div>

      {/* Error Message */}
      {uploadError && (
        <div className="text-red-600 dark:text-red-400 text-sm mt-2">
          {uploadError}
        </div>
      )}

      {/* File Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'

interface LoginProps {
  onLogin: (success: boolean) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (response.ok) {
        // Store login state in localStorage
        localStorage.setItem('adminAuthenticated', 'true')
        localStorage.setItem('adminAuthTime', Date.now().toString())
        onLogin(true)
      } else {
        const data = await response.json()
        setError(data.error || 'Invalid credentials')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300">
            Admin Panel Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Please enter your credentials to access the admin panel
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={credentials.username}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="block w-full pr-10 pl-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                >
                  {showPassword ? (
                    // Eye-off icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.77 18.77 0 0 1 5.06-6.94" />
                      <path d="M1 1l22 22" />
                      <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 10 8 10 8a18.77 18.77 0 0 1-4.22 5.64" />
                      <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-8 11-8 11 8 11 8-3 8-11 8-11-8-11-8Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-600 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-md transition-colors duration-300">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from './backgrounds/AnimatedBackground'
import WaveBackground from './backgrounds/WaveBackground'

interface Project {
  _id?: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectsProps {
  data?: Project[]
}

export default function Projects({ data }: ProjectsProps) {
  const projectsData = data || [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe for payments.',
      image: '/placeholder-project1.jpg',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/megha/ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io.',
      image: '/placeholder-project2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/megha/taskmanager',
      liveUrl: 'https://taskmanager-demo.netlify.app'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts using OpenWeather API.',
      image: '/placeholder-project3.jpg',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/megha/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app'
    }
  ]

  return (
    <AnimatedBackground variant="projects">
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">

        <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition-colors duration-300">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
              viewport={{ once: false }}
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 transition-colors duration-300">{project.description}</p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: false }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: false }}
                >
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {projectsData.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">No projects available. Check back soon!</p>
          </motion.div>
        )}
        </div>
      </section>
    </AnimatedBackground>
  )
}
'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from './backgrounds/AnimatedBackground'
import ParticleField from './backgrounds/ParticleField'

interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  data?: Skill[]
}

export default function Skills({ data }: SkillsProps) {
  const skillsData = data || [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Python', level: 75 }
  ]

  return (
    <AnimatedBackground variant="skills">
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <ParticleField density={25} color="red" size="small" />
        <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition-colors duration-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: false }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8 transition-colors duration-300">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code',
              'Postman', 'Jest', 'Cypress', 'GraphQL', 'REST APIs', 'Socket.io'
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                viewport={{ once: false }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
        </div>
      </section>
    </AnimatedBackground>
  )
}
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    // Update document class and save preference
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
