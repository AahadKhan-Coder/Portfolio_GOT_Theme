import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sword, Crown, Scroll, Code, Zap, Award, Shield } from 'lucide-react';

/* ── Animated counter ── */
const Counter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const step = Math.ceil(end / 28);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Rune ring SVG for stat cards ── */
const RuneRing = ({ size = 80, color = '#c9a84c', progress = 1 }) => {
  const r = 34;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className="absolute inset-0 opacity-25">
      <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 6" />
      <circle cx="40" cy="40" r="28" fill="none" stroke={color} strokeWidth="0.5" opacity="0.5" />
      {[0,60,120,180,240,300].map((deg,i) => (
        <circle key={i} cx={40 + 34 * Math.cos((deg-90)*Math.PI/180)}
          cy={40 + 34 * Math.sin((deg-90)*Math.PI/180)} r="1.5" fill={color} />
      ))}
    </svg>
  );
};

/* ── Wax seal SVG ── */
const WaxSeal = () => (
  <svg viewBox="0 0 64 64" className="w-16 h-16 drop-shadow-[0_4px_12px_rgba(180,60,10,0.6)]">
    <circle cx="32" cy="32" r="30" fill="#8B1A0A" />
    <circle cx="32" cy="32" r="26" fill="#A8200D" />
    <polygon points="32,10 36,24 50,24 39,32 43,46 32,38 21,46 25,32 14,24 28,24"
      fill="none" stroke="#e8c96a" strokeWidth="1.2" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="4" fill="#e8c96a" opacity="0.9" />
    <circle cx="32" cy="32" r="29" fill="none" stroke="#e8c96a" strokeWidth="0.6" opacity="0.4" />
  </svg>
);

/* ── Chapter ornament ── */
const ChapterBreak = () => (
  <div className="flex items-center gap-4 my-2">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,#c9a84c55)' }} />
    <svg viewBox="0 0 60 20" className="w-16 opacity-60" fill="none">
      <path d="M2 10 Q15 2 30 10 Q45 18 58 10" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
      <circle cx="30" cy="10" r="2.5" fill="#c9a84c" />
      <circle cx="2" cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
      <circle cx="58" cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
    </svg>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#c9a84c55,transparent)' }} />
  </div>
);

const STATS = [
  { icon: Code,   label: 'Projects Completed',    value: '10', suffix: '+' },
  { icon: Zap,    label: 'Technologies Mastered',  value: '20', suffix: '+' },
  { icon: Award,  label: 'Years of Experience',    value: '1',  suffix: '+' },
  { icon: Shield, label: 'Happy Clients',          value: '10', suffix: '+' },
];

