'use client'

import { motion } from 'framer-motion'

interface AboutData {
  description?: string
  image?: string
}

interface AboutProps {
  data?: AboutData
}

export default function About({ data }: AboutProps) {
  const aboutData = data || {
    description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
    image: '/placeholder-about.jpg'
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                {aboutData.description}
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
                </motion.div>
                <motion.div 
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300">50+ Completed</p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { text: "Frontend Development", color: "blue" },
                  { text: "Backend Development", color: "green" },
                  { text: "Full Stack", color: "purple" },
                  { text: "Database Design", color: "orange" }
                ].map((skill, index) => (
                  <motion.span
                    key={skill.text}
                    className={`bg-${skill.color}-100 dark:bg-${skill.color}-900/30 text-${skill.color}-800 dark:text-${skill.color}-300 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    {skill.text}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto lg:max-w-none">
                <motion.img
                  src={aboutData.image}
                  alt="About Megha"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIyNy42MTQgMTUwIDI1MCAyNy4zODU4IDI1MCAyMDBDMjUwIDE3Mi42MTQgMjI3LjYxNCAxNTAgMjAwIDE1MEMxNzIuMzg2IDE1MCA1MCAxNzIuMzg2IDE1MCAyMDBDMTUwIDIyNy42MTQgMTcyLjM4NiAxNTAgMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K'
                  }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-20"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
