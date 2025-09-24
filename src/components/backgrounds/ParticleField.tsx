'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ParticleFieldProps {
  density?: number
  color?: string
  size?: 'small' | 'medium' | 'large'
}

export default function ParticleField({ density = 50, color = 'blue', size = 'medium' }: ParticleFieldProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const getSizeRange = () => {
    switch (size) {
      case 'small': return { min: 1, max: 3 }
      case 'medium': return { min: 2, max: 5 }
      case 'large': return { min: 4, max: 8 }
      default: return { min: 2, max: 5 }
    }
  }

  const sizeRange = getSizeRange()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(density)].map((_, i) => {
        const particleSize = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min
        const startX = Math.random() * dimensions.width
        const startY = Math.random() * dimensions.height
        
        return (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full bg-${color}-400 opacity-30`}
            style={{
              width: `${particleSize}px`,
              height: `${particleSize}px`,
              left: `${startX}px`,
              top: `${startY}px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        )
      })}
    </div>
  )
}