import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Crown, Scroll, Swords } from 'lucide-react';
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/AahadKhan-Coder',
      color: 'hover:text-purple-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://in.linkedin.com/in/aahad-khan-06bb39348',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:aahadkhan2715@gmail.com',
      color: 'hover:text-amber-400'
    }
  ];

  const quickLinks = [
    { name: 'Hero', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-black to-slate-950 border-t-2 border-amber-500/30 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 35 L90 35 L65 55 L75 85 L50 65 L25 85 L35 55 L10 35 L40 35 Z' fill='%23d97706'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />

      {/* Floating decorative elements */}
      {/* {[Scroll, Crown, Swords].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-3"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-20 h-20 sm:w-24 sm:h-24 text-amber-500" />
        </motion.div>
      ))} */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Crown className="w-8 h-8 text-amber-500" />
              </motion.div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                Abdul Aahad
              </h3>
            </div>
            <p className="text-slate-400 text-sm sm:text-base mb-3">
              Full-Stack Developer | MERN Specialist
            </p>
            <p className="text-amber-500 italic text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
              "Building Kingdoms with Code"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 
              className="text-amber-400 font-bold text-lg sm:text-xl mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 
              className="text-amber-400 font-bold text-lg sm:text-xl mb-4"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Connect with Me
            </h4>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-slate-800/50 rounded-lg border border-amber-500/30 text-slate-400 ${social.color} transition-all duration-300 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-slate-400 text-sm">
              aahadkhan2715@gmail.com
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Delhi, India
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6 sm:mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm order-2 sm:order-1">
            © {currentYear} Abdul Aahad. All rights reserved.
          </p>

          {/* House Badge */}
          <div className="flex items-center gap-2 text-amber-400 order-1 sm:order-2">
            <span className="text-sm" style={{ fontFamily: 'Cinzel, serif' }}>
              House Developer
            </span>
            <div className="w-px h-4 bg-amber-500/30" />
            <span className="text-sm italic">
              "Winter is Coming"
            </span>
          </div>

          {/* Made with Love */}
          <motion.p 
            className="text-slate-400 text-sm flex items-center gap-2 order-3"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            & Code
          </motion.p>
        </motion.div>

        {/* GoT Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-amber-500/10 text-center"
        >
          <p className="text-slate-500 text-xs sm:text-sm italic">
            "A developer's code is his castle, and every project is a battle won."
          </p>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

      {/* Import Cinzel font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
      `}</style>
    </footer>
  );
};