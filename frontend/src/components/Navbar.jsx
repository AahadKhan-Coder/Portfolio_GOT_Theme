import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Hero",     to: 'hero',     roman: 'I'   },
  { name: 'About',    to: 'about',    roman: 'II'  },
  { name: 'Skills',   to: 'skills',   roman: 'III' },
  { name: 'Projects', to: 'projects', roman: 'IV'  },
  { name: 'Contact',  to: 'contact',  roman: 'V'   },
];

/* Compact hex sigil for logo */
const LogoSigil = () => (
  <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0">
    <polygon points="18,2 34,10 34,26 18,34 2,26 2,10"
      fill="none" stroke="#c9a84c" strokeWidth="1.4" />
    <polygon points="18,8 28,13 28,23 18,28 8,23 8,13"
      fill="none" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4" />
    {/* Flame centre */}
    <path d="M18 26 Q13 22 14 17 Q16 13 18 11 Q20 13 22 17 Q23 22 18 26Z"
      fill="none" stroke="#e07b2a" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="1.8" fill="#f59e0b" opacity="0.9" />
    {[[18,2],[34,10],[34,26],[18,34],[2,26],[2,10]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="1.6" fill="#c9a84c" />
    ))}
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('hero');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on outside click */
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled
            ? 'rgba(6,4,2,0.92)'
            : 'rgba(6,4,2,0.55)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled
            ? '1px solid rgba(201,168,76,0.22)'
            : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link to="hero" smooth duration={600} className="cursor-pointer">
            <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2.5">
              <LogoSigil />
              <span
                className="text-xl font-bold hidden sm:block"
                style={{
                  fontFamily:"'Cinzel Decorative','Cinzel',serif",
                  background:'linear-gradient(135deg,#fde68a,#c9a84c,#92661a)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                  letterSpacing:'0.04em',
                }}
              >
                Abdul Aahad
              </span>
              <span
                className="text-lg font-bold sm:hidden"
                style={{
                  fontFamily:"'Cinzel','serif'",
                  background:'linear-gradient(135deg,#fde68a,#c9a84c)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                }}
              >
                Abdul Aahad
              </span>
            </motion.div>
          </Link>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => {
              const isActive = active === item.to;
              return (
                <motion.li key={item.to}
                  initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }}
                  transition={{ delay: i * 0.08 }}>
                  <Link
                    to={item.to} smooth duration={600} offset={-80} spy
                    onSetActive={() => setActive(item.to)}
                    className="relative flex flex-col items-center px-4 py-2 cursor-pointer group"
                  >
                    {/* Roman numeral */}
                    <span className="text-[8px] tracking-widest mb-0.5 transition-colors duration-300"
                      style={{
                        fontFamily:'Cinzel,serif',
                        color: isActive ? '#c9a84c' : 'rgba(201,168,76,0.3)',
                      }}>
                      {item.roman}
                    </span>
                    {/* Label */}
                    <span className="text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300"
                      style={{
                        fontFamily:'Cinzel,serif',
                        color: isActive ? '#e8c96a' : '#6b5a3e',
                      }}
                      onMouseEnter={e => { if (!isActive) e.target.style.color='#c9a84c'; }}
                      onMouseLeave={e => { if (!isActive) e.target.style.color='#6b5a3e'; }}
                    >
                      {item.name}
                    </span>
                    {/* Ink-draw underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background:'linear-gradient(90deg,transparent,#c9a84c,transparent)' }}
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </Link>
                </motion.li>
              );
            })}

            {/* CTA hire button */}
            <motion.li
              initial={{ opacity:0 }} animate={{ opacity:1 }}
              transition={{ delay: 0.4 }}>
              <Link to="contact" smooth duration={600} offset={-80}>
                <motion.span
                  whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                  className="ml-3 inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer"
                  style={{
                    fontFamily:'Cinzel,serif',
                    background:'linear-gradient(135deg,#c9a84c,#a07828)',
                    color:'#0a0704',
                    boxShadow:'0 0 14px rgba(201,168,76,0.25)',
                  }}>
                  Hire Me
                </motion.span>
              </Link>
            </motion.li>
          </ul>

          {/* ── Mobile toggle ── */}
          <motion.button
            whileTap={{ scale:0.9 }}
            onClick={e => { e.stopPropagation(); setMenuOpen(v => !v); }}
            className="md:hidden flex items-center justify-center w-9 h-9"
            style={{ border:'1px solid rgba(201,168,76,0.3)', background:'rgba(201,168,76,0.06)' }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.div key="x" initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }} transition={{ duration:0.2 }}>
                    <X className="w-5 h-5" style={{ color:'#c9a84c' }} />
                  </motion.div>
                : <motion.div key="m" initial={{ rotate:90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90, opacity:0 }} transition={{ duration:0.2 }}>
                    <Menu className="w-5 h-5" style={{ color:'#c9a84c' }} />
                  </motion.div>
              }
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Scrolled gold rule */}
        <motion.div className="h-px w-full"
          animate={{ opacity: scrolled ? 1 : 0 }}
          style={{ background:'linear-gradient(90deg,transparent,#c9a84c55,transparent)', transition:'opacity 0.4s' }} />
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background:'rgba(0,0,0,0.65)', backdropFilter:'blur(4px)' }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              key="drawer"
              initial={{ x:'100%' }} animate={{ x:0 }} exit={{ x:'100%' }}
              transition={{ type:'spring', damping:28, stiffness:220 }}
              onClick={e => e.stopPropagation()}
              className="fixed top-16 right-0 bottom-0 w-72 z-40 md:hidden overflow-y-auto"
              style={{
                background:'linear-gradient(160deg,rgba(12,8,3,0.99),rgba(6,4,2,0.99))',
                borderLeft:'1px solid rgba(201,168,76,0.22)',
              }}
            >
              {/* Grain */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")` }} />

              <div className="relative p-7">
                {/* Drawer header */}
                <div className="mb-6 pb-5" style={{ borderBottom:'1px solid rgba(201,168,76,0.15)' }}>
                  <p className="text-[9px] tracking-[0.4em] uppercase"
                    style={{ fontFamily:'Cinzel,serif', color:'#c9a84c66' }}>
                    Navigation · House Developer
                  </p>
                </div>

                {/* Items */}
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = active === item.to;
                    return (
                      <motion.li key={item.to}
                        initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
                        transition={{ delay: i * 0.06 }}>
                        <Link
                          to={item.to} smooth duration={600} offset={-80} spy
                          onSetActive={() => setActive(item.to)}
                          onClick={() => setMenuOpen(false)}
                        >
                          <div className="flex items-center gap-4 px-3 py-3 cursor-pointer transition-all duration-300"
                            style={{
                              borderLeft: `2px solid ${isActive ? '#c9a84c' : 'transparent'}`,
                              background: isActive ? 'rgba(201,168,76,0.07)' : 'transparent',
                            }}>
                            <span className="text-[9px] w-5 text-right shrink-0"
                              style={{ fontFamily:'Cinzel,serif', color:'#c9a84c55' }}>
                              {item.roman}
                            </span>
                            <span className="text-sm font-semibold tracking-[0.12em] uppercase"
                              style={{ fontFamily:'Cinzel,serif', color: isActive ? '#e8c96a' : '#7a6640' }}>
                              {item.name}
                            </span>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Drawer footer */}
                <motion.div
                  initial={{ opacity:0 }} animate={{ opacity:1 }}
                  transition={{ delay:0.35 }}
                  className="mt-10 pt-6 text-center"
                  style={{ borderTop:'1px solid rgba(201,168,76,0.12)' }}>
                  <p className="text-[10px] tracking-[0.25em] uppercase mb-1"
                    style={{ fontFamily:'Cinzel,serif', color:'#c9a84c44' }}>
                    House Developer
                  </p>
                  <p className="text-xs italic"
                    style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#4a3a22' }}>
                    "Building kingdoms with code"
                  </p>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
      `}</style>
    </>
  );
};