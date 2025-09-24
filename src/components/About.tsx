'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import EnhancedBackground from './backgrounds/EnhancedBackground';
import GlowCard from './ui/GlowCard';

interface AboutData {
  title?: string;
  description?: string;
  image?: string;
}

interface AboutProps {
  data?: AboutData;
}

export default function About({ data }: AboutProps) {
  const aboutData = data || {
    description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
    title: 'About',
    image: '/placeholder-about.jpg',
  };

  return (
    <EnhancedBackground variant="about">
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50, rotateZ: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ duration: 1, type: "spring", damping: 20 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(16, 185, 129, 0.8)"
              }}
            >
              {aboutData.title || 'About'}
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -100, skewX: -10 }}
              whileInView={{ opacity: 1, x: 0, skewX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 80 }}
              viewport={{ once: false }}
            >
              <div className="space-y-8">
                <motion.p 
                  className="text-xl text-gray-200 leading-relaxed"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {aboutData.description}
                </motion.p>
                
                <motion.div 
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <GlowCard 
                    glowColor="rgba(16, 185, 129, 0.5)"
                    hoverScale={1.08}
                    delay={0.1}
                  >
                    <div className="p-6 text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-400 mb-2"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        3+
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-1">Years</h3>
                      <p className="text-gray-300 text-sm">Experience</p>
                    </div>
                  </GlowCard>
                  
                  <GlowCard 
                    glowColor="rgba(5, 150, 105, 0.5)"
                    hoverScale={1.08}
                    delay={0.2}
                  >
                    <div className="p-6 text-center">
                      <motion.div
                        className="text-3xl font-bold text-emerald-400 mb-2"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                      >
                        50+
                      </motion.div>
                      <h3 className="text-lg font-semibold text-white mb-1">Projects</h3>
                      <p className="text-gray-300 text-sm">Completed</p>
                    </div>
                  </GlowCard>
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  {[
                    { text: "Frontend Development", gradient: "from-green-400 to-emerald-400" },
                    { text: "Backend Development", gradient: "from-emerald-400 to-teal-400" },
                    { text: "Full Stack", gradient: "from-teal-400 to-cyan-400" },
                    { text: "Database Design", gradient: "from-cyan-400 to-blue-400" }
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.text}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      viewport={{ once: false }}
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300`} />
                      <span className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {skill.text}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 100, rotateY: 45, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 60 }}
              viewport={{ once: false }}
            >
              <GlowCard 
                className="h-96"
                glowColor="rgba(16, 185, 129, 0.4)"
                hoverScale={1.02}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Animated grid background */}
                  <div className="absolute inset-0" 
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)",
                      backgroundSize: "30px 30px"
                    }}>
                  </div>
                  
                  {/* Floating particles */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute rounded-full"
                      style={{
                        width: Math.random() * 4 + 2 + "px",
                        height: Math.random() * 4 + 2 + "px",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `linear-gradient(45deg, rgba(16, 185, 129, ${Math.random() * 0.5 + 0.3}), rgba(5, 150, 105, ${Math.random() * 0.5 + 0.3}))`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* Central animation area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="relative w-48 h-48"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {/* Rotating rings */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={`ring-${i}`}
                          className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                          style={{
                            width: `${100 + i * 20}%`,
                            height: `${100 + i * 20}%`,
                            left: `${-i * 10}%`,
                            top: `${-i * 10}%`,
                          }}
                          animate={{
                            rotate: [0, 360],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            rotate: { duration: 10 + i * 5, repeat: Infinity, ease: 'linear' },
                            opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                          }}
                        />
                      ))}
                      
                      {/* Center orb */}
                      <motion.div 
                        className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-sm"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.6, 0.9, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>
    </EnhancedBackground>
  );
}