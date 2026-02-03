"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiOpenai,
  SiAnthropic,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiTailwindcss,
  SiLangchain,
  SiGooglecloud,
  SiFigma,
} from "react-icons/si";

// Client testimonials
const testimonials = [
  {
    quote:
      "ZTaS delivered our AI chatbot in half the time we expected. Their expertise in LLMs is unmatched.",
    handle: "— Sarah K., Fintech Startup",
  },
  {
    quote:
      "The team understood our vision instantly. Our customer support AI has reduced tickets by 60%.",
    handle: "— Michael R., E-commerce",
  },
  {
    quote:
      "Professional, fast, and they actually understand modern AI. Highly recommend for any AI project.",
    handle: "— Priya S., Healthcare Tech",
  },
  {
    quote:
      "From concept to deployment in 3 weeks. ZTaS's agentic AI solution transformed our workflow.",
    handle: "— David L., SaaS Founder",
  },
  {
    quote:
      "They don't just build—they consult. Helped us rethink our entire mobile architecture.",
    handle: "— Emma T., Retail Platform",
  },
  {
    quote:
      "Best tech partner we've worked with. Clean code, clear communication, shipped on time.",
    handle: "— James W., Agency Owner",
  },
  {
    quote:
      "ZTaS built an AI agent that handles 80% of our lead qualification automatically.",
    handle: "— Lisa M., B2B Startup",
  },
  {
    quote:
      "Their full-stack expertise + AI knowledge is a rare combo. Worth every penny.",
    handle: "— Alex P., CTO",
  },
];

// Services we offer
const services = [
  {
    title: "AI Chatbots",
    description:
      "Custom conversational AI powered by cutting-edge LLMs. Support, sales, or internal tools.",
    icon: "💬",
  },
  {
    title: "Autonomous Agents",
    description:
      "Intelligent agents that reason, plan, and execute complex tasks on your behalf.",
    icon: "🤖",
  },
  {
    title: "Web Applications",
    description:
      "Modern, performant web apps built with React, Next.js, and scalable backends.",
    icon: "🌐",
  },
  {
    title: "Mobile Architecture",
    description:
      "Cross-platform mobile solutions and architecture consulting for iOS and Android.",
    icon: "📱",
  },
  {
    title: "Tech Consulting",
    description:
      "Strategic guidance on AI adoption, system design, and technology roadmaps.",
    icon: "🎯",
  },
  {
    title: "API & Integrations",
    description:
      "Seamless integration with your existing tools, databases, and third-party services.",
    icon: "🔗",
  },
];

