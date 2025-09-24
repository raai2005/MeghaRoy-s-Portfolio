'use client'

import { motion } from 'framer-motion'
import GlowCard from './ui/GlowCard'

interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  data?: Skill[]
}

export default function Skills({ data }: SkillsProps) {
  const skillsData = data || [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Python', level: 75 }
  ]

  return (
    <div className="bg-gradient-to-b from-blue-900 via-black to-cyan-950">
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
              }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
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
              Here are the technologies and tools I work with to bring ideas to life.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -45 : 45 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 }}
                viewport={{ once: false }}
              >
                <GlowCard
                  glowColor="rgba(59, 130, 246, 0.5)"
                  hoverScale={1.05}
                  delay={0}
                  className="group"
                >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <motion.h3 
                      className="text-lg font-semibold text-white"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      {skill.name}
                    </motion.h3>
                    <motion.span 
                      className="text-sm text-blue-300 font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                        viewport={{ once: false }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1 + 1.8,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                    
                    {/* Glow effect on progress bar */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-60"
                      style={{
                        background: `linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, #0ea5e9 100%)`,
                        width: `${skill.level}%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white text-center mb-12"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 15px rgba(59, 130, 246, 0.6)"
              }}
            >
              Additional Technologies
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code',
                'Postman', 'Jest', 'Cypress', 'GraphQL', 'REST APIs', 'Socket.io'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -8 }}
                  viewport={{ once: false }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                  
                  {/* Tech badge */}
                  <span className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                    {tech}
                  </span>
                  
                  {/* Floating particles on hover */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}