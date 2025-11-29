import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, Flame } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "Hero", icon: Crown },
    { name: "About", icon: Flame },
    { name: "Skills", icon: Flame },
    { name: "Projects", icon: Flame },
    { name: "Contact", icon: Flame }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-amber-500/10 border-b border-amber-500/20"
            : "bg-slate-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {/* Animated Crown Icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Crown className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-amber-500 rounded-full blur-md -z-10"
                />
              </motion.div>

              {/* Name */}
              <Link to="hero" smooth={true} duration={500}>
                <h1
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 group-hover:from-amber-300 group-hover:via-amber-500 group-hover:to-amber-700 transition-all duration-300"
                  style={{
                    fontFamily: "Cinzel, serif",
                    textShadow: "0 0 20px rgba(217, 119, 6, 0.3)",
                  }}
                >
                  Abdul Aahad
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.name.toLowerCase()}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onSetActive={() => setActiveSection(item.name.toLowerCase())}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 lg:px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeSection === item.name.toLowerCase()
                          ? "bg-amber-500/20 text-amber-300"
                          : "text-slate-300 hover:text-amber-400 hover:bg-amber-500/10"
                      }`}
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      <span className="font-semibold text-sm lg:text-base">
                        {item.name}
                      </span>
                    </motion.div>

                    {/* Active indicator */}
                    {activeSection === item.name.toLowerCase() && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-amber-500 rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-lg bg-amber-500/20 border border-amber-500/30 hover:bg-amber-500/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-amber-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Decorative bottom border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-16 sm:top-20 right-0 bottom-0 w-64 sm:w-80 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 border-l-2 border-amber-500/30 shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 25 L50 25 L38 35 L43 50 L30 40 L17 50 L22 35 L10 25 L25 25 Z' fill='%23d97706'/%3E%3C/svg%3E")`,
                  backgroundSize: "80px 80px",
                }}
              />

              <div className="relative p-6">
                {/* Mobile Menu Header */}
                <div className="mb-6 pb-6 border-b border-amber-500/20">
                  <h2
                    className="text-xl font-bold text-amber-400 flex items-center gap-2"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    <Flame className="w-5 h-5" />
                    Navigation
                  </h2>
                </div>

                {/* Mobile Menu Items */}
                <ul className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={item.name.toLowerCase()}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-80}
                          onClick={() => setIsMobileMenuOpen(false)}
                          onSetActive={() => setActiveSection(item.name.toLowerCase())}
                        >
                          <motion.div
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                              activeSection === item.name.toLowerCase()
                                ? "bg-amber-500/20 border-l-4 border-amber-500 text-amber-300"
                                : "text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 border-l-4 border-transparent hover:border-amber-500/50"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span
                              className="font-semibold"
                              style={{ fontFamily: "Cinzel, serif" }}
                            >
                              {item.name}
                            </span>
                          </motion.div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-6 border-t border-amber-500/20"
                >
                  <p className="text-slate-400 text-sm text-center italic">
                    "Winter is Coming"
                  </p>
                  <p className="text-amber-500 text-xs text-center mt-2" style={{ fontFamily: "Cinzel, serif" }}>
                    House Developer
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Import Cinzel font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
      `}</style>
    </>
  );
};