// Tech stack
const techStack = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "OpenAI", Icon: SiOpenai, color: "#412991" },
  { label: "Claude", Icon: SiAnthropic, color: "#D4A574" },
  { label: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "AWS", Icon: SiAmazon, color: "#FF9900" },
  { label: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
  { label: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-rose-400/30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Orbital rings around the mascot
function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-rose-500/20"
          style={{
            width: 140 + ring * 40,
            height: 140 + ring * 40,
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: {
              duration: 20 + ring * 5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(255,84,108,0.8)]"
            style={{
              top: "50%",
              left: 0,
              transform: "translate(-50%, -50%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Text reveal animation component
function TextReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Magnetic button/element component
function MagneticElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// 3D Tilt card component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    rotateX.set(mouseY * -0.05);
    rotateY.set(mouseX * 0.05);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Animated counter for stats (future use)
function useAnimatedNumber(target: number, duration: number = 2000) {
  const [current, setCurrent] = useState(0);
  const startTime = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (startTime.current === null) startTime.current = time;
    const elapsed = time - startTime.current;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCurrent(Math.floor(target * eased));
  });

  return current;
}

// Glowing cursor follower
function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-64 h-64 rounded-full pointer-events-none z-0 opacity-30"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, rgba(255,84,108,0.15) 0%, transparent 70%)",
      }}
    />
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

  return (
    <div ref={containerRef} className="galaxy min-h-screen text-slate-100">
      <CursorGlow />
      <div className="grain" />
      <FloatingParticles />

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col px-6 pb-24">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <MagneticElement>
              <span className="font-(--font-display) text-lg tracking-[0.3em] text-slate-100 cursor-pointer">
                ZTaS
              </span>
            </MagneticElement>
            <MagneticElement>
              <motion.button
                className="group relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-full border border-rose-500/30" />
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 text-slate-200 group-hover:text-white transition-colors">
                  Get in Touch
                </span>
              </motion.button>
            </MagneticElement>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section
          className="relative flex min-h-screen flex-col items-center justify-center text-center"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          {/* Animated background orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[500px] h-[500px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(255,84,108,0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Abstract AI Icon with orbital rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 },
              scale: { duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 },
              rotate: { duration: 1, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="relative mb-8"
          >
            <OrbitalRings />

            {/* Glow effect behind icon */}
            <motion.div
              className="absolute inset-0 scale-150 rounded-full bg-rose-500/30 blur-3xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1.5, 1.7, 1.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="mascot relative">
              <svg
                viewBox="0 0 120 120"
                className="h-32 w-32 md:h-40 md:w-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="60" cy="60" r="50"
                  stroke="url(#iconGrad)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                />
                <motion.circle
                  cx="60" cy="60" r="38"
                  fill="url(#iconGrad)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
                />
                <motion.path
                  d="M60 30 L63 50 L80 45 L65 58 L80 75 L63 68 L60 90 L57 68 L40 75 L55 58 L40 45 L57 50 Z"
                  fill="#fff"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 0.95, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                {/* Animated orbiting dots */}
                <motion.circle
                  cx="60" cy="18" r="3"
                  fill="url(#iconGrad)"
                  animate={{
                    cx: [60, 102, 60, 18, 60],
                    cy: [18, 60, 102, 60, 18],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                  <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d6a" />
                    <stop offset="100%" stopColor="#ff8a5c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Brand Name with letter animation */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-(--font-display) text-6xl font-bold tracking-tight md:text-8xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-rose-200 to-rose-500">
                ZTaS
              </span>
            </motion.h1>
          </div>

          {/* Tagline with staggered reveal */}
          <motion.div
            className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-rose-400 md:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.span
              className="h-px w-8 bg-gradient-to-r from-transparent to-rose-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
            <span>AI-first. Built to ship.</span>
            <motion.span
              className="h-px w-8 bg-gradient-to-l from-transparent to-rose-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg"
          >
            We build intelligent chatbots, autonomous agents, and modern web applications.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 text-slate-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-rose-400">
                <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
                <motion.circle
                  cx="8"
                  cy="8"
                  r="2"
                  fill="currentColor"
                  animate={{ cy: [8, 14, 8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="relative py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-3xl text-rose-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❯
            </motion.span>
            <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">
              What Clients Say
            </h2>
          </motion.div>

          <div className="space-y-6">
            <div className="marquee">
              <div className="marquee-track">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <TiltCard
                    key={`${item.handle}-${index}`}
                    className="marquee-item testimonial-card rounded-2xl px-6 py-5 backdrop-blur cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 opacity-80" />
                      <div className="h-2 w-16 rounded-full bg-slate-700/50" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-rose-300">
                      {item.handle}
                    </p>
                  </TiltCard>
                ))}
              </div>
            </div>
            <div className="marquee">
              <div className="marquee-track reverse">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <TiltCard
                    key={`${item.handle}-reverse-${index}`}
                    className="marquee-item testimonial-card rounded-2xl px-6 py-5 backdrop-blur cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 opacity-80" />
                      <div className="h-2 w-16 rounded-full bg-slate-700/50" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-rose-300">
                      {item.handle}
                    </p>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Services Section */}
        <motion.section
          className="py-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-3xl text-rose-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ❯
            </motion.span>
            <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">Our Services</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                <TiltCard className="info-card h-full rounded-2xl p-6 text-left group cursor-pointer">
                  <motion.div
                    className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/30 flex items-center justify-center text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-lg font-semibold text-slate-100 group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-sm text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span>Learn more</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="py-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-3xl text-rose-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ❯
            </motion.span>
            <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">
              Our Tech Stack
            </h2>
          </motion.div>

          <motion.div
            className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {techStack.map(({ label, Icon, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  boxShadow: `0 0 20px ${color}40`,
                }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 backdrop-blur cursor-pointer transition-colors hover:border-white/30"
              >
                <Icon className="h-4 w-4" style={{ color }} aria-hidden />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <MagneticElement>
              <motion.button
                className="group relative px-6 py-3 text-sm font-semibold text-rose-300 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  See our projects
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </MagneticElement>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 text-center backdrop-blur-xl relative overflow-hidden">
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(255,84,108,0.2) 0%, transparent 60%)",
              }}
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="text-3xl text-rose-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  ❯
                </motion.span>
                <h3 className="text-3xl font-semibold text-slate-100 md:text-4xl tracking-tight">
                  Let's Build Together
                </h3>
              </motion.div>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400">
                Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing.
              </p>

              <motion.div
                className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative w-full max-w-sm group">
                  <input
                    className="h-14 w-full rounded-full border border-white/10 bg-[#080c14] px-6 text-sm text-slate-200 outline-none transition-all duration-300 focus:border-rose-400/60 focus:shadow-[0_0_20px_rgba(255,84,108,0.15)]"
                    placeholder="your@email.com"
                    type="email"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-rose-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <MagneticElement>
                  <motion.button
                    className="relative h-14 px-8 rounded-full text-sm font-semibold text-white overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="absolute inset-0 shadow-[0_0_30px_rgba(255,84,108,0.5)]" />
                    <span className="relative z-10 flex items-center gap-2">
                      Get in Touch
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </MagneticElement>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="py-12 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-6 flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-slate-500 hover:text-rose-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </motion.div>

          <p className="leading-relaxed">
            Crafted with <motion.span
              className="inline-block text-rose-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >❤</motion.span> by the{" "}
            <span className="text-rose-300">ZTaS</span> crew.
          </p>
          <p className="mt-2 text-slate-600">
            © {new Date().getFullYear()} ZTaS. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
