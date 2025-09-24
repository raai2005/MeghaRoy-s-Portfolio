'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ContactData {
  email?: string
  phone?: string
  location?: string
}

interface ContactBentoProps {
  data?: ContactData
}

export default function ContactBento({ data }: ContactBentoProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  
  const contactData = data || {
    email: 'megha@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA'
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
      label: 'Location',
      value: contactData.location,
      icon: '📍',
      href: '#',
      gradient: 'from-blue-400 to-cyan-400'
    }
  ]

  return (
    <div className="h-full min-h-[350px] p-6 lg:p-8">
      <motion.div
        className="h-full flex flex-col justify-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 text-center"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(245, 101, 101, 0.8)"
          }}
        >
          <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>

        {/* Contact Items */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99] as const
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredItem(item.label)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <motion.a
                href={item.href}
                className={`block p-4 rounded-lg transition-all duration-300 ${
                  item.href === '#' ? 'cursor-default' : 'cursor-pointer'
                }`}
                style={{
                  background: hoveredItem === item.label 
                    ? `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`
                    : `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: hoveredItem === item.label 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <motion.p 
                      className="text-sm text-gray-400 mb-1"
                      whileHover={{ color: '#ffffff' }}
                    >
                      {item.label}
                    </motion.p>
                    <motion.p 
                      className={`font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.value}
                    </motion.p>
                  </div>

                  {/* Arrow indicator for clickable items */}
                  {item.href !== '#' && (
                    <motion.div
                      className="text-gray-400"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.div>
                  )}
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 25px rgba(245, 101, 101, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = `mailto:${contactData.email}`}
          >
            Send Message
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          {['💼', '🐦', '💻', '📸'].map((icon, index) => (
            <motion.button
              key={index}
              className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-lg hover:bg-gray-700/50 transition-colors"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              {icon}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}