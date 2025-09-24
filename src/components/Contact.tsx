'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './backgrounds/AnimatedBackground'

interface ContactData {
  email?: string
  phone?: string
  linkedin?: string
  github?: string
}

interface ContactProps {
  data?: ContactData
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactData = data || {
    email: 'contact@megha.dev',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/megha',
    github: 'https://github.com/megha'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatedBackground variant="contact">
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition-colors duration-300">
              I&apos;m always interested in new opportunities and exciting projects. Let&apos;s connect!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -150, rotateX: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
              viewport={{ once: false }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Let&apos;s talk</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                  Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bgColor: "bg-teal-100 dark:bg-teal-900/30",
                    title: "Email",
                    value: contactData.email,
                    href: `mailto:${contactData.email}`,
                    textColor: "text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bgColor: "bg-cyan-100 dark:bg-cyan-900/30",
                    title: "Phone",
                    value: contactData.phone,
                    href: `tel:${contactData.phone}`,
                    textColor: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    ),
                    bgColor: "bg-blue-100 dark:bg-blue-900/30",
                    title: "LinkedIn",
                    value: "Connect with me",
                    href: contactData.linkedin,
                    textColor: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                      </svg>
                    ),
                    bgColor: "bg-gray-100 dark:bg-gray-700",
                    title: "GitHub",
                    value: contactData.github ? contactData.github.replace('https://github.com/', '') : "View my repositories",
                    href: contactData.github,
                    textColor: "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -40, rotateZ: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 + index * 0.15, type: "spring", stiffness: 150 }}
                    whileHover={{ scale: 1.05, x: 15, rotateZ: 2 }}
                    viewport={{ once: false }}
                  >
                    <motion.div 
                      className={`${item.bgColor} p-3 rounded-full transition-colors duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">{item.title}</h4>
                      <a 
                        href={item.href} 
                        target={item.href?.startsWith('http') ? "_blank" : undefined}
                        rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`${item.textColor} transition-colors`}
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300"
              initial={{ opacity: 0, x: 150, rotateY: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 70 }}
              viewport={{ once: false }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: false }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: false }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: false }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    className="text-green-600 dark:text-green-400 text-center transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="text-red-600 dark:text-red-400 text-center transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Sorry, there was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  )
}