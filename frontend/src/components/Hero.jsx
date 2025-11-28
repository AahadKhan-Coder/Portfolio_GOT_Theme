import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { ChevronDown, Flame, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Generate floating particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(particleArray);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
        {/* Stone texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(194, 120, 3, 0.3), transparent 70%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-400 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: '-10px',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Parallax Dragon Shadow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z' fill='%23d97706'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
          backgroundPosition: 'center',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Decorative Top Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 mx-auto"
        />

        {/* House Sigil */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <div className="inline-block p-4 border-2 border-amber-500 rounded-full bg-slate-900/50 backdrop-blur-sm shadow-2xl">
            <Flame className="w-12 h-12 text-amber-500" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600"
          style={{
            fontFamily: 'Cinzel, serif',
            textShadow: '0 0 30px rgba(217, 119, 6, 0.5), 0 0 60px rgba(217, 119, 6, 0.3)',
          }}
        >
          Abdul Aahad
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl text-amber-300 mb-8 font-serif"
        >
          <span className="inline-block px-4 py-2 border border-amber-500/30 bg-slate-900/30 backdrop-blur-sm rounded">
            of House Developer
          </span>
        </motion.div>

        {/* Typed Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-12"
        >
          <ReactTyped
            className="text-xl md:text-3xl text-slate-300 font-light"
            strings={[
              'Full-Stack Maester of the MERN Realm',
              'Keeper of React & Node.js',
              'Lord Commander of APIs',
              'Builder of Scalable Kingdoms'
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <button
            onClick={scrollToNextSection}
            className="group relative px-8 py-4 border-2 border-amber-500 text-amber-400 rounded-lg overflow-hidden transition-all duration-300 hover:text-slate-900 hover:scale-105"
            style={{
              fontFamily: 'Cinzel, serif',
              textShadow: '0 0 10px rgba(217, 119, 6, 0.5)',
            }}
          >
            <span className="relative z-10 font-semibold tracking-wider">Enter My Realm</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Sparkles className="inline-block ml-2 w-5 h-5 relative z-10" />
          </button>
        </motion.div>

        {/* Decorative Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-12 mx-auto"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 3 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-500 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Add Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};