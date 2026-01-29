"use client";

import { motion } from "framer-motion";
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
      "ZST delivered our AI chatbot in half the time we expected. Their expertise in LLMs is unmatched.",
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
      "From concept to deployment in 3 weeks. ZST's agentic AI solution transformed our workflow.",
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
      "ZST built an AI agent that handles 80% of our lead qualification automatically.",
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
  },
  {
    title: "Autonomous Agents",
    description:
      "Intelligent agents that reason, plan, and execute complex tasks on your behalf.",
  },
  {
    title: "Web Applications",
    description:
      "Modern, performant web apps built with React, Next.js, and scalable backends.",
  },
  {
    title: "Mobile Architecture",
    description:
      "Cross-platform mobile solutions and architecture consulting for iOS and Android.",
  },
  {
    title: "Tech Consulting",
    description:
      "Strategic guidance on AI adoption, system design, and technology roadmaps.",
  },
  {
    title: "API & Integrations",
    description:
      "Seamless integration with your existing tools, databases, and third-party services.",
  },
];

// Tech stack
const techStack = [
  { label: "React", Icon: SiReact, color: "text-[#61DAFB]" },
  { label: "Next.js", Icon: SiNextdotjs, color: "text-slate-200" },
  { label: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
  { label: "Node.js", Icon: SiNodedotjs, color: "text-[#339933]" },
  { label: "Python", Icon: SiPython, color: "text-[#3776AB]" },
  { label: "OpenAI", Icon: SiOpenai, color: "text-[#412991]" },
  { label: "Claude", Icon: SiAnthropic, color: "text-[#D4A574]" },
  { label: "LangChain", Icon: SiLangchain, color: "text-[#1C3C3C]" },
  { label: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "text-[#4169E1]" },
  { label: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
  { label: "AWS", Icon: SiAmazon, color: "text-[#FF9900]" },
  { label: "GCP", Icon: SiGooglecloud, color: "text-[#4285F4]" },
  { label: "Vercel", Icon: SiVercel, color: "text-slate-200" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { label: "Figma", Icon: SiFigma, color: "text-[#F24E1E]" },
];

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="galaxy min-h-screen text-slate-100">
      <div className="grain" />
      <div className="relative mx-auto flex max-w-4xl flex-col px-6 pb-24 pt-10">
        <nav className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-slate-300">
          <span className="font-(--font-display) text-lg tracking-[0.4em] text-slate-100">
            ZST
          </span>
          <div className="hidden gap-6 text-xs font-medium md:flex">
            <span className="text-slate-400 cursor-pointer hover:text-slate-200 transition">Services</span>
            <span className="text-slate-400 cursor-pointer hover:text-slate-200 transition">Work</span>
            <span className="text-slate-400 cursor-pointer hover:text-slate-200 transition">About</span>
            <span className="text-slate-400 cursor-pointer hover:text-slate-200 transition">Contact</span>
          </div>
          {/* <button className="rounded-full bg-linear-to-r from-rose-500 via-pink-500 to-orange-400 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(255,84,108,0.35)] transition hover:-translate-y-px">
            Get a Quote
          </button> */}
        </nav>

        {/* Hero Section - Minimal & Centered */}
        <section className="mt-20 flex flex-col items-center text-center h-screen">
          {/* Abstract AI Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 scale-150 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="mascot relative">
              {/* Modern Abstract AI Symbol */}
              <svg
                viewBox="0 0 120 120"
                className="h-28 w-28 md:h-36 md:w-36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer ring */}
                <circle cx="60" cy="60" r="50" stroke="url(#iconGrad)" strokeWidth="3" fill="none" opacity="0.4" />
                {/* Inner filled circle */}
                <circle cx="60" cy="60" r="38" fill="url(#iconGrad)" />
                {/* Sparkle/AI symbol in center */}
                <path
                  d="M60 30 L63 50 L80 45 L65 58 L80 75 L63 68 L60 90 L57 68 L40 75 L55 58 L40 45 L57 50 Z"
                  fill="#fff"
                  opacity="0.95"
                />
                {/* Small dots around */}
                <circle cx="60" cy="18" r="3" fill="url(#iconGrad)" />
                <circle cx="60" cy="102" r="3" fill="url(#iconGrad)" />
                <circle cx="18" cy="60" r="3" fill="url(#iconGrad)" />
                <circle cx="102" cy="60" r="3" fill="url(#iconGrad)" />
                <defs>
                  <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4d6a" />
                    <stop offset="100%" stopColor="#ff8a5c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="font-(--font-display) text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-rose-400 to-rose-600 md:text-7xl"
          >
            ZST
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="mt-4 text-xs uppercase tracking-[0.4em] text-rose-400 md:text-sm"
          >
            AI-first. Built to ship.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-sm"
          >
            We're a small crew building intelligent chatbots, autonomous agents,
            <br />
            and modern web applications. Powered by AI. Designed to deliver.
          </motion.p>
        </section>

        {/* Testimonials Section */}
        <motion.section
          className=" space-y-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-rose-400">{">"}</span>
              <h2 className="text-xl font-semibold text-slate-100">
                What Clients Say
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="marquee">
              <div className="marquee-track">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`${item.handle}-${index}`}
                    className="marquee-item testimonial-card rounded-2xl px-6 py-2 backdrop-blur"
                  >
                    <div className="mb-4 h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                    <p className="text-sm text-slate-300">{item.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-rose-300">
                      {item.handle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="marquee">
              <div className="marquee-track reverse">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`${item.handle}-reverse-${index}`}
                    className="marquee-item testimonial-card rounded-2xl px-6 py-2 backdrop-blur"
                  >
                    <div className="mb-4 h-10 w-10 rounded-full border border-white/10 bg-white/5" />
                    <p className="text-sm text-slate-300">{item.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-rose-300">
                      {item.handle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Services Section */}
        <motion.section
          className="mt-32 space-y-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-rose-400">{">"}</span>
            <h2 className="text-xl font-semibold text-slate-100">Our Services</h2>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((item) => (
              <motion.div
                key={item.title}
                className="info-card rounded-2xl p-6 text-left"
                variants={staggerItem}
              >
                <div className="mb-4 h-10 w-10 rounded-full border border-rose-500/40 bg-rose-500/10" />
                <p className="text-base font-semibold text-slate-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="mt-32 space-y-6 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-rose-400">{">"}</span>
            <h2 className="text-xl font-semibold text-slate-100">
              Our Tech Stack
            </h2>
          </div>
          <motion.div
            className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {techStack.map(({ label, Icon, color }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur transition hover:border-white/30"
                variants={staggerItem}
              >
                <Icon className={`h-4 w-4 ${color}`} aria-hidden />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-rose-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="transition hover:text-rose-200">
              See our projects →
            </button>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="mt-32"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-linear-to-b from-white/5 to-white/3 px-8 py-12 text-center backdrop-blur md:px-14">
            <div className="flex items-center justify-center gap-3">
              <span className="text-rose-400">{">"}</span>
              <h3 className="text-2xl font-semibold text-slate-100 md:text-3xl">
                Let's Build Together
              </h3>
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Have a project in mind? We'd love to hear about it. Drop us a line
              and let's create something amazing.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <input
                className="h-12 w-full max-w-sm rounded-full border border-white/10 bg-[#0b0f1a] px-5 text-sm text-slate-200 outline-none transition focus:border-rose-400/60"
                placeholder="your@email.com"
                type="email"
              />
              <button className="flex h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-rose-500 via-pink-500 to-orange-400 px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,84,108,0.45)] transition hover:-translate-y-px">
                Get in Touch <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="mt-24 pb-12 text-center text-xs text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="leading-relaxed">
            Crafted with <span className="text-rose-400">❤</span> by the{" "}
            <span className="text-rose-300">ZST</span> crew.
          </p>
          <p className="mt-2 text-slate-600">
            © 2024 ZST. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
