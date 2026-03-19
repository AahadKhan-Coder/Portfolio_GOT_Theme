import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Server, Database, Wrench, Sparkles } from "lucide-react";

/* ── Animated circular mastery ring ── */
const MasteryRing = ({ level, size = 64, inView }) => {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dash = (level / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="shrink-0">
      {/* Track */}
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="3.5"
      />
      {/* Tick marks */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x1 = 32 + 26 * Math.cos(rad);
        const y1 = 32 + 26 * Math.sin(rad);
        const x2 = 32 + 22 * Math.cos(rad);
        const y2 = 32 + 22 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(201,168,76,0.15)"
            strokeWidth="1"
          />
        );
      })}
      {/* Progress arc */}
      <motion.circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke="url(#goldArc)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={inView ? { strokeDashoffset: circ - dash } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        style={{ transform: "rotate(-90deg)", transformOrigin: "32px 32px" }}
      />
      <defs>
        <linearGradient id="goldArc" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92661a" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      {/* Center value */}
      <text
        x="32"
        y="36"
        textAnchor="middle"
        style={{
          fontFamily: "Cinzel,serif",
          fontSize: "11px",
          fill: "#e8c96a",
          fontWeight: 700,
        }}
      >
        {level}%
      </text>
    </svg>
  );
};

/* ── Skill card ── */
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex items-center gap-4 p-4 rounded-sm cursor-default"
      style={{
        background: hovered
          ? "linear-gradient(135deg,rgba(35,24,8,0.98),rgba(22,15,5,0.98))"
          : "linear-gradient(135deg,rgba(20,13,4,0.9),rgba(12,8,2,0.88))",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.14)"}`,
        boxShadow: hovered ? "0 4px 28px rgba(140,50,6,0.22)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Corner brackets */}
      {hovered && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-500/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-500/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-500/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-500/60" />
        </>
      )}

      <MasteryRing level={skill.level} inView={inView} />

      <div className="flex-1 min-w-0">
        <h4
          className="font-bold text-sm mb-0.5 truncate"
          style={{
            fontFamily: "Cinzel,serif",
            color: "#e8c96a",
            letterSpacing: "0.06em",
          }}
        >
          {skill.name}
        </h4>
        <p
          className="text-xs italic truncate"
          style={{
            fontFamily: "Cormorant Garamond,Georgia,serif",
            color: "#7a6640",
          }}
        >
          {skill.house}
        </p>
        {/* Siege-bar */}
        <div
          className="mt-2 h-1 rounded-full overflow-hidden"
          style={{ background: "rgba(201,168,76,0.1)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#92661a,#fde68a)" }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1,
              delay: 0.3 + index * 0.04,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ── Chapter ornament ── */
const ChapterBreak = () => (
  <div className="flex items-center gap-4 my-2">
    <div
      className="flex-1 h-px"
      style={{ background: "linear-gradient(90deg,transparent,#c9a84c55)" }}
    />
    <svg viewBox="0 0 60 20" className="w-16 opacity-60" fill="none">
      <path
        d="M2 10 Q15 2 30 10 Q45 18 58 10"
        stroke="#c9a84c"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="2.5" fill="#c9a84c" />
      <circle cx="2" cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
      <circle cx="58" cy="10" r="1.5" fill="#c9a84c" opacity="0.5" />
    </svg>
    <div
      className="flex-1 h-px"
      style={{ background: "linear-gradient(90deg,#c9a84c55,transparent)" }}
    />
  </div>
);

/* ── Category icon ── */
const CategoryIcon = ({ Icon, active }) => (
  <div
    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
    style={{
      background: active
        ? "linear-gradient(135deg,#c9a84c,#a07828)"
        : "rgba(201,168,76,0.1)",
      border: `1px solid ${active ? "#c9a84c" : "rgba(201,168,76,0.25)"}`,
    }}
  >
    <Icon
      className="w-4 h-4"
      style={{ color: active ? "#0a0704" : "#c9a84c" }}
    />
  </div>
);

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend Arsenal",
    icon: Code,
    skills: [
      { name: "React.js", level: 95, house: "House of Components" },
      { name: "Redux", level: 85, house: "State Management Guild" },
      { name: "HTML5", level: 98, house: "Foundation Keep" },
      { name: "CSS3", level: 95, house: "Style Citadel" },
      { name: "Tailwind CSS", level: 92, house: "Utility Legion" },
      { name: "JavaScript ES6+", level: 93, house: "Modern Script Order" },
      { name: "Framer Motion", level: 88, house: "Animation Brotherhood" },
    ],
  },
  {
    id: "backend",
    name: "Backend Stronghold",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, house: "Runtime Kingdom" },
      { name: "Express.js", level: 92, house: "API Fortress" },
      { name: "REST APIs", level: 94, house: "Service Guild" },
      { name: "JWT Auth", level: 88, house: "Security Watch" },
      { name: "OTP Verification", level: 85, house: "Guardian Council" },
    ],
  },
  {
    id: "database",
    name: "Data Vault",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 92, house: "NoSQL Realm" },
      { name: "Mongoose", level: 90, house: "Schema Keepers" },
      { name: "PostgreSQL", level: 75, house: "SQL Dynasty" },
      { name: "Query Optimization", level: 87, house: "Performance Circle" },
    ],
  },
  {
    id: "devops",
    name: "DevOps Armory",
    icon: Wrench,
    skills: [
      { name: "Git", level: 93, house: "Version Control League" },
      { name: "GitHub", level: 92, house: "Code Repository" },
      { name: "Postman", level: 88, house: "API Testing Guild" },
      { name: "VS Code", level: 95, house: "Editors Conclave" },
      { name: "Vercel", level: 85, house: "Deployment Legion" },
      { name: "Render", level: 83, house: "Cloud Watchers" },
      { name: "AWS", level: 70, house: "Cloud Kingdom" },
    ],
  },
];

