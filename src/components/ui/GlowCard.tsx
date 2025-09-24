'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  hoverScale?: number
  delay?: number
}

export default function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'rgba(139, 92, 246, 0.5)',
  hoverScale = 1.05,
  delay = 0
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        y: -10,
        rotateX: 5,
        rotateY: 5,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      viewport={{ once: false }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-lg"
        style={{
          background: `linear-gradient(45deg, ${glowColor}, transparent, ${glowColor})`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card content */}
      <div className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-xl overflow-hidden">
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${glowColor} 50%, transparent 70%)`,
          }}
          animate={{
            x: isHovered ? ['0%', '100%'] : '0%',
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        
        {children}
      </div>
    </motion.div>
  )
}