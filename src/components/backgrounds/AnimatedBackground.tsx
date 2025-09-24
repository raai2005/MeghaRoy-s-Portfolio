'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'about' | 'skills' | 'projects' | 'contact'
  children: React.ReactNode
}

export default function AnimatedBackground({ variant = 'hero', children }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const getBackgroundConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          gradient: 'from-red-950 via-black to-red-900 dark:from-black dark:via-red-950 dark:to-red-900',
          particles: 30,
          colors: ['bg-red-600', 'bg-black']
        }
      case 'about':
        return {
          gradient: 'from-black via-red-950 to-black dark:from-black dark:via-red-950 dark:to-black',
          particles: 25,
          colors: ['bg-red-700', 'bg-black']
        }
      case 'skills':
        return {
          gradient: 'from-red-900 via-black to-red-950 dark:from-red-950 dark:via-black dark:to-red-900',
          particles: 35,
          colors: ['bg-red-600', 'bg-black']
        }
      case 'projects':
        return {
          gradient: 'from-black via-red-950 to-red-900 dark:from-black dark:via-red-950 dark:to-red-900',
          particles: 28,
          colors: ['bg-black', 'bg-red-700']
        }
      case 'contact':
        return {
          gradient: 'from-red-950 via-black to-red-900 dark:from-red-950 dark:via-black dark:to-red-900',
          particles: 20,
          colors: ['bg-red-600', 'bg-black']
        }
      default:
        return {
          gradient: 'from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800',
          particles: 20,
          colors: ['bg-gray-400']
        }
    }
  }

  const config = getBackgroundConfig()

  return (
    <div className={`relative min-h-screen bg-gradient-to-br ${config.gradient} transition-colors duration-500 overflow-hidden`}>
      {/* Floating Particles */}
      {[...Array(config.particles)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full ${config.colors[i % config.colors.length]} opacity-20`}
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Interactive Mouse Glow */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1), transparent)`,
          width: '100%',
          height: '100%',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-red-200/20 dark:border-red-500/10"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '0%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}