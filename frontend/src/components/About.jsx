import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scroll, Sword, Crown, Shield, Code, Zap, Award } from 'lucide-react';

export const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+', color: 'amber' },
    { icon: Zap, label: 'Technologies Mastered', value: '20+', color: 'amber' },
    { icon: Award, label: 'Years of Experience', value: '1+', color: 'amber' },
    { icon: Shield, label: 'Happy Clients', value: '10+', color: 'amber' }
  ];

  const achievements = [
    { icon: Sword, title: 'Full-Stack Warrior', desc: 'Master of MERN Stack Development' },
    { icon: Crown, title: 'API Architect', desc: 'Builder of RESTful Kingdoms' },
    { icon: Scroll, title: 'Code Maester', desc: 'Mentor & Knowledge Keeper' }
  ];

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Animated pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z' fill='none' stroke='%23d97706' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"
          />
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600"
            style={{
              fontFamily: 'Cinzel, serif',
              textShadow: '0 0 30px rgba(217, 119, 6, 0.3)',
            }}
          >
            The Chronicles
          </h2>
          <p className="text-amber-300 text-xl" style={{ fontFamily: 'Cinzel, serif' }}>
            of Abdul Aahad
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Story Scroll */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-lg border-2 border-amber-500/30 shadow-2xl">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

              <Scroll className="w-12 h-12 text-amber-500 mb-4" />
              
              <h3 className="text-2xl font-bold text-amber-400 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
                The Developer's Tale
              </h3>
              
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  In the realm of <span className="text-amber-400 font-semibold">Delhi, India</span>, I forged my path as a <span className="text-amber-400 font-semibold">Full-Stack MERN Developer</span>, wielding the powers of React.js, Node.js, Express.js, and MongoDB to build scalable kingdoms of code.
                </p>
                <p>
                  With hands trained in the ancient arts of <span className="text-amber-400 font-semibold">JWT authentication, REST APIs</span>, and <span className="text-amber-400 font-semibold">responsive design</span>, I craft web applications that stand the test of time and siege.
                </p>
                <p>
                  As a <span className="text-amber-400 font-semibold">Technical Peer Mentor</span> since 2023, I share the sacred knowledge of web development, guiding fellow developers through the treacherous paths of Git workflows and full-stack mastery.
                </p>
                <p className="text-amber-300 italic border-l-4 border-amber-500 pl-4">
                  "Passionate about delivering high-quality solutions and continuously learning emerging technologies in the ever-evolving realm of web development."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Achievements Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6 rounded-lg border-l-4 border-amber-500 shadow-xl hover:shadow-amber-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <achievement.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-amber-300 mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400">{achievement.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-amber-500/30 p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="text-center relative group"
                >
                  <div className={`inline-flex p-4 rounded-full bg-${stat.color}-500/20 mb-3 group-hover:bg-${stat.color}-500/30 transition-all duration-300`}>
                    <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                  </div>
                  <motion.div
                    animate={{ scale: hoveredStat === index ? 1.2 : 1 }}
                    className="text-3xl md:text-4xl font-bold text-amber-400 mb-2"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-16"
        />
      </div>

      {/* Import Cinzel font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
      `}</style>
    </section>
  );
};