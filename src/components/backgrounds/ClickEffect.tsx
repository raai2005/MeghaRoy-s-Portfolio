'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ClickEffectProps {
  children: React.ReactNode
}

interface Ripple {
  id: number
  x: number
  y: number
}

export default function ClickEffect({ children }: ClickEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      }
      
      setRipples(prev => [...prev, newRipple])
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 400)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="relative">
      {children}
      
      {/* Click Ripples */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="w-12 h-12 border-2 border-red-500 rounded-full" />
        </motion.div>
      ))}
    </div>
  )
}