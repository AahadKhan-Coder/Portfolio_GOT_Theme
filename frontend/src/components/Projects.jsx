import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Shield, Zap, Crown, Sword, CheckCircle } from 'lucide-react';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Job Hunt Direct',
      subtitle: 'Advanced Job Aggregator Kingdom',
      description: 'An automated job aggregation platform that integrates multiple sources to help job seekers find their perfect role. Built with modern MERN stack and deployed on cloud infrastructure.',
      image: '🏰',
      liveLink: 'https://jobhuntdirect.jobsearchjob.xyz/',
      githubLink: 'https://github.com/AahadKhan-Coder/JobHuntDirect',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
      features: [
        'Automated job aggregation from multiple sources',
        'JWT-based authentication & authorization',
        'Role-based access control (Admin/User)',
        'Responsive UI with Tailwind CSS',
        'Cloud deployment on Vercel & MongoDB Atlas',
        'Advanced search & filtering capabilities'
      ],
      color: 'amber',
      icon: Crown
    },
    {
      title: 'Job Search Portal',
      subtitle: 'Recruitment Fortress',
      description: 'A comprehensive job portal platform featuring admin dashboard, CRUD operations, and secure resume management. Implements OTP-based authentication and optimized database queries.',
      image: '⚔️',
      liveLink: 'https://www.jobsearchjob.xyz/',
      githubLink: 'https://github.com/AahadKhan-Coder/Job-Search',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OTP Auth', 'Aggregation'],
      features: [
        'Full-featured admin dashboard',
        'Complete CRUD operations',
        'OTP-based authentication system',
        'Secure resume upload & storage',
        'MongoDB aggregation pipelines',
        'Reporting & analytics dashboard'
      ],
      color: 'amber',
      icon: Sword
    },
    {
      title: 'More Projects',
      subtitle: 'Open Source Contributions',
      description: 'Explore my collection of full-stack applications demonstrating API integration, authentication flows, cloud deployment, and responsive design patterns. Available on GitHub.',
      image: '🛡️',
      liveLink: null,
      githubLink: 'https://github.com/AahadKhan-Coder', 
      techStack: ['MERN Stack', 'REST APIs', 'Cloud Deploy', 'Responsive Design'],
      features: [
        'Multiple full-stack demos',
        'API integration examples',
        'Authentication implementations',
        'Cloud deployment setups',
        'Responsive UI patterns',
        'Open source contributions'
      ],
      color: 'amber',
      icon: Shield
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-black">
        {/* Animated pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 35 L90 35 L65 55 L75 85 L50 65 L25 85 L35 55 L10 35 L40 35 Z' fill='none' stroke='%23d97706' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
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
            Legendary Projects
          </h2>
          <p className="text-amber-300 text-xl" style={{ fontFamily: 'Cinzel, serif' }}>
            Kingdoms Built with Code
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 hover:border-amber-500 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-500 opacity-50"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-500 opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-500 opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-500 opacity-50"></div>

                  {/* Glowing effect on hover */}
                  <motion.div
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-400/10 to-amber-500/10"
                  />

                  <div className="relative p-8 md:p-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      {/* Left: Project Info */}
                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-start gap-4 mb-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`p-4 bg-${project.color}-500/20 rounded-xl border border-${project.color}-500/50`}
                          >
                            <Icon className={`w-10 h-10 text-${project.color}-400`} />
                          </motion.div>
                          <div>
                            <motion.div
                              className="text-6xl mb-2"
                              animate={{
                                scale: hoveredProject === index ? 1.1 : 1,
                              }}
                            >
                              {project.image}
                            </motion.div>
                            <h3 
                              className="text-3xl font-bold text-amber-300 mb-2"
                              style={{ fontFamily: 'Cinzel, serif' }}
                            >
                              {project.title}
                            </h3>
                            <p className="text-amber-500 italic">{project.subtitle}</p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 bg-slate-700/50 border border-amber-500/30 rounded-full text-amber-300 text-sm hover:border-amber-500 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                          {project.liveLink && (
                            <motion.a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                              style={{ fontFamily: 'Cinzel, serif' }}
                            >
                              <ExternalLink className="w-5 h-5" />
                              View Live
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 border-2 border-amber-500 text-amber-400 rounded-lg font-bold hover:bg-amber-500/20 transition-all duration-300"
                            style={{ fontFamily: 'Cinzel, serif' }}
                          >
                            <Github className="w-5 h-5" />
                            {project.liveLink ? 'View Code' : 'View on GitHub'}
                          </motion.a>
                        </div>
                      </div>

                      {/* Right: Features List */}
                      <div className="bg-slate-900/50 rounded-xl p-6 border border-amber-500/20">
                        <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
                          <Zap className="w-6 h-6" />
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              className="flex items-start gap-3 text-slate-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative bg-gradient-to-r from-slate-800/50 via-amber-900/30 to-slate-800/50 backdrop-blur-sm rounded-lg border border-amber-500/30 p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-amber-400 mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
              Want to See More?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Explore my complete collection of projects, contributions, and experiments on GitHub. Each repository is documented with setup instructions and live demos.
            </p>
            <motion.a
              href="https://github.com/AahadKhan-Coder"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border-2 border-amber-500 text-amber-400 rounded-lg font-bold hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              <Github className="w-6 h-6" />
              Visit My GitHub Kingdom
            </motion.a>
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