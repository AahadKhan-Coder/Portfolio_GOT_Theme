import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Crown, Sword, Shield, ChevronDown } from 'lucide-react';

/* ── Chapter ornament ── */
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

/* ── Project seal ── */
const ProjectSeal = ({ Icon, index }) => {
  const labels = ['I', 'II', 'III'];
  return (
    <svg viewBox="0 0 80 80" className="w-16 h-16 shrink-0 drop-shadow-[0_0_12px_rgba(201,168,76,0.3)]">
      <polygon points="40,4 76,22 76,58 40,76 4,58 4,22"
        fill="rgba(10,7,4,0.9)" stroke="#c9a84c" strokeWidth="1.4" />
      <polygon points="40,12 68,26 68,54 40,68 12,54 12,26"
        fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
      <text x="40" y="46" textAnchor="middle"
        style={{ fontFamily:'Cinzel,serif', fontSize:'13px', fill:'#e8c96a', fontWeight:700 }}>
        {labels[index]}
      </text>
      {[[40,4],[76,22],[76,58],[40,76],[4,58],[4,22]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="#c9a84c" />
      ))}
    </svg>
  );
};

const PROJECTS = [
  {
    title: 'Job Hunt Direct',
    subtitle: 'Advanced Job Aggregator Kingdom',
    description: 'An automated job aggregation platform integrating multiple sources to help seekers find their perfect role. Built with the full MERN stack, deployed across cloud infrastructure with role-based access and advanced filtering.',
    liveLink: 'https://jobhuntdirect.jobsearchjob.xyz/',
    githubLink: 'https://github.com/AahadKhan-Coder/JobHuntDirect',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
    features: [
      'Automated aggregation from multiple job sources',
      'JWT-based authentication & authorization',
      'Role-based access control — Admin & User',
      'Responsive UI with Tailwind CSS',
      'Cloud deployment on Vercel & MongoDB Atlas',
      'Advanced search & filtering capabilities',
    ],
    icon: Crown,
    roman: 'I',
  },
  {
    title: 'Job Search Portal',
    subtitle: 'Recruitment Fortress',
    description: 'A comprehensive job portal featuring full admin dashboard, CRUD operations, and secure resume management. OTP-based authentication and optimised MongoDB aggregation pipelines power the reporting suite.',
    liveLink: 'https://www.jobsearchjob.xyz/',
    githubLink: 'https://github.com/AahadKhan-Coder/Job-Search',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OTP Auth', 'Aggregation'],
    features: [
      'Full-featured admin dashboard',
      'Complete CRUD operations',
      'OTP-based authentication system',
      'Secure resume upload & storage',
      'MongoDB aggregation pipelines',
      'Reporting & analytics dashboard',
    ],
    icon: Sword,
    roman: 'II',
  },
  {
    title: 'Open Source Scrolls',
    subtitle: 'GitHub Contributions & Demos',
    description: 'A collection of full-stack applications demonstrating API integration, authentication flows, cloud deployment, and responsive design patterns — all documented with setup guides and live demos.',
    liveLink: null,
    githubLink: 'https://github.com/AahadKhan-Coder',
    techStack: ['MERN Stack', 'REST APIs', 'Cloud Deploy', 'Responsive Design'],
    features: [
      'Multiple full-stack demo apps',
      'API integration examples',
      'Authentication implementations',
      'Cloud deployment setups',
      'Responsive UI patterns',
      'Open source contributions',
    ],
    icon: Shield,
    roman: 'III',
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-sm overflow-hidden"
      style={{
        background: 'linear-gradient(145deg,rgba(18,12,4,0.97),rgba(10,7,2,0.98))',
        border: '1px solid rgba(201,168,76,0.18)',
        boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
      }}
    >
      {/* Illuminated left margin strip */}
      <div className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: 'linear-gradient(to bottom,transparent,#c9a84c,transparent)' }} />

      {/* Corner brackets */}
      {[['top-0 left-0','border-t border-l'],['top-0 right-0','border-t border-r'],
        ['bottom-0 left-0','border-b border-l'],['bottom-0 right-0','border-b border-r']
      ].map(([pos,brd],i)=>(
        <div key={i} className={`absolute ${pos} w-5 h-5 ${brd} border-amber-500/35`} />
      ))}

      <div className="p-7 md:p-9">
        {/* Card header */}
        <div className="flex items-start gap-5 mb-6">
          <ProjectSeal Icon={project.icon} index={index} />
          <div className="flex-1 min-w-0">
            <p className="text-[9px] tracking-[0.35em] uppercase mb-1"
              style={{ fontFamily:'Cinzel,serif', color:'#c9a84c66' }}>
              Chronicle {project.roman}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-1"
              style={{
                fontFamily:"'Cinzel Decorative','Cinzel',serif",
                background:'linear-gradient(135deg,#fde68a,#c9a84c)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
              {project.title}
            </h3>
            <p className="text-sm italic" style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#8a7452' }}>
              {project.subtitle}
            </p>
          </div>
          {/* Action buttons — desktop */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {project.liveLink && (
              <motion.a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
                className="flex items-center gap-2 px-5 py-2 text-xs font-bold"
                style={{
                  fontFamily:'Cinzel,serif', letterSpacing:'0.14em',
                  background:'linear-gradient(135deg,#c9a84c,#a07828)',
                  color:'#0a0704',
                  boxShadow:'0 0 16px rgba(201,168,76,0.3)',
                }}>
                <ExternalLink className="w-3.5 h-3.5" /> Live Realm
              </motion.a>
            )}
            <motion.a href={project.githubLink} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold"
              style={{
                fontFamily:'Cinzel,serif', letterSpacing:'0.14em',
                border:'1px solid rgba(201,168,76,0.35)',
                color:'#c9a84c', background:'rgba(201,168,76,0.05)',
              }}>
              <Github className="w-3.5 h-3.5" /> Codex
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 leading-8 text-base"
          style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#b09870', fontSize:'1.05rem' }}>
          {project.description}
        </p>

        {/* Tech tokens */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech,i) => (
            <motion.span key={tech}
              initial={{ opacity:0, scale:0.7 }}
              whileInView={{ opacity:1, scale:1 }}
              viewport={{ once:true }}
              transition={{ duration:0.25, delay:i*0.04 }}
              className="px-3 py-1 text-[10px] font-semibold"
              style={{
                fontFamily:'Cinzel,serif', letterSpacing:'0.1em',
                border:'1px solid rgba(201,168,76,0.28)',
                color:'#c9a84c', background:'rgba(201,168,76,0.06)',
              }}>
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(v => !v)}
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase mb-1 cursor-pointer bg-transparent border-none"
          style={{ fontFamily:'Cinzel,serif', color:'#c9a84c77' }}
        >
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration:0.3 }}>
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
          {expanded ? 'Close Scroll' : 'Read the Scroll'}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="features"
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }}
              transition={{ duration:0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-amber-500/10">
                <ul className="space-y-2.5">
                  {project.features.map((feat, i) => (
                    <motion.li key={i}
                      initial={{ opacity:0, x:-12 }}
                      animate={{ opacity:1, x:0 }}
                      transition={{ delay: i*0.06 }}
                      className="flex items-start gap-3 text-sm"
                      style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#9a8560', lineHeight:1.7 }}
                    >
                      {/* Rune bullet */}
                      <svg viewBox="0 0 12 12" className="w-3 h-3 mt-1 shrink-0">
                        <polygon points="6,1 11,3.5 11,8.5 6,11 1,8.5 1,3.5"
                          fill="none" stroke="#c9a84c" strokeWidth="1.2" />
                        <circle cx="6" cy="6" r="1.5" fill="#c9a84c" opacity="0.8" />
                      </svg>
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Mobile action buttons */}
              <div className="flex flex-wrap gap-3 mt-5 md:hidden">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 text-xs font-bold"
                    style={{
                      fontFamily:'Cinzel,serif', letterSpacing:'0.12em',
                      background:'linear-gradient(135deg,#c9a84c,#a07828)', color:'#0a0704',
                    }}>
                    <ExternalLink className="w-3.5 h-3.5" /> Live Realm
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 text-xs font-bold"
                  style={{
                    fontFamily:'Cinzel,serif', letterSpacing:'0.12em',
                    border:'1px solid rgba(201,168,76,0.35)', color:'#c9a84c',
                  }}>
                  <Github className="w-3.5 h-3.5" /> Codex
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export const Projects = () => (
  <section id="projects"
    className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 overflow-hidden"
    style={{ background: '#070503' }}>

    {/* ── Backgrounds ── */}
    <div className="absolute inset-0 opacity-[0.055]"
      style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")` }} />
    {/* Herringbone pattern */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage:`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 20 L20 0 L40 20 L20 40Z' fill='none' stroke='#c9a84c' stroke-width='0.6'/></svg>`)}")`, backgroundSize:'40px 40px' }} />
    <div className="absolute inset-0 pointer-events-none"
      style={{ background:'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(120,40,6,0.1) 0%, transparent 65%)' }} />
    <div className="absolute top-0 inset-x-0 h-32 pointer-events-none"
      style={{ background:'linear-gradient(to bottom,#070503,transparent)' }} />
    <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
      style={{ background:'linear-gradient(to top,#070503,transparent)' }} />

    <div className="relative z-10 max-w-4xl mx-auto w-full">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity:0, y:-24 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.8 }}
        className="text-center mb-16"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase font-mono mb-4"
          style={{ color:'#c9a84c99' }}>Chapter IV · The Codex</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
          style={{
            fontFamily:"'Cinzel Decorative','Cinzel',serif",
            background:'linear-gradient(160deg,#fde68a 0%,#c9a84c 40%,#92661a 80%,#fcd34d 100%)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
            filter:'drop-shadow(0 2px 18px rgba(201,168,76,0.3))',
          }}>
          Legendary Projects
        </h2>
        <p className="text-lg italic mb-8"
          style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#d1b577aa', letterSpacing:'0.06em' }}>
          Kingdoms built with code — forged in fire, sealed in gold
        </p>
        <ChapterBreak />
      </motion.div>

      {/* ── Project cards ── */}
      <div className="space-y-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* ── GitHub CTA ── */}
      <motion.div
        initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.7, delay:0.2 }}
        className="mt-10 text-center rounded-sm p-8"
        style={{
          background:'linear-gradient(135deg,rgba(15,10,3,0.97),rgba(25,17,6,0.95))',
          border:'1px solid rgba(201,168,76,0.14)',
        }}
      >
        <p className="text-[9px] tracking-[0.4em] uppercase mb-3"
          style={{ fontFamily:'Cinzel,serif', color:'#c9a84c55' }}>
          ✦ The Full Archive ✦
        </p>
        <h3 className="text-xl font-bold mb-3"
          style={{ fontFamily:'Cinzel,serif', color:'#e8c96a', letterSpacing:'0.08em' }}>
          Want to See More?
        </h3>
        <p className="text-sm mb-6 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily:'Cormorant Garamond,Georgia,serif', color:'#7a6640', fontSize:'1rem' }}>
          Explore the complete collection of projects, contributions, and experiments — each repository documented with setup scrolls and live portals.
        </p>
        <motion.a
          href="https://github.com/AahadKhan-Coder"
          target="_blank" rel="noopener noreferrer"
          whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3 text-sm font-bold"
          style={{
            fontFamily:'Cinzel,serif', letterSpacing:'0.18em',
            background:'linear-gradient(135deg,#c9a84c,#a07828)',
            color:'#0a0704',
            boxShadow:'0 0 24px rgba(201,168,76,0.35)',
          }}>
          <Github className="w-4 h-4" /> Visit My GitHub Kingdom
        </motion.a>
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        initial={{ scaleX:0 }} whileInView={{ scaleX:1 }}
        viewport={{ once:true }} transition={{ duration:1.5, delay:0.3 }}
        className="mt-14"
      >
        <ChapterBreak />
      </motion.div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@700;900&family=Cormorant+Garamond:ital,wght@0,400;1,300;1,400;1,600&display=swap');
    `}</style>
  </section>
);