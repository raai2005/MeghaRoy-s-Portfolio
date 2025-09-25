'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ContactData {
  email?: string
  phone?: string
  github?: string
  linkedin?: string
}

interface ContactBentoProps {
  data?: ContactData
}

export default function ContactBento({ data }: ContactBentoProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
  const contactData = data || {
    email: 'megha@example.com',
    phone: '+1 (555) 123-4567',
    github: 'megha',
    linkedin: 'megha'
  }

  const contactItems = [
    {
      label: 'Email',
      value: contactData.email,
      icon: '📧',
      href: `mailto:${contactData.email}`,
      gradient: 'from-red-400 to-pink-400'
    },
    {
      label: 'Phone',
      value: contactData.phone,
      icon: '📱',
      href: `tel:${contactData.phone}`,
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      label: 'GitHub',
      value: `@${contactData.github}`,
      icon: '💻',
      href: `https://github.com/${contactData.github}`,
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      label: 'LinkedIn',
      value: `@${contactData.linkedin}`,
      icon: '💼',
      href: `https://linkedin.com/in/${contactData.linkedin}`,
      gradient: 'from-cyan-400 to-blue-500'
    }
  ]

  return (
    <div className="h-full min-h-[350px] p-6 lg:p-8">
      <motion.div
        className="h-full flex flex-col justify-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(245, 101, 101, 0.8)"
          }}
        >
          <span className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* Stack of Contact Items */}
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    item.href === '#' ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.03) 100%)`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 5,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                    borderColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className={`font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.value}
                    </p>
                  </div>

                  {/* Arrow indicator for clickable items */}
                  {item.href !== '#' && (
                    <motion.div
                      className="text-gray-500 dark:text-gray-400"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Additional space for better layout */}
            <div className="pb-4"></div>
          </motion.div>

          {/* Right Column - Message Form */}
          <motion.div
            className="flex-1 bg-gradient-to-br from-gray-100/80 to-gray-200/80 dark:from-gray-800/30 dark:to-gray-900/30 backdrop-blur-md rounded-xl border border-gray-300/50 dark:border-gray-700/30 p-5 shadow-xl self-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Send Message</h3>
              
              {/* Enhanced Form */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <motion.input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white/80 dark:bg-gray-800/40 rounded-md px-4 py-3 border border-gray-300/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all"
                      whileFocus={{ scale: 1.01 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                    <motion.div 
                      className="absolute top-3 right-4 text-gray-400 opacity-50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      👤
                    </motion.div>
                  </div>
                  
                  {/* Email Input */}
                  <div className="relative">
                    <motion.input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-white/80 dark:bg-gray-800/40 rounded-md px-4 py-3 border border-gray-300/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all"
                      whileFocus={{ scale: 1.01 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    />
                    <motion.div 
                      className="absolute top-3 right-4 text-gray-400 opacity-50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      ✉️
                    </motion.div>
                  </div>
                  
                  {/* Message Textarea */}
                  <motion.textarea
                    placeholder="Your Message"
                    rows={2}
                    className="w-full bg-white/80 dark:bg-gray-800/40 rounded-md px-4 py-3 border border-gray-300/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all resize-none"
                    whileFocus={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  />

                  {/* Message Guidelines */}
                  <motion.p 
                    className="text-xs text-gray-400 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                  </motion.p>
                </div>
                
                {/* Send Button */}
                <motion.button
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 25px rgba(245, 101, 101, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(`mailto:${contactData.email}`, '_blank');
                  }}
                >
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6666 1.33337L7.33329 8.66671" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.6666 1.33337L9.99996 14.6667L7.33329 8.66671L1.33329 6.00004L14.6666 1.33337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
