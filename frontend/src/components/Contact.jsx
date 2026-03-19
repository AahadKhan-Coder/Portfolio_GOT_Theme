import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ChapterBreak = () => (
  <div className="flex items-center gap-4 my-2">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,#c9a84c55)' }} />
    <svg viewBox="0 0 60 20" className="w-16 opacity-60" fill="none">
      <path d="M2 10 Q15 2 30 10 Q45 18 58 10" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
      <circle cx="30" cy="10" r="2.5" fill="#c9a84c" />
      <circle cx="2"  cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
      <circle cx="58" cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
    </svg>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#c9a84c55,transparent)' }} />
  </div>
);

/* Raven SVG for submit button */
const RavenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 C8 2 4 5 4 9 C4 13 7 15 7 15 L3 22 L10 18 C11 19 12 20 14 20 C18 20 22 17 22 13 C22 9 20 7 18 6 C17 4 15 2 12 2Z" />
    <path d="M12 2 L14 8 L10 7Z" />
    <circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" />
  </svg>
);

/* Animated ink field */
const InkField = ({ label, name, value, onChange, type = 'text', placeholder, rows }) => {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? 'textarea' : 'input';
  return (
    <div className="relative">
      <label className="block text-[10px] tracking-[0.3em] uppercase mb-2"
        style={{ fontFamily:'Cinzel,serif', color: focused ? '#e8c96a' : '#c9a84c77', transition:'color 0.3s' }}>
        {label}
      </label>
      <div className="relative">
        <Tag
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-transparent outline-none resize-none"
          style={{
            fontFamily:'Cormorant Garamond,Georgia,serif',
            fontSize:'1.05rem',
            color:'#d1b577',
            padding:'10px 12px',
            border:'1px solid',
            borderColor: focused ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.18)',
            background: focused ? 'rgba(201,168,76,0.04)' : 'rgba(0,0,0,0.2)',
            transition:'all 0.3s ease',
            boxShadow: focused ? 'inset 0 0 20px rgba(201,168,76,0.05), 0 0 12px rgba(201,168,76,0.08)' : 'none',
          }}
        />
        {/* Focus underline ink-draw */}
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{ background:'linear-gradient(90deg,#c9a84c,#fde68a,#c9a84c)' }}
          initial={{ width: 0 }}
          animate={{ width: focused ? '100%' : '0%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
};

/* Contact sigil tile */
const SigilTile = ({ href, label, value, icon: Icon, external }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3 }}
      className="flex items-center gap-4 p-4 rounded-sm"
      style={{
        background: hovered ? 'rgba(201,168,76,0.07)' : 'rgba(201,168,76,0.03)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)'}`,
        boxShadow: hovered ? '0 4px 20px rgba(140,50,6,0.18)' : 'none',
        transition:'all 0.3s ease',
        textDecoration:'none',
      }}
    >
      {/* Sigil hex */}
      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
          <polygon points="20,2 38,11 38,29 20,38 2,29 2,11"
            fill={hovered ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.06)'}
            stroke="#c9a84c" strokeWidth={hovered ? '1.2' : '0.8'}
            style={{ transition:'all 0.3s' }} />
        </svg>
        <Icon className="w-4 h-4 relative z-10" style={{ color:'#c9a84c' }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] tracking-[0.3em] uppercase mb-0.5"
          style={{ fontFamily:'Cinzel,serif', color:'#c9a84c66' }}>{label}</p>
        <p className="text-sm font-semibold truncate"
          style={{ fontFamily:'Cinzel,serif', color:'#e8c96a', letterSpacing:'0.04em' }}>{value}</p>
      </div>
      <motion.div animate={{ x: hovered ? 0 : -4, opacity: hovered ? 1 : 0 }} transition={{ duration:0.2 }}>
        <Send className="w-3.5 h-3.5" style={{ color:'#c9a84c' }} />
      </motion.div>
    </motion.a>
  );
};

const CONTACT_LINKS = [
  { href:'mailto:aahadkhan2715@gmail.com', label:'Send Raven', value:'aahadkhan2715@gmail.com', icon: Mail, external:false },
  { href:'https://in.linkedin.com/in/aahad-khan-06bb39348', label:'LinkedIn Realm', value:'Aahad Khan', icon: Linkedin, external:true },
  { href:'https://github.com/AahadKhan-Coder', label:'GitHub Fortress', value:'AahadKhan-Coder', icon: Github, external:true },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) { setStatus('error'); return; }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name:'', email:'', message:'' });
      setTimeout(() => setStatus(null), 5000);
    }, 1600);
  };

  return (
    <section id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 overflow-hidden"
      style={{ background:'#060402' }}>

      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 opacity-[0.055]"
        style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")` }} />
      {/* Quill-feather lattice */}
      <div className="absolute inset-0 opacity-[0.028]"
        style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'><ellipse cx='28' cy='28' rx='20' ry='10' fill='none' stroke='#c9a84c' stroke-width='0.6'/><line x1='8' y1='28' x2='48' y2='28' stroke='#c9a84c' stroke-width='0.4'/></svg>`)}")`, backgroundSize:'56px 56px' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background:'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(100,35,4,0.12) 0%, transparent 65%)' }} />
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background:'linear-gradient(to bottom,#060402,transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background:'linear-gradient(to top,#060402,transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        {/* ── Header ── */}
        <motion.div initial={{ opacity:0, y:-24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.8 }} className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase font-mono mb-4"
            style={{ color:'#c9a84c99' }}>Chapter V · The Raven</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
            style={{
              fontFamily:"'Cinzel Decorative','Cinzel',serif",
              background:'linear-gradient(160deg,#fde68a 0%,#c9a84c 40%,#92661a 80%,#fcd34d 100%)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              filter:'drop-shadow(0 2px 18px rgba(201,168,76,0.3))',
            }}>
            Send a Raven
          </h2>
          <p className="text-lg italic mb-8"
            style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#d1b577aa', letterSpacing:'0.06em' }}>
            Let us build kingdoms together
          </p>
          <ChapterBreak />
        </motion.div>

        {/* ── Two columns ── */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">

          {/* LEFT: Sigil tiles + availability */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.7 }} className="space-y-4">

            {/* Availability badge */}
            <div className="p-5 rounded-sm mb-2"
              style={{
                background:'linear-gradient(135deg,rgba(15,10,3,0.97),rgba(25,17,6,0.95))',
                border:'1px solid rgba(201,168,76,0.2)',
              }}>
              <div className="flex items-center gap-3 mb-3">
                {/* Pulse rune */}
                <div className="relative w-3 h-3">
                  <span className="absolute inset-0 rounded-full animate-ping opacity-60"
                    style={{ background:'#4ade80' }} />
                  <span className="relative block w-3 h-3 rounded-full" style={{ background:'#22c55e' }} />
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily:'Cinzel,serif', color:'#22c55e', letterSpacing:'0.25em' }}>
                  Available for Hire
                </span>
              </div>
              <p className="text-sm leading-relaxed"
                style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#8a7452', fontSize:'0.95rem', lineHeight:1.8 }}>
                Seeking opportunities in Full-Stack Development, MERN projects, and collaborative ventures. Open to freelance work, full-time positions, and bold projects that push the craft.
              </p>
            </div>

            {/* Contact sigil links */}
            <div className="space-y-2">
              {CONTACT_LINKS.map((link, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ duration:0.5, delay:i*0.1 }}>
                  <SigilTile {...link} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="relative p-7 md:p-9 rounded-sm"
              style={{
                background:'linear-gradient(145deg,rgba(18,12,4,0.97),rgba(10,7,2,0.98))',
                border:'1px solid rgba(201,168,76,0.18)',
                boxShadow:'inset 0 0 50px rgba(0,0,0,0.5)',
              }}>
              {/* Corner brackets */}
              {[['top-0 left-0','border-t border-l'],['top-0 right-0','border-t border-r'],
                ['bottom-0 left-0','border-b border-l'],['bottom-0 right-0','border-b border-r']
              ].map(([pos,brd],i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5 ${brd} border-amber-500/35`} />
              ))}

              <p className="text-[9px] tracking-[0.4em] uppercase mb-5"
                style={{ fontFamily:'Cinzel,serif', color:'#c9a84c55' }}>✦ Write Your Missive ✦</p>

              <div className="space-y-5">
                <InkField label="Your Name" name="name" value={formData.name}
                  onChange={handleChange} placeholder="Lord of…" />
                <InkField label="Your Email" name="email" value={formData.email}
                  onChange={handleChange} type="email" placeholder="raven@castle.com" />
                <InkField label="Your Message" name="message" value={formData.message}
                  onChange={handleChange} placeholder="Speak your purpose, traveller…" rows={6} />

                {/* Submit */}
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-bold relative overflow-hidden"
                  style={{
                    fontFamily:'Cinzel,serif', letterSpacing:'0.2em',
                    background: status === 'sending'
                      ? 'rgba(201,168,76,0.3)'
                      : 'linear-gradient(135deg,#c9a84c,#a07828)',
                    color: status === 'sending' ? '#c9a84c' : '#0a0704',
                    boxShadow: status === 'sending' ? 'none' : '0 0 24px rgba(201,168,76,0.35)',
                    border:'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition:'all 0.3s',
                  }}>
                  {status === 'sending' ? (
                    <>
                      <motion.div className="w-4 h-4 rounded-full border-2 border-amber-500/40 border-t-amber-400"
                        animate={{ rotate:360 }} transition={{ duration:0.9, repeat:Infinity, ease:'linear' }} />
                      Dispatching Raven…
                    </>
                  ) : (
                    <>
                      <RavenIcon />
                      Send the Raven
                      {/* Shimmer */}
                      <motion.div className="absolute inset-0 bg-white/10"
                        initial={{ x:'-100%' }} whileHover={{ x:'100%' }}
                        transition={{ duration:0.45 }} />
                    </>
                  )}
                </motion.button>

                {/* Status messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
                      exit={{ opacity:0 }}
                      className="flex items-center gap-3 p-4 rounded-sm text-sm"
                      style={{ background:'rgba(34,197,94,0.07)', border:'1px solid rgba(34,197,94,0.3)', color:'#86efac',
                               fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'1rem' }}>
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color:'#22c55e' }} />
                      Your raven has taken flight. I shall respond swiftly.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
                      exit={{ opacity:0 }}
                      className="flex items-center gap-3 p-4 rounded-sm text-sm"
                      style={{ background:'rgba(239,68,68,0.07)', border:'1px solid rgba(239,68,68,0.3)', color:'#fca5a5',
                               fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'1rem' }}>
                      <AlertCircle className="w-4 h-4 shrink-0" style={{ color:'#ef4444' }} />
                      All fields must be filled before the raven may depart.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom ornament */}
        <motion.div initial={{ scaleX:0 }} whileInView={{ scaleX:1 }}
          viewport={{ once:true }} transition={{ duration:1.5, delay:0.3 }} className="mt-14">
          <ChapterBreak />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
      `}</style>
    </section>
  );
};