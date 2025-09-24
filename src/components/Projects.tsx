'use client'

import { motion } from 'framer-motion'

interface Project {
  _id?: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

interface ProjectsProps {
  data?: Project[]
}

export default function Projects({ data }: ProjectsProps) {
  const projectsData = data || [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe for payments.',
      image: '/placeholder-project1.jpg',
      technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/megha/ecommerce',
      liveUrl: 'https://ecommerce-demo.vercel.app'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using Socket.io.',
      image: '/placeholder-project2.jpg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/megha/taskmanager',
      liveUrl: 'https://taskmanager-demo.netlify.app'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts using OpenWeather API.',
      image: '/placeholder-project3.jpg',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/megha/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app'
    }
  ]

  return (
    <div className="bg-black">
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-xl text-gray-200 mt-6 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Here are some of the projects I&apos;ve worked on recently.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 60, rotateZ: index % 2 === 0 ? -15 : 15, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 120, damping: 15 }}
                whileHover={{ scale: 1.05, y: -10, rotateZ: index % 2 === 0 ? 2 : -2 }}
                viewport={{ once: false }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K'
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center text-gray-300">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-teal-400/30 flex items-center justify-center">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                            </svg>
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3"
                    whileHover={{ color: "#8b5cf6" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="relative group bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        viewport={{ once: false }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300" />
                        <span className="relative">{tech}</span>
                      </motion.span>
                    ))}
                  </motion.div>
                
                </div>
              </motion.div>
          ))}
        </div>

          {projectsData.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="text-gray-300">No projects available. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}