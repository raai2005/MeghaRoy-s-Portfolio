'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

// Basic fallback animation data if remote animation fails
const fallbackAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 400,
  h: 400,
  nm: "Simple Orb",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [200, 200, 0] },
        s: { 
          a: 1, 
          k: [
            { t: 0, s: [70, 70, 100], e: [100, 100, 100] },
            { t: 30, s: [100, 100, 100], e: [70, 70, 100] },
            { t: 60 }
          ] 
        }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [140, 140] },
          d: 1,
          nm: "Ellipse"
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.4, 0.2, 0.8, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill"
        }
      ]
    }
  ]
};

interface AboutData {
  title?: string;
  description?: string;
  image?: string;
}

interface AboutProps {
  data?: AboutData;
}

export default function About({ data }: AboutProps) {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    // Fetch the Lottie animation data - with error handling
    fetch('https://lottie.host/b6f68d5a-df68-43e6-9c1d-c0a9f3778119/suM3AAQpkG.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Get as text first to check content
      })
      .then(text => {
        try {
          // Verify we can parse it as JSON
          const jsonData = JSON.parse(text);
          setLottieData(jsonData);
        } catch (err) {
          console.error('Error parsing animation JSON:', err);
          // Fallback to default animation
          setLottieData(fallbackAnimation);
        }
      })
      .catch(error => {
        console.error('Error loading Lottie animation:', error);
        // Use fallback animation instead of null
        setLottieData(fallbackAnimation);
      });
  }, []);

  const aboutData = data || {
    description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
  };

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
            {aboutData.title || 'About'}
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
            <div className="relative w-full h-96">
              {/* Dark tech background */}
              <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden">
                {/* Grid background pattern */}
                <div className="absolute inset-0" 
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}>
                </div>
                
                {/* Animated particles in background */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-blue-500"
                    style={{
                      width: Math.random() * 2 + 1 + "px",
                      height: Math.random() * 2 + 1 + "px",
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.5,
                    }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                    }}
                  />
                ))}
              </div>
              
              {/* Lottie animation with enhanced glow */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <motion.div 
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {/* Pulsating glow behind orb */}
                  <motion.div 
                    className="absolute w-full h-full rounded-full blur-xl"
                    style={{ 
                      background: 'radial-gradient(circle, rgba(79, 70, 229, 0.6) 0%, rgba(124, 58, 237, 0.4) 40%, rgba(0, 0, 0, 0) 70%)',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Lottie animation */}
                  <div className="w-48 h-48 lg:w-64 lg:h-64">
                    {lottieData ? (
                      <Lottie 
                        animationData={lottieData}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-pulse w-36 h-36 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 opacity-70"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced tech-themed frame */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Corner elements with extended lines */}
                <div className="absolute top-0 left-0">
                  <motion.div className="w-20 h-2 bg-blue-500 origin-left opacity-70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.div className="w-2 h-20 bg-blue-500 origin-top opacity-70" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                
                <div className="absolute top-0 right-0">
                  <motion.div className="w-20 h-2 bg-blue-500 origin-right opacity-70 ml-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                  <motion.div className="w-2 h-20 bg-blue-500 origin-top opacity-70 ml-auto" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                  />
                </div>
                
                <div className="absolute bottom-0 left-0">
                  <motion.div className="w-2 h-20 bg-blue-500 origin-bottom opacity-70" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                  />
                  <motion.div className="w-20 h-2 bg-blue-500 origin-left opacity-70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  />
                </div>
                
                <div className="absolute bottom-0 right-0">
                  <motion.div className="w-2 h-20 bg-blue-500 origin-bottom opacity-70 ml-auto" 
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                  <motion.div className="w-20 h-2 bg-blue-500 origin-right opacity-70 ml-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                  />
                </div>
                
                {/* Tech scan line */}
                <motion.div
                  className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0"
                  animate={{ 
                    top: ['0%', '100%', '0%'],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                  }}
                />
              </div>

              {/* Show image if available */}
              {aboutData.image && (
                <img
                  src={aboutData.image}
                  alt="About Megha"
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIyNy42MTQgMTUwIDI1MCAyNy4zODU4IDI1MCAyMDBDMjUwIDE3Mi42MTQgMjI3LjYxNCAxNTAgMjAwIDE1MEMxNzIuMzg2IDE1MCA1MCAxNzIuMzg2IDE1MCAyMDBDMTUwIDIyNy42MTQgMTcyLjM4NiAxNTAgMjAwIDE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2Zz4K';
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
