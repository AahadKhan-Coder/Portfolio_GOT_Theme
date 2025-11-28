import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Sparkles, Swords, Shield, Flame } from 'lucide-react';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Arsenal',
      icon: Code,
      color: 'amber',
      skills: [
        { name: 'React.js', level: 95, house: 'House of Components' },
        { name: 'Redux', level: 85, house: 'State Management Guild' },
        { name: 'HTML5', level: 98, house: 'Foundation Keep' },
        { name: 'CSS3', level: 95, house: 'Style Citadel' },
        { name: 'Tailwind CSS', level: 92, house: 'Utility Legion' },
        { name: 'JavaScript ES6+', level: 93, house: 'Modern Script Order' },
        { name: 'Framer Motion', level: 88, house: 'Animation Brotherhood' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Stronghold',
      icon: Server,
      color: 'amber',
      skills: [
        { name: 'Node.js', level: 90, house: 'Runtime Kingdom' },
        { name: 'Express.js', level: 92, house: 'API Fortress' },
        { name: 'REST APIs', level: 94, house: 'Service Guild' },
        { name: 'JWT Authentication', level: 88, house: 'Security Watch' },
        { name: 'OTP Verification', level: 85, house: 'Guardian Council' }
      ]
    },
    {
      id: 'database',
      name: 'Data Vault',
      icon: Database,
      color: 'amber',
      skills: [
        { name: 'MongoDB', level: 92, house: 'NoSQL Realm' },
        { name: 'Mongoose', level: 90, house: 'Schema Keepers' },
        { name: 'PostgreSQL', level: 75, house: 'SQL Dynasty' },
        { name: 'Query Optimization', level: 87, house: 'Performance Circle' }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps Armory',
      icon: Wrench,
      color: 'amber',
      skills: [
        { name: 'Git', level: 93, house: 'Version Control League' },
        { name: 'GitHub', level: 92, house: 'Code Repository' },
        { name: 'Postman', level: 88, house: 'API Testing Guild' },
        { name: 'VS Code', level: 95, house: 'Editors Conclave' },
        { name: 'Vercel', level: 85, house: 'Deployment Legion' },
        { name: 'Render', level: 83, house: 'Cloud Watchers' },
        { name: 'AWS', level: 70, house: 'Cloud Kingdom' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-slate-800">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating emblems */}
      {[Swords, Shield, Flame].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-32 h-32 text-amber-500" />
        </motion.div>
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
            Arsenal of Skills
          </h2>
          <p className="text-amber-300 text-xl" style={{ fontFamily: 'Cinzel, serif' }}>
            Master of Many Crafts
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-lg shadow-amber-500/50'
                : 'bg-slate-800/50 border-amber-500/30 text-amber-300 hover:border-amber-500'
            }`}
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            <Sparkles className="inline-block w-5 h-5 mr-2" />
            All Skills
          </button>
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-lg shadow-amber-500/50'
                    : 'bg-slate-800/50 border-amber-500/30 text-amber-300 hover:border-amber-500'
                }`}
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                <Icon className="inline-block w-5 h-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-${category.color}-500/20 rounded-lg border border-${category.color}-500/50`}>
                    <Icon className={`w-8 h-8 text-${category.color}-400`} />
                  </div>
                  <h3 
                    className={`text-3xl font-bold text-${category.color}-400`}
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-lg border border-amber-500/30 p-6 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {/* Skill Name */}
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-amber-300">
                          {skill.name}
                        </h4>
                        <motion.span
                          animate={{ scale: hoveredSkill === skill.name ? 1.2 : 1 }}
                          className="text-2xl font-bold text-amber-500"
                          style={{ fontFamily: 'Cinzel, serif' }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* House Badge */}
                      <div className="text-sm text-slate-400 mb-4 italic">
                        {skill.house}
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                        />
                        <motion.div
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-slate-800/50 via-amber-900/30 to-slate-800/50 backdrop-blur-sm rounded-lg border border-amber-500/30 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 text-center" style={{ fontFamily: 'Cinzel, serif' }}>
              Also Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML APIs', 'OpenAI', 'LangChain', 'Python', 'FastAPI', 'Django', 'Next.js', 'Docker', 'Web Scraping', 'Automation'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-slate-800 border border-amber-500/50 rounded-full text-amber-300 text-sm hover:bg-amber-500/20 transition-all duration-300"
                >
                  {tech}
                </motion.span>
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