const EXPLORING = [
  "AI/ML APIs",
  "OpenAI",
  "LangChain",
  "Python",
  "FastAPI",
  "Django",
  "Next.js",
  "Docker",
  "Web Scraping",
  "Automation",
];

export const Skills = () => {
  const [active, setActive] = useState("frontend");
  const category = SKILL_CATEGORIES.find((c) => c.id === active);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-28 overflow-hidden"
      style={{ background: "#060504" }}
    >
      {/* ── Backgrounds ── */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/></filter><rect width='200' height='200' filter='url(#n)'/></svg>`)}")`,
        }}
      />
      {/* Diamond trellis */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><path d='M24 2 L46 24 L24 46 L2 24Z' fill='none' stroke='#c9a84c' stroke-width='0.7'/></svg>`)}")`,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(140,50,6,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,#060504,transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top,#060504,transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-[10px] tracking-[0.4em] uppercase font-mono mb-4"
            style={{ color: "#c9a84c99" }}
          >
            Chapter III · The Arsenal
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
            style={{
              fontFamily: "'Cinzel Decorative','Cinzel',serif",
              background:
                "linear-gradient(160deg,#fde68a 0%,#c9a84c 40%,#92661a 80%,#fcd34d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 18px rgba(201,168,76,0.3))",
            }}
          >
            Arsenal of Skills
          </h2>
          <p
            className="text-lg italic mb-8"
            style={{
              fontFamily: "Cormorant Garamond,Georgia,serif",
              color: "#d1b577aa",
              letterSpacing: "0.06em",
            }}
          >
            Weapons forged in the fires of experience
          </p>
          <ChapterBreak />
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm transition-all duration-300"
              style={{
                fontFamily: "Cinzel,serif",
                letterSpacing: "0.1em",
                background:
                  active === cat.id
                    ? "linear-gradient(135deg,#c9a84c,#a07828)"
                    : "rgba(201,168,76,0.06)",
                border: `1px solid ${active === cat.id ? "#c9a84c" : "rgba(201,168,76,0.22)"}`,
                color: active === cat.id ? "#0a0704" : "#c9a84c",
                boxShadow:
                  active === cat.id ? "0 0 20px rgba(201,168,76,0.3)" : "none",
              }}
            >
              <CategoryIcon Icon={cat.icon} active={active === cat.id} />
              <span className="font-semibold hidden sm:inline">{cat.name}</span>
              <span className="font-semibold sm:hidden">
                {cat.name.split(" ")[0]}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* ── Skills panel ── */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative rounded-sm p-6 md:p-8"
          style={{
            background:
              "linear-gradient(145deg,rgba(18,12,4,0.97),rgba(10,7,2,0.98))",
            border: "1px solid rgba(201,168,76,0.15)",
            boxShadow:
              "inset 0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(140,50,6,0.07)",
          }}
        >
          {/* Panel corner brackets */}
          {[
            ["top-0 left-0", "border-t-2 border-l-2"],
            ["top-0 right-0", "border-t-2 border-r-2"],
            ["bottom-0 left-0", "border-b-2 border-l-2"],
            ["bottom-0 right-0", "border-b-2 border-r-2"],
          ].map(([pos, brd], i) => (
            <div
              key={i}
              className={`absolute ${pos} w-6 h-6 ${brd} border-amber-500/35`}
            />
          ))}

          {/* Panel header */}
          <div className="flex items-center gap-3 mb-7">
            <CategoryIcon Icon={category.icon} active />
            <h3
              className="text-xl font-bold"
              style={{
                fontFamily: "Cinzel,serif",
                color: "#e8c96a",
                letterSpacing: "0.1em",
              }}
            >
              {category.name}
            </h3>
            <span
              className="ml-auto text-xs tracking-widest"
              style={{ fontFamily: "Cinzel,serif", color: "#c9a84c55" }}
            >
              {category.skills.length} Arts
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {category.skills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Also Exploring ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 rounded-sm p-7"
          style={{
            background:
              "linear-gradient(135deg,rgba(15,10,3,0.96),rgba(25,17,6,0.94))",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Sparkles className="w-4 h-4" style={{ color: "#c9a84c" }} />
            <h3
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ fontFamily: "Cinzel,serif", color: "#c9a84c99" }}
            >
              Also Exploring
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {EXPLORING.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.045 }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 4px 16px rgba(201,168,76,0.2)",
                }}
                className="px-4 py-1.5 text-xs rounded-sm"
                style={{
                  fontFamily: "Cinzel,serif",
                  letterSpacing: "0.12em",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.22)",
                  cursor: "default",
                  transition: "all 0.25s ease",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
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
};
