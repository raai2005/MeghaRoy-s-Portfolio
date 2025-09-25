'use client'

import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  category?: string
}

interface SkillsBentoProps {
  data?: Skill[]
}

export default function SkillsBento({ data }: SkillsBentoProps) {
  const skillsData = data || [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 90 }
  ]

  // Take top 6 skills for the bento card
  const topSkills = skillsData.slice(0, 6)

  return (
    <div className="h-full min-h-[320px] p-6 lg:p-8">
      <motion.div
        className="h-full flex flex-col justify-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2 
          className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
          }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99] as const
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              {/* Skill Name */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-900 dark:text-white font-medium text-sm lg:text-base">
                  {skill.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar Background */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                {/* Progress Bar Fill */}
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full relative"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ 
                    duration: 1.2, 
                    delay: index * 0.1 + 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Skills Button */}
        <motion.button
          className="mt-4 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 border border-blue-500/50 dark:border-blue-400/30 rounded-full hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-colors duration-300"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          View All Skills
        </motion.button>
      </motion.div>
    </div>
  )
}