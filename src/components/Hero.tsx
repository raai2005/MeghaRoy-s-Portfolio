'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import EnhancedBackground from './backgrounds/EnhancedBackground';

interface HeroData {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
}

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const [imageHovered, setImageHovered] = useState(false);
  
  const heroData = data || {
    name: 'Megha',
    title: 'Full Stack Developer',
    description: 'Passionate about creating beautiful and functional web applications',
    image: '/placeholder-avatar.jpg'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <EnhancedBackground variant="hero">
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-8 relative"
              variants={itemVariants}
            >
              <motion.div 
                className="w-56 h-56 mx-auto relative"
                onHoverStart={() => setImageHovered(true)}
                onHoverEnd={() => setImageHovered(false)}
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #8b5cf6)',
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: imageHovered ? 0.8 : 0.4,
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                    opacity: { duration: 0.3 }
                  }}
                />
                
                {/* Inner glow */}
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-pink-500/30 blur-lg"
                  animate={{
                    scale: imageHovered ? 1.2 : 1,
                    opacity: imageHovered ? 0.8 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    y: -10
                  }}
                  transition={{ 
                    duration: 0.6,
                    rotate: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <Image
                    src={heroData.image || '/placeholder.jpg'}
                    alt={heroData.name || 'Profile Picture'}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwQzExNi41NjkgMTAwIDEzMCA4Ni41Njg1IDEzMCA3MEMxMzAgNTMuNDMxNSAxMTYuNTY5IDQwIDEwMCA0MEM4My40MzE1IDQwIDcwIDUzLjQzMTUgNzAgNzBDNzAgODYuNTY4NSA4My40MzE1IDEwMCAxMDAgMTAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTAwIDExMEMxMjQuODUzIDExMCAxNDUgMTMwLjE0NyAxNDUgMTU1VjE2MEg1NVYxNTVDNTUgMTMwLjE0NyA3NS4xNDcxIDExMCAxMDAgMTEwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Hi, I&apos;m{' '}
              </motion.span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 inline-block"
                initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                }}
              >
                {heroData.name}
              </motion.span>
            </motion.h1>
          
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-8 font-light"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  color: "#a855f7",
                  textShadow: "0 0 10px rgba(168, 85, 247, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                {heroData.title}
              </motion.span>
            </motion.h2>
          
            <motion.p 
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {heroData.description}
            </motion.p>
          
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-semibold text-lg overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(6, 182, 212, 0.1)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </EnhancedBackground>
  );
}