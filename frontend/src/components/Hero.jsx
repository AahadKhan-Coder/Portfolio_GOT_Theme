import React, { useState, useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ROLES = [
  'Full-Stack Maester of the MERN Realm',
  'Keeper of React & Node.js',
  'Lord Commander of APIs',
  'Architect of Scalable Kingdoms',
];

/* Tiny SVG rune used as repeating bg glyph */
const RUNE_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <g stroke="#c9a84c" stroke-width="0.6" fill="none" opacity="0.18">
    <polygon points="40,6 74,26 74,66 40,86 6,66 6,26"/>
    <circle cx="40" cy="40" r="16"/>
    <line x1="40" y1="6" x2="40" y2="86"/>
    <line x1="6" y1="26" x2="74" y2="66"/>
    <line x1="6" y1="66" x2="74" y2="26"/>
  </g>
</svg>`);

/* Corner filigree — top-left */
const FiligreeCorner = ({ flip = false, flipY = false }) => (
  <svg
    viewBox="0 0 120 120"
    className="absolute w-28 md:w-40 opacity-40 pointer-events-none"
    style={{
      transform: `scaleX(${flip ? -1 : 1}) scaleY(${flipY ? -1 : 1})`,
    }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4 L4 60 Q4 116 60 116 L116 116" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 4 L50 4" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M4 4 L4 50" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="4" cy="4" r="4" fill="#c9a84c" />
    <circle cx="60" cy="60" r="3" fill="none" stroke="#c9a84c" strokeWidth="1" />
    <path d="M20 4 Q20 20 4 20" stroke="#c9a84c" strokeWidth="0.7" opacity="0.6" />
    <path d="M36 4 Q36 36 4 36" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
    <circle cx="20" cy="4" r="2" fill="#c9a84c" opacity="0.6" />
    <circle cx="36" cy="4" r="1.5" fill="#c9a84c" opacity="0.4" />
  </svg>
);

/* Animated ember particle */
const Ember = ({ style }) => (
  <motion.span
    className="absolute rounded-full pointer-events-none"
    style={{ width: 3, height: 3, background: '#f59e0b', ...style }}
    animate={{ y: [0, -120], opacity: [0.9, 0], scale: [1, 0.2] }}
    transition={{ duration: style.duration, repeat: Infinity, delay: style.delay, ease: 'easeOut' }}
  />
);

export const Hero = () => {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rxRaw = useTransform(my, [-300, 300], [6, -6]);
  const ryRaw = useTransform(mx, [-500, 500], [-8, 8]);
  const rx = useSpring(rxRaw, { stiffness: 60, damping: 20 });
  const ry = useSpring(ryRaw, { stiffness: 60, damping: 20 });

  const [embers] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      left: `${8 + Math.random() * 84}%`,
      bottom: `${Math.random() * 30}%`,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 4,
    }))
  );

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };

  const scrollDown = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden select-none"
      style={{ background: '#0a0704' }}
    >
      {/* ── Layered background ── */}
      {/* 1. Vellum grain noise */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)' opacity='1'/></svg>`
          )}")`,
        }}
      />
      {/* 2. Rune grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,${RUNE_SVG}")`,
          backgroundSize: '80px 80px',
          opacity: 0.35,
        }}
      />
      {/* 3. Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 10%, rgba(10,7,4,0.65) 70%, #0a0704 100%)',
        }}
      />
      {/* 4. Forge-glow from below */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(180,60,10,0.28) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      {/* 5. Subtle amber top halo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(201,168,76,0.09) 0%, transparent 70%)',
        }}
      />

      {/* ── Corner ornaments ── */}
      <div className="absolute top-0 left-0"><FiligreeCorner /></div>
      <div className="absolute top-0 right-0"><FiligreeCorner flip /></div>
      <div className="absolute bottom-0 left-0"><FiligreeCorner flipY /></div>
      <div className="absolute bottom-0 right-0"><FiligreeCorner flip flipY /></div>

      {/* ── Ember particles ── */}
      {embers.map((e, i) => (
        <Ember key={i} style={e} />
      ))}

      {/* ── Horizontal rule lines ── */}
      <motion.div
        className="absolute left-8 right-8 h-px pointer-events-none"
        style={{ top: '14%', background: 'linear-gradient(90deg,transparent,#c9a84c55,transparent)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      />
      <motion.div
        className="absolute left-8 right-8 h-px pointer-events-none"
        style={{ bottom: '14%', background: 'linear-gradient(90deg,transparent,#c9a84c55,transparent)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* ── Main content card (parallax) ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      >
        {/* House crest / seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 80 }}
          className="mb-7 relative"
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_18px_rgba(201,168,76,0.55)]">
            <polygon points="50,4 96,28 96,72 50,96 4,72 4,28" fill="none" stroke="#c9a84c" strokeWidth="1.6" />
            <polygon points="50,14 86,32 86,68 50,86 14,68 14,32" fill="none" stroke="#c9a84c" strokeWidth="0.7" opacity="0.5" />
            <circle cx="50" cy="50" r="18" fill="#0a0704" stroke="#c9a84c" strokeWidth="1.4" />
            {/* Stylized dragon flame */}
            <path d="M50 68 Q38 58 40 46 Q44 36 50 32 Q56 36 60 46 Q62 58 50 68Z"
              fill="none" stroke="#e07b2a" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M44 60 Q42 52 46 46" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            <path d="M56 60 Q58 52 54 46" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
            <circle cx="50" cy="50" r="2.5" fill="#f59e0b" opacity="0.9" />
            {/* Corner dots */}
            {[[50,4],[96,28],[96,72],[50,96],[4,72],[4,28]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2.4" fill="#c9a84c" />
            ))}
          </svg>
        </motion.div>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.4, delay: 0.5 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-amber-500/70 mb-4 font-mono"
        >
          House Developer · Est. MMXXIV
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="relative mb-3"
          style={{ fontFamily: "'Cinzel Decorative', 'Cinzel', serif" }}
        >
          {/* Glow layer */}
          <span
            aria-hidden="true"
            className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold text-amber-400 blur-2xl opacity-20 pointer-events-none"
          >
            Abdul Aahad
          </span>
          <span
            className="block text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{
              background: 'linear-gradient(160deg, #fde68a 0%, #c9a84c 40%, #92661a 80%, #fcd34d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 18px rgba(201,168,76,0.35))',
            }}
          >
            Abdul Aahad
          </span>
        </motion.h1>

        {/* Divider with rune dot */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-24 md:w-40 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
          <div className="w-2 h-2 rotate-45 bg-amber-500/80" />
          <div className="w-24 md:w-40 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
        </motion.div>

        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-6"
        >
          <span
            className="px-5 py-2 text-sm md:text-base font-semibold tracking-widest uppercase"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#e8c96a',
              border: '1px solid rgba(201,168,76,0.25)',
              background: 'linear-gradient(90deg, rgba(201,168,76,0.05), rgba(201,168,76,0.12), rgba(201,168,76,0.05))',
              backdropFilter: 'blur(6px)',
              letterSpacing: '0.18em',
            }}
          >
            of House Developer
          </span>
        </motion.div>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="h-10 flex items-center mb-10"
        >
          <ReactTyped
            className="text-lg md:text-2xl font-light"
            style={{
              color: '#d1b577',
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
            }}
            strings={ROLES}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.9 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          {/* Primary */}
          <motion.button
            onClick={scrollDown}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3 overflow-hidden group"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              color: '#0a0704',
              background: 'linear-gradient(135deg, #c9a84c, #e8c96a, #a07828)',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 28px rgba(201,168,76,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            <span className="relative z-10 font-bold tracking-[0.22em] uppercase">Enter My Realm</span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.45 }}
            />
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3 overflow-hidden"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              color: '#c9a84c',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.45)',
              cursor: 'pointer',
              boxShadow: '0 0 16px rgba(201,168,76,0.1)',
            }}
          >
            <span className="font-semibold tracking-[0.22em] uppercase">View Scrolls</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ delay: 3, duration: 2.5, repeat: Infinity }}
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <span
          className="text-[9px] tracking-[0.3em] uppercase"
          style={{ color: '#c9a84c99', fontFamily: 'Cinzel, serif' }}
        >
          Scroll
        </span>
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="#c9a84c" strokeWidth="1.2" opacity="0.45" />
          <motion.circle
            cx="9" cy="8" r="2.5" fill="#c9a84c"
            animate={{ cy: [8, 18, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* ── Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
      `}</style>
    </section>
  );
};