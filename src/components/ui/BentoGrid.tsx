'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoGridItemProps {
  children: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'hero'
  glowColor?: string
  delay?: number
}

const BentoGrid = ({ children, className = '' }: BentoGridProps) => {
  return (
    <div className={`
      flex flex-col
      gap-4 sm:gap-5 md:gap-6 lg:gap-8
      max-w-6xl mx-auto px-3 sm:px-4 lg:px-6
      ${className}
    `}>
      {children}
    </div>
  )
}

const BentoGridItem = ({ 
  children, 
  className = '', 
  size = 'medium',
  glowColor = 'rgba(59, 130, 246, 0.3)',
  delay = 0 
}: BentoGridItemProps) => {
  
  const sizeClasses = {
    small: 'w-full',
    medium: 'w-full',
    large: 'w-full',
    wide: 'w-full',
    tall: 'w-full',
    hero: 'w-full'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative overflow-hidden rounded-xl lg:rounded-2xl
        ${sizeClasses[size]}
        ${className}
      `}
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.02) 100%
          )
        `,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          0 0 0 1px rgba(255, 255, 255, 0.05)
        `
      }}
    >
      {/* Glass reflection effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%,
              rgba(255, 255, 255, 0.1) 20%,
              transparent 40%,
              transparent 60%,
              rgba(255, 255, 255, 0.05) 80%,
              transparent 100%
            )
          `
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Border highlight */}
      <div 
        className="absolute inset-0 rounded-2xl lg:rounded-3xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.2) 0%,
            transparent 25%,
            transparent 75%,
            rgba(255, 255, 255, 0.1) 100%
          )`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  )
}

export { BentoGrid, BentoGridItem }