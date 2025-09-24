'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface HeroData {
  name?: string;
  title?: string;
  description?: string;
  image?: string;
}

interface HeroBentoProps {
  data?: HeroData;
}

export default function HeroBento({ data }: HeroBentoProps) {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  return (
    <div className="h-full min-h-[400px] lg:min-h-[450px] relative overflow-hidden p-6 lg:p-8">
      {/* Content */}
      <motion.div
        className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 30px rgba(99, 102, 241, 0.8)"
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.6)"
              }}
            >
              {heroData.title}
            </motion.h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              whileHover={{ scale: 1.01 }}
            >
              {heroData.description}
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="px-8 py-3 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          className="flex-shrink-0"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-48 h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            onHoverStart={() => setImageHovered(true)}
            onHoverEnd={() => setImageHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 p-1 opacity-70"
              animate={{ 
                rotate: imageHovered ? 360 : 0,
                scale: imageHovered ? 1.1 : 1
              }}
              transition={{ duration: 2, ease: "linear", repeat: imageHovered ? Infinity : 0 }}
            >
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm" />
            </motion.div>
            
            {/* Profile image */}
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src={heroData.image || '/placeholder-avatar.jpg'}
                alt={heroData.name || 'Profile'}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}