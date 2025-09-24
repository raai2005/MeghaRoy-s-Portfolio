'use client'

import { motion } from 'framer-motion'

interface WaveBackgroundProps {
  variant?: 'top' | 'bottom' | 'both'
  color?: string
  opacity?: number
}

export default function WaveBackground({ variant = 'bottom', color = 'blue', opacity = 0.1 }: WaveBackgroundProps) {
  const WaveShape = ({ className, delay = 0 }: { className: string, delay?: number }) => (
    <motion.svg
      className={className}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay }}
    >
      <motion.path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        fill={`rgb(59 130 246 / ${opacity})`}
        animate={{
          d: [
            "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
            "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
            "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {(variant === 'top' || variant === 'both') && (
        <WaveShape className="absolute top-0 left-0 w-full h-24 transform rotate-180" />
      )}
      
      {(variant === 'bottom' || variant === 'both') && (
        <WaveShape className="absolute bottom-0 left-0 w-full h-24" delay={1} />
      )}
    </div>
  )
}