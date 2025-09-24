'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EnhancedBackgroundProps {
  variant?: 'hero' | 'about' | 'skills' | 'projects' | 'contact'
  children: React.ReactNode
}

export default function EnhancedBackground({ variant = 'hero', children }: EnhancedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

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
          gradient: 'from-slate-900 via-purple-900 to-slate-900',
          accent: 'from-cyan-400 via-purple-500 to-pink-500',
          particles: 40,
          glowColor: 'rgba(139, 92, 246, 0.3)'
        }
      case 'about':
        return {
          gradient: 'from-gray-900 via-blue-900 to-gray-900',
          accent: 'from-blue-400 via-cyan-500 to-teal-500',
          particles: 35,
          glowColor: 'rgba(59, 130, 246, 0.3)'
        }
      case 'skills':
        return {
          gradient: 'from-indigo-900 via-purple-900 to-pink-900',
          accent: 'from-pink-400 via-purple-500 to-indigo-500',
          particles: 45,
          glowColor: 'rgba(168, 85, 247, 0.3)'
        }
      case 'projects':
        return {
          gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
          accent: 'from-emerald-400 via-teal-500 to-cyan-500',
          particles: 38,
          glowColor: 'rgba(20, 184, 166, 0.3)'
        }
      case 'contact':
        return {
          gradient: 'from-rose-900 via-pink-900 to-purple-900',
          accent: 'from-rose-400 via-pink-500 to-purple-500',
          particles: 30,
          glowColor: 'rgba(236, 72, 153, 0.3)'
        }
      default:
        return {
          gradient: 'from-gray-900 via-slate-900 to-gray-900',
          accent: 'from-gray-400 via-slate-500 to-gray-500',
          particles: 25,
          glowColor: 'rgba(100, 116, 139, 0.3)'
        }
    }
  }

  const config = getBackgroundConfig()

  return (
    <div 
      className={`relative min-h-screen bg-gradient-to-br ${config.gradient} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${config.accent} opacity-10`}
          animate={{
            background: [
              `linear-gradient(45deg, ${config.glowColor}, transparent, ${config.glowColor})`,
              `linear-gradient(135deg, transparent, ${config.glowColor}, transparent)`,
              `linear-gradient(225deg, ${config.glowColor}, transparent, ${config.glowColor})`,
              `linear-gradient(315deg, transparent, ${config.glowColor}, transparent)`,
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Interactive mouse glow */}
      <motion.div
        className="absolute pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, ${config.glowColor}, transparent)`,
          width: '100%',
          height: '100%',
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Floating orbs */}
      {[...Array(config.particles)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-sm"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, ${config.glowColor}, transparent)`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, ${config.glowColor} 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, ${config.glowColor} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border opacity-10"
          style={{
            width: Math.random() * 300 + 100 + 'px',
            height: Math.random() * 300 + 100 + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderColor: config.glowColor,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20px' : '0px',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}