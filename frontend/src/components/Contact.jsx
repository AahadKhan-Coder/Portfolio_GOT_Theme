import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Scroll, Shield, Swords, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Send Raven', 
      value: 'aahadkhan2715@gmail.com',
      link: 'mailto:aahadkhan2715@gmail.com',
      color: 'amber'
    },
    { 
      icon: Phone, 
      label: 'Summon via Horn', 
      value: '+91 xoxoxoxoxo',
      link: 'tel:+91x0x0x0x0x0',
      color: 'amber'
    },
    { 
      icon: MapPin, 
      label: 'Kingdom Location', 
      value: 'Delhi, India',
      link: 'https://maps.google.com/?q=Delhi,India',
      color: 'amber'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn Realm', 
      value: 'Connect on LinkedIn',
      link: '#', // Replace with your LinkedIn URL
      color: 'amber'
    },
    { 
      icon: Github, 
      label: 'GitHub Fortress', 
      value: 'View Repositories',
      link: '#', // Replace with your GitHub URL
      color: 'amber'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-slate-800">
        {/* Animated pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating elements */}
      {[Scroll, Shield, Swords].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${15 + i * 35}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon className="w-40 h-40 text-amber-500" />
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
            Send a Raven
          </h2>
          <p className="text-amber-300 text-xl" style={{ fontFamily: 'Cinzel, serif' }}>
            Let's Build Kingdoms Together
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3" style={{ fontFamily: 'Cinzel, serif' }}>
                <Scroll className="w-8 h-8" />
                Ways to Reach Me
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg border border-amber-500/20 hover:border-amber-500 hover:bg-slate-800 transition-all duration-300 group"
                    >
                      <div className={`p-3 bg-${info.color}-500/20 rounded-lg group-hover:bg-${info.color}-500/30 transition-all duration-300`}>
                        <Icon className={`w-6 h-6 text-${info.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                        <div className="text-amber-300 font-semibold">{info.value}</div>
                      </div>
                      <Send className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-amber-900/30 to-slate-900/50 backdrop-blur-sm rounded-xl border border-amber-500/30 p-6 shadow-xl"
            >
              <h4 className="text-xl font-bold text-amber-400 mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                Open to Opportunities
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Currently seeking exciting opportunities in Full-Stack Development, MERN Stack projects, and collaborative ventures. Available for freelance work, full-time positions, and interesting projects that push the boundaries of web development.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 p-8 shadow-2xl">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-amber-500"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-amber-500"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-amber-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-amber-500"></div>

              <h3 className="text-2xl font-bold text-amber-400 mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                Write Your Message
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <label className="block text-amber-300 mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Lord of..."
                    className="w-full p-4 rounded-lg bg-slate-900/50 border-2 border-amber-500/30 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label className="block text-amber-300 mb-2 font-semibold">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="raven@castle.com"
                    className="w-full p-4 rounded-lg bg-slate-900/50 border-2 border-amber-500/30 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label className="block text-amber-300 mb-2 font-semibold">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-lg bg-slate-900/50 border-2 border-amber-500/30 text-slate-200 placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-slate-900 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-4 border-slate-900 border-t-transparent rounded-full"
                      />
                      Sending Raven...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Raven
                    </>
                  )}
                </motion.button>

                {/* Success/Error Message */}
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      formStatus === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                        : 'bg-red-500/20 border border-red-500/50 text-red-300'
                    }`}
                  >
                    {formStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>Your raven has been sent! I'll respond soon.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-6 h-6" />
                        <span>Please fill all fields to send your raven.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

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