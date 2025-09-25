'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassMorphCard from '../ui/GlassMorphCard';

interface AboutData {
  title?: string;
  description?: string;
  image?: string;
}

interface AboutBentoProps {
  data?: AboutData;
}

export default function AboutBento({ data }: AboutBentoProps) {
  const aboutData = data || {
    description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
    title: 'About',
    image: '/placeholder-about.jpg',
  };

  return (
    <div className="h-full min-h-[320px] p-6 lg:p-8">
      <motion.div
        className="h-full flex flex-col justify-center space-y-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(16, 185, 129, 0.8)"
          }}
        >
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            {aboutData.title || 'About Me'}
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed flex-grow text-center max-w-3xl mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          {aboutData.description}
        </motion.p>
        
        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <GlassMorphCard 
            glowColor="rgba(16, 185, 129, 0.5)"
            intensity="light"
            hoverScale={1.05}
            delay={0.1}
          >
            <div className="p-4 text-center">
              <motion.div
                className="text-2xl lg:text-3xl font-bold text-green-400 mb-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                3+
              </motion.div>
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1">Years</h3>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">Experience</p>
            </div>
          </GlassMorphCard>
          
          <GlassMorphCard 
            glowColor="rgba(5, 150, 105, 0.5)"
            intensity="light"
            hoverScale={1.05}
            delay={0.2}
          >
            <div className="p-4 text-center">
              <motion.div
                className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-1"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                50+
              </motion.div>
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1">Projects</h3>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">Completed</p>
            </div>
          </GlassMorphCard>

          <GlassMorphCard 
            glowColor="rgba(59, 130, 246, 0.5)"
            intensity="light"
            hoverScale={1.05}
            delay={0.3}
          >
            <div className="p-4 text-center">
              <motion.div
                className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                100+
              </motion.div>
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1">Clients</h3>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">Happy</p>
            </div>
          </GlassMorphCard>

          <GlassMorphCard 
            glowColor="rgba(168, 85, 247, 0.5)"
            intensity="light"
            hoverScale={1.05}
            delay={0.4}
          >
            <div className="p-4 text-center">
              <motion.div
                className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1"
                whileHover={{ scale: 1.1, rotate: -3 }}
              >
                24/7
              </motion.div>
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white mb-1">Support</h3>
              <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">Available</p>
            </div>
          </GlassMorphCard>
        </motion.div>

        {/* Skills Highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-3 py-1 text-xs lg:text-sm bg-gradient-to-r from-green-400/20 to-emerald-400/20 dark:from-green-400/20 dark:to-emerald-400/20 border border-green-500/50 dark:border-green-400/30 rounded-full text-green-700 dark:text-green-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}