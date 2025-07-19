'use client'

import { motion } from 'framer-motion'

interface HeroData {
  name?: string
  title?: string
  description?: string
  image?: string
}

interface HeroProps {
  data?: HeroData
}

export default function Hero({ data }: HeroProps) {
  // Debug: Log the received data
  console.log('Hero component received data:', data)
  
  const heroData = {
    name: data?.name || 'Megha',
    title: data?.title || 'Full Stack Developer',
    description: data?.description || 'Passionate about creating beautiful and functional web applications',
    image: data?.image || '/placeholder-avatar.jpg'
  }
  
  // Debug: Log the final hero data
  console.log('Hero component final heroData:', heroData)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800 shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroData.image}
                alt={heroData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwQzExNi41NjkgMTAwIDEzMCA4Ni41Njg1IDEzMCA3MEMxMzAgNTMuNDMxNSAxMTYuNTY5IDQwIDEwMCA0MEM4My40MzE1IDQwIDcwIDUzLjQzMTUgNzAgNzBDNzAgODYuNTY4NSA4My40MzE1IDEwMCAxMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTAwIDExMEMxMjQuODUzIDExMCAxNDUgMTMwLjE0NyAxNDUgMTU1VjE2MEg1NVYxNTVDNTUgMTMwLjE0NyA3NS4xNDcxIDExMCAxMDAgMTEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {heroData.name}
            </motion.span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {heroData.title}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto transition-colors duration-300"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
