import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const LINKS = [
  { name: 'The Chronicles', to: 'about' },
  { name: 'Arsenal',        to: 'skills' },
  { name: 'Codex',          to: 'projects' },
  { name: 'Send a Raven',   to: 'contact' },
];

const SOCIALS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/AahadKhan-Coder',             external: true },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://in.linkedin.com/in/aahad-khan-06bb39348', external: true },
  { icon: Mail,     label: 'Email',    href: 'mailto:aahadkhan2715@gmail.com',                  external: false },
];

/* House crest — same language as Hero */
const HouseCrest = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_0_18px_rgba(201,168,76,0.4)]">
    <polygon points="50,4 96,28 96,72 50,96 4,72 4,28"
      fill="none" stroke="#c9a84c" strokeWidth="1.6" />
    <polygon points="50,14 86,32 86,68 50,86 14,68 14,32"
      fill="none" stroke="#c9a84c" strokeWidth="0.7" opacity="0.4" />
    <circle cx="50" cy="50" r="18" fill="#06030100" stroke="#c9a84c" strokeWidth="1.3" />
    <path d="M50 68 Q38 58 40 46 Q44 36 50 32 Q56 36 60 46 Q62 58 50 68Z"
      fill="none" stroke="#e07b2a" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="50" cy="50" r="2.5" fill="#f59e0b" opacity="0.9" />
    {[[50,4],[96,28],[96,72],[50,96],[4,72],[4,28]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="2.4" fill="#c9a84c" />
    ))}
  </svg>
);

/* Hex sigil social button */
const SigilLink = ({ icon: Icon, label, href, external }) => (
  <motion.a
    href={href}
    target={external ? '_blank' : '_self'}
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -4, scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="relative w-11 h-11 flex items-center justify-center"
  >
    <svg viewBox="0 0 44 44" className="absolute inset-0 w-full h-full">
      <polygon points="22,2 42,12 42,32 22,42 2,32 2,12"
        fill="rgba(201,168,76,0.07)" stroke="#c9a84c" strokeWidth="1"
        style={{ transition:'all 0.25s' }} />
    </svg>
    <Icon className="w-4 h-4 relative z-10" style={{ color:'#c9a84c' }} />
  </motion.a>
);

const ChapterBreak = () => (
  <div className="flex items-center gap-4">
    <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,transparent,#c9a84c44)' }} />
    <svg viewBox="0 0 60 20" className="w-14 opacity-50" fill="none">
      <path d="M2 10 Q15 2 30 10 Q45 18 58 10" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
      <circle cx="30" cy="10" r="2.5" fill="#c9a84c" />
    </svg>
    <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,#c9a84c44,transparent)' }} />
  </div>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden"
      style={{ background:'#050301', borderTop:'1px solid rgba(201,168,76,0.18)' }}>

      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 opacity-[0.045]"
        style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")` }} />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><polygon points='25,2 48,14 48,36 25,48 2,36 2,14' fill='none' stroke='#c9a84c' stroke-width='0.5'/></svg>`)}")`, backgroundSize:'50px 50px' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(100,35,4,0.1) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-8">

        {/* ── Central crest block ── */}
        <motion.div
          initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <HouseCrest />
          <div className="mt-5 mb-1">
            <h3 className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily:"'Cinzel Decorative','Cinzel',serif",
                background:'linear-gradient(160deg,#fde68a 0%,#c9a84c 50%,#92661a 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
              Abdul Aahad
            </h3>
          </div>
          <p className="text-sm tracking-widest mb-5"
            style={{ fontFamily:'Cinzel,serif', color:'#c9a84c77', letterSpacing:'0.2em' }}>
            of House Developer
          </p>
          {/* Social sigils */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(s => <SigilLink key={s.label} {...s} />)}
          </div>
        </motion.div>

        <ChapterBreak />

        {/* ── Nav + info row ── */}
        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
          className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-10"
        >
          {/* Nav links as chapter refs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {LINKS.map((link, i) => (
              <motion.span key={link.to}
                initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.06 }}>
                <Link to={link.to} smooth duration={600} offset={-80}
                  className="text-xs tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300"
                  style={{ fontFamily:'Cinzel,serif', color:'#7a6640' }}
                  activeClass="active"
                  onMouseEnter={e => e.target.style.color='#e8c96a'}
                  onMouseLeave={e => e.target.style.color='#7a6640'}
                >
                  {link.name}
                </Link>
              </motion.span>
            ))}
          </div>

          {/* Availability pill */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-sm"
            style={{ border:'1px solid rgba(201,168,76,0.18)', background:'rgba(201,168,76,0.04)' }}>
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background:'#22c55e' }} />
              <span className="relative inline-flex rounded-full w-2 h-2" style={{ background:'#22c55e' }} />
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily:'Cinzel,serif', color:'#22c55e99' }}>
              Open to Hire
            </span>
          </div>

          {/* Location + email */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs tracking-wider" style={{ fontFamily:'Cinzel,serif', color:'#c9a84c77' }}>
              Delhi, India
            </p>
            <p className="text-xs" style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#7a6640', letterSpacing:'0.05em' }}>
              aahadkhan2715@gmail.com
            </p>
          </div>
        </motion.div>

        <ChapterBreak />

        {/* ── Colophon ── */}
        <motion.div
          initial={{ opacity:0 }} whileInView={{ opacity:1 }}
          viewport={{ once:true }} transition={{ duration:0.7, delay:0.2 }}
          className="pt-8 text-center space-y-3"
        >
          {/* Manuscript closing quote */}
          <p className="text-sm italic max-w-lg mx-auto"
            style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#5a4a2e', lineHeight:1.8 }}>
            "Here ends the chronicle of Abdul Aahad — Maester of the MERN realm,
            keeper of APIs, builder of kingdoms that endure."
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily:'Cinzel,serif', color:'#3a2e1a' }}>
            © {year} Abdul Aahad · All Rights Reserved · House Developer
          </p>
        </motion.div>
      </div>

      {/* Bottom gold rule */}
      <div className="relative h-px w-full" style={{ background:'linear-gradient(90deg,transparent,#c9a84c,transparent)' }}>
        <div className="absolute left-4 -top-1 w-2 h-2 rotate-45" style={{ background:'#c9a84c' }} />
        <div className="absolute right-4 -top-1 w-2 h-2 rotate-45" style={{ background:'#c9a84c' }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
      `}</style>
    </footer>
  );
};