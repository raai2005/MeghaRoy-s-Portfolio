'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface GlobalBackgroundProps {
  children: React.ReactNode
}

export default function GlobalBackground({ children }: GlobalBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-5"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: `radial-gradient(circle, ${
                i === 0 ? 'rgb(239, 68, 68)' : 
                i === 1 ? 'rgb(0, 0, 0)' : 
                'rgb(185, 28, 28)'
              }, transparent)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(185, 28, 28) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(185, 28, 28) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-950/50 to-transparent dark:from-red-950/30 dark:to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black/50 to-transparent dark:from-black/30 dark:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}