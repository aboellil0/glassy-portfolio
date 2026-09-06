'use client'

import Image from 'next/image'
import { heroContent } from '@/data/content'

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 via-transparent to-[#07080a] z-10" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cosmic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="0.75" fill="#ffffff" />
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeDasharray="1 7" strokeWidth="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cosmic-grid)" />
        </svg>
      </div>

      {/* FLOATING NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center items-center pt-5 sm:pt-7 px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-6 sm:gap-10 px-4 py-2 sm:py-2.5 rounded-full bg-white/[0.05] backdrop-blur-[36px] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.05)] border border-white/[0.12] transition-all hover:bg-white/[0.07]">
          <a className="flex items-center gap-2.5 group" href="#">
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-white/90 to-white/60 flex items-center justify-center shadow-[inset_0_1px_1px_#ffffff,0_4px_12px_rgba(0,0,0,0.4)]">
              <span className="text-[13px] font-bold text-[#0e1015] tracking-tight">MA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-wide text-white group-hover:text-secondary transition-colors">Mohamed</span>
              <span className="text-[9px] font-medium uppercase tracking-widest text-white/50">Aboellil</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            <a className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/[0.1] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.4)]" href="#projects">Projects</a>
            <a className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all" href="#skills">Skills</a>
            <a className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all" href="#experience">Experience</a>
            <a className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2.5">
            <a
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white to-[#dce2f4] text-[#0d0f14] text-xs font-semibold shadow-[inset_0_1px_1px_#ffffff,0_4px_14px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all"
              href="#contact"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* FULL WIDTH HERO IMAGE WITH ANIMATED CENTERED EFFECTS */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-full overflow-hidden pointer-events-none">
          {/* Outer Ambient Navy Radial Gradient Glow */}
          <div className="hero-navy-glow z-0" />

          {/* Inner Vibrant Navy Core Glow */}
          <div className="hero-navy-glow-core z-0" />

          {/* ANIMATED CONCENTRIC RIPPLE WAVES CENTERED ON YOU */}
          <div className="absolute top-[42%] left-1/2 z-0 pointer-events-none w-[600px] h-[600px]">
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full border border-blue-500/25 animate-ripple-1" />
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full border border-indigo-500/20 animate-ripple-2" />
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full border border-sky-400/15 animate-ripple-3" />
          </div>

          {/* ANIMATED ROTATING ORBITAL NAVY RINGS CENTERED ON PHOTO */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] pointer-events-none">
            {/* Outer Slow Ring */}
            <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border border-dashed border-blue-400/20 animate-spin-orbital">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />
            </div>

            {/* Inner Reverse Ring */}
            <div className="absolute top-1/2 left-1/2 w-[72%] h-[72%] rounded-full border border-indigo-400/25 border-t-blue-400/60 animate-spin-orbital-reverse">
              <div className="absolute top-1/2 right-0 translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_16px_#38bdf8]" />
            </div>

            {/* Floating Orbiting Navy Energy Particles */}
            <div className="absolute top-1/2 left-1/2 animate-orbit-particle-1">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-[0_0_20px_#3b82f6]" />
            </div>
            <div className="absolute top-1/2 left-1/2 animate-orbit-particle-2">
              <div className="w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_15px_#7dd3fc]" />
            </div>
          </div>



          {/* Hero Portrait PNG */}
          <Image
            src="/images/hero.png"
            alt="Hero Portrait"
            fill
            className="object-cover object-bottom relative z-10 pointer-events-auto"
            priority
          />
        </div>

        {/* FLOATING GLASS CARD - Overlays Image at Bottom */}
        <div className="relative z-20 flex-1 flex items-end justify-center pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl p-5 sm:p-7 md:p-8 rounded-[30px] sm:rounded-[36px] liquid-glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Column 1: Identity, Title, Bio */}
              <div className="lg:col-span-7 flex flex-col gap-3.5 text-left">
                {/* Name and Title */}
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    {heroContent.greeting}
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">{heroContent.titleLine1}</span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{heroContent.titleLine2}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary/90 leading-relaxed font-normal mt-2 max-w-xl">
                    {heroContent.description}
                  </p>
                </div>

                {/* Quick Metrics Capsule Row */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.12)]">
                    <div className="text-lg font-bold text-white tracking-tight">{heroContent.experienceBadge}</div>
                    <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider">Experience</div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.12)]">
                    <div className="text-lg font-bold text-white tracking-tight">6+</div>
                    <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider">Freelance Projects</div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.12)]">
                    <div className="text-lg font-bold text-white tracking-tight">.NET & Node</div>
                    <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider">Stack</div>
                  </div>
                </div>
              </div>

              {/* Column 2: Direct Action Buttons */}
              <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
                {/* Primary Tactile Button - View Projects */}
                <a
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-[18px] glow-button text-[#0d0f14] font-semibold text-sm hover:brightness-105 active:scale-[0.98] transition-all"
                  href="#projects"
                >
                  <span>{heroContent.primaryCta.label}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
                {/* Download CV Button */}
                <a
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-[18px] bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.18] text-white font-medium text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-[0.98] transition-all"
                  href={heroContent.secondaryCta.href}
                >
                  <span className="material-symbols-outlined text-[16px] text-white/80">download</span>
                  <span>Download CV</span>
                </a>
                {/* Contact Button */}
                <a
                  className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-[18px] bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.18] text-white font-medium text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-[0.98] transition-all"
                  href="#contact"
                >
                  <span className="material-symbols-outlined text-[16px] text-white/80">mail</span>
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