const ACHIEVEMENTS = [
  {
    icon: Sword,
    title: 'Full-Stack Warrior',
    subtitle: 'MERN Stack Development',
    body: 'Battle-hardened across React, Node, Express, and MongoDB — building fortresses of code that scale under siege.',
    year: 'MMXXIII',
  },
  {
    icon: Crown,
    title: 'API Architect',
    subtitle: 'RESTful Kingdom Builder',
    body: 'Designs secure, documented REST APIs with JWT authentication and role-based access — the law of the realm.',
    year: 'MMXXIII',
  },
  {
    icon: Scroll,
    title: 'Code Maester',
    subtitle: 'Technical Peer Mentor',
    body: 'Guiding fellow developers since 2023 through Git workflows, code review, and the ancient arts of debugging.',
    year: 'MMXXIV',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

export const About = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 overflow-hidden"
      style={{ background: '#080604' }}
    >
      {/* ── Layered backgrounds ── */}
      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")` }} />
      {/* Subtle cross-hatch */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#c9a84c 0,#c9a84c 1px,transparent 1px,transparent 60px)' }} />
      {/* Central forge glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(140,50,6,0.12) 0%, transparent 70%)' }} />
      {/* Top vignette */}
      <div className="absolute top-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #080604, transparent)' }} />
      {/* Bottom vignette */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #080604, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* ── Section header ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase font-mono mb-4"
            style={{ color: '#c9a84c99' }}>
            Chapter II · The Chronicles
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
            style={{
              fontFamily: "'Cinzel Decorative','Cinzel',serif",
              background: 'linear-gradient(160deg,#fde68a 0%,#c9a84c 40%,#92661a 80%,#fcd34d 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 2px 18px rgba(201,168,76,0.3))',
            }}
          >
            The Chronicles
          </h2>
          <p className="text-lg mb-8 italic"
            style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', color: '#d1b577aa', letterSpacing:'0.06em' }}>
            of Abdul Aahad — Full-Stack Maester
          </p>
          <ChapterBreak />
        </motion.div>

        {/* ── Main two-column layout ── */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start mb-20">

          {/* LEFT: Manuscript narrative */}
          <motion.div {...fadeUp(0.1)} className="relative">
            {/* Parchment card */}
            <div
              className="relative p-9 rounded-sm"
              style={{
                background: 'linear-gradient(145deg, rgba(25,18,8,0.95), rgba(14,10,4,0.98))',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: '0 0 60px rgba(140,50,6,0.12), inset 0 0 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Corner L-brackets */}
              {[['top-0 left-0','border-t-2 border-l-2'],['top-0 right-0','border-t-2 border-r-2'],
                ['bottom-0 left-0','border-b-2 border-l-2'],['bottom-0 right-0','border-b-2 border-r-2']
              ].map(([pos, borders], i) => (
                <div key={i} className={`absolute ${pos} w-5 h-5 ${borders} border-amber-500/50`} />
              ))}

              {/* Drop-cap initial */}
              <div className="float-left mr-4 mb-2 leading-none select-none"
                style={{
                  fontFamily: "'Cinzel Decorative','Cinzel',serif",
                  fontSize: '5.5rem', lineHeight: 1,
                  background: 'linear-gradient(160deg,#fde68a,#a07828)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.4))',
                }}>I</div>

              <div className="space-y-5 text-base leading-8"
                style={{ fontFamily: 'Cormorant Garamond,Georgia,serif', color: '#c9b99a', fontSize:'1.05rem' }}>
                <p>
                  n the realm of{' '}
                  <span className="font-semibold" style={{ color: '#e8c96a' }}>Delhi, India</span>,
                  I forged my path as a{' '}
                  <span className="font-semibold" style={{ color: '#e8c96a' }}>Full-Stack MERN Developer</span>,
                  wielding React.js, Node.js, Express.js, and MongoDB to build scalable kingdoms of code.
                </p>
                <p>
                  Trained in the arts of{' '}
                  <span className="font-semibold" style={{ color: '#e8c96a' }}>JWT authentication</span>,{' '}
                  <span className="font-semibold" style={{ color: '#e8c96a' }}>REST APIs</span>, and
                  responsive design — I craft web applications that endure both time and siege.
                </p>
                <p>
                  As a{' '}
                  <span className="font-semibold" style={{ color: '#e8c96a' }}>Technical Peer Mentor</span>{' '}
                  since 2023, I share the sacred knowledge of web development, guiding fellow developers
                  through the treacherous paths of Git workflows and full-stack mastery.
                </p>

                <ChapterBreak />

                {/* Parchment quote */}
                <div className="relative mt-6 pl-6 pr-4 py-4"
                  style={{
                    borderLeft: '3px solid #c9a84c',
                    background: 'rgba(201,168,76,0.04)',
                  }}>
                  <div className="absolute -top-3 -left-3">
                    <WaxSeal />
                  </div>
                  <p className="italic text-base pl-10"
                    style={{ fontFamily:'Cormorant Garamond,serif', color:'#d1b577', lineHeight:1.8 }}>
                    "Passionate about delivering high-quality solutions and continuously learning
                    emerging technologies in the ever-evolving realm of web development."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Vertical timeline */}
          <motion.div {...fadeUp(0.2)} className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-4 bottom-4 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c55, #c9a84c55, transparent)' }} />

            <div className="space-y-6">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  className="relative pl-14 cursor-default"
                >
                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-0 top-4 w-10 h-10 rounded-full flex items-center justify-center"
                    animate={{ boxShadow: active === i ? '0 0 20px rgba(201,168,76,0.6)' : '0 0 0px transparent' }}
                    style={{
                      background: 'linear-gradient(135deg, #1a1005, #0d0a04)',
                      border: `1px solid ${active === i ? '#c9a84c' : '#c9a84c55'}`,
                      transition: 'border-color 0.3s',
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: '#c9a84c' }} />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    animate={{ x: active === i ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 rounded-sm"
                    style={{
                      background: active === i
                        ? 'linear-gradient(135deg, rgba(35,24,8,0.98), rgba(20,14,4,0.98))'
                        : 'linear-gradient(135deg, rgba(22,15,5,0.9), rgba(12,8,2,0.9))',
                      border: `1px solid ${active === i ? 'rgba(201,168,76,0.35)' : 'rgba(201,168,76,0.12)'}`,
                      boxShadow: active === i ? '0 4px 30px rgba(140,50,6,0.2)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-base"
                        style={{ fontFamily:'Cinzel,serif', color:'#e8c96a', letterSpacing:'0.06em' }}>
                        {item.title}
                      </h4>
                      <span className="text-[9px] tracking-widest ml-2 mt-1 shrink-0"
                        style={{ fontFamily:'Cinzel,serif', color:'#c9a84c66' }}>
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs tracking-wider mb-2" style={{ color:'#c9a84caa', fontFamily:'Cinzel,serif' }}>
                      {item.subtitle}
                    </p>
                    <p className="text-sm leading-relaxed"
                      style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#a08d6e', lineHeight:1.75 }}>
                      {item.body}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div {...fadeUp(0.3)}>
          <div
            className="relative rounded-sm p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(18,12,4,0.95), rgba(10,7,2,0.98))',
              border: '1px solid rgba(201,168,76,0.15)',
              boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(140,50,6,0.08)',
            }}
          >
            {/* Top chapter label */}
            <p className="text-center text-[9px] tracking-[0.45em] uppercase mb-8"
              style={{ fontFamily:'Cinzel,serif', color:'#c9a84c66' }}>
              ✦ The Numbers of the Realm ✦
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Rune ring background */}
                  <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                    <RuneRing />
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))',
                        border: '1px solid rgba(201,168,76,0.3)',
                      }}
                    >
                      <stat.icon className="w-5 h-5" style={{ color: '#c9a84c' }} />
                    </div>
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-bold mb-1 tabular-nums"
                    style={{
                      fontFamily: 'Cinzel,serif',
                      background: 'linear-gradient(160deg,#fde68a,#c9a84c)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.3))',
                    }}
                  >
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs tracking-wider leading-snug"
                    style={{ fontFamily:'Cinzel,serif', color:'#8a7452', letterSpacing:'0.1em' }}>
                    {stat.label}
                  </p>
                  {/* Separator */}
                  {i < STATS.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
                      style={{ background:'linear-gradient(to bottom,transparent,#c9a84c33,transparent)' }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-16"
        >
          <ChapterBreak />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
      `}</style>
    </section>
  );
};