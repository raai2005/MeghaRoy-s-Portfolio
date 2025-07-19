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
