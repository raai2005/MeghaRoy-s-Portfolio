'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassMorphCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  intensity?: 'light' | 'medium' | 'strong'
  hoverScale?: number
  delay?: number
  blur?: number
}

export default function GlassMorphCard({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.3)',
  intensity = 'medium',
  hoverScale = 1.02,
  delay = 0,
  blur = 20
}: GlassMorphCardProps) {

  const intensityStyles = {
    light: {
      background: `linear-gradient(135deg, 
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.08) 50%,
        rgba(255, 255, 255, 0.03) 100%
      )`,
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: `blur(${blur * 0.7}px)`,
      boxShadow: `
        0 4px 16px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.15)
      `
    },
    medium: {
      background: `linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0.02) 100%
      )`,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: `blur(${blur}px)`,
      boxShadow: `
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.05)
      `
    },
    strong: {
      background: `linear-gradient(135deg, 
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 100%
      )`,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: `blur(${blur * 1.3}px)`,
      boxShadow: `
        0 12px 40px rgba(0, 0, 0, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.1)
      `
    }
  }

  const currentStyle = intensityStyles[intensity]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: hoverScale, y: -2 }}
      transition={{
        duration: 0.6,
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative overflow-hidden rounded-2xl
        ${className}
      `}
      style={{
        ...currentStyle,
        WebkitBackdropFilter: currentStyle.backdropFilter
      }}
    >
      {/* Shimmer effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 30%,
              rgba(255, 255, 255, 0.15) 50%,
              transparent 70%
            )
          `,
          transform: 'translateX(-100%)',
          animation: 'shimmer 2s infinite'
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
        whileHover={{ scale: 1.2, opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />

      {/* Glass reflection */}
      <div 
        className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%,
              transparent 30%,
              transparent 70%,
              rgba(255, 255, 255, 0.05) 100%
            )
          `
        }}
      />

      {/* Border highlight */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.3) 0%,
            transparent 25%,
            transparent 75%,
            rgba(255, 255, 255, 0.15) 100%
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

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.div>
  )
}