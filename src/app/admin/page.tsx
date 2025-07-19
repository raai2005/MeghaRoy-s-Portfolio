'use client'

import { useState, useEffect } from 'react'
import AdminPanel from '@/components/AdminPanel'
import Login from '@/components/Login'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem('adminAuthenticated')
    const authTime = localStorage.getItem('adminAuthTime')
    
    if (authenticated === 'true' && authTime) {
      // Check if authentication is still valid (24 hours)
      const authDate = new Date(parseInt(authTime))
      const now = new Date()
      const hoursDiff = (now.getTime() - authDate.getTime()) / (1000 * 60 * 60)
      
      if (hoursDiff < 24) {
        setIsAuthenticated(true)
      } else {
        // Clear expired authentication
        localStorage.removeItem('adminAuthenticated')
        localStorage.removeItem('adminAuthTime')
      }
    }
    
    setIsLoading(false)
  }, [])

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    localStorage.removeItem('adminAuthTime')
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
        <AdminPanel />
      </div>
    </div>
  )
}
