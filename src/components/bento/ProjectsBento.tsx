'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

interface ProjectsBentoProps {
  data?: Project[]
}

export default function ProjectsBento({ data }: ProjectsBentoProps) {
  const [currentProject, setCurrentProject] = useState(0)
  
  const projectsData = data || [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring application',
      technologies: ['React', 'API Integration', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ]

  const featuredProjects = projectsData.slice(0, 3)

  return (
    <div className="h-full min-h-[380px] p-6 lg:p-8">
      <motion.div
        className="h-full flex flex-col max-w-4xl mx-auto"
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
            textShadow: "0 0 20px rgba(168, 85, 247, 0.8)"
          }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        {/* Project Carousel */}
        <div className="flex-1 relative overflow-hidden rounded-lg">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`absolute inset-0 p-4 ${
                index === currentProject ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: index === currentProject ? 1 : 0,
                x: index === currentProject ? 0 : 100
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="h-full flex flex-col justify-between">
                {/* Project Info */}
                <div>
                  <motion.h3 
                    className="text-lg lg:text-xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 text-sm lg:text-base mb-4 leading-relaxed"
                    whileHover={{ scale: 1.01 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 text-xs bg-purple-500/20 border border-purple-400/30 rounded text-purple-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(168, 85, 247, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs">🔗</span>
                      Live
                    </motion.a>
                  )}
                  
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 text-sm border border-gray-400/30 text-gray-300 rounded-lg hover:border-white hover:text-white transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xs">⚡</span>
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {featuredProjects.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentProject 
                  ? 'bg-purple-400' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => setCurrentProject(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.button
          className="mt-4 px-4 py-2 text-sm text-purple-400 border border-purple-400/30 rounded-full hover:bg-purple-400/10 transition-colors duration-300"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(168, 85, 247, 0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          View All Projects
        </motion.button>
      </motion.div>
      
      {/* Auto-advance projects */}
      <motion.div
        className="hidden"
        animate={{ x: 0 }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "loop",
          onRepeat: () => {
            setCurrentProject((prev) => 
              prev === featuredProjects.length - 1 ? 0 : prev + 1
            )
          }
        }}
      />
    </div>
  )
}