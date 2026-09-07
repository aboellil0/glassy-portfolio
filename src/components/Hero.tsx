'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroContent } from '@/data/content'

export default function Hero() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = ['projects', 'skills', 'experience', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            return
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <section id="hero" className="relative w-full min-h-screen">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-white/[0.16] text-white shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.4),0_2px_10px_rgba(0,0,0,0.3)] font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.2)]'
                }`}
              >
                {item.label}
              </a>
            ))}
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

          {/* ── AURORA HALO SYSTEM ── rendered behind the photo (z-[5]) ── */}

          {/* 1. Large outer halo — deep navy ellipse that breathes */}
          <div className="hero-aurora-halo z-[5]" />

          {/* 2. Conic god-ray sweep — slow rotating aurora fan */}
          <div className="hero-aurora-sweep z-[5]" />

          {/* 3. Left indigo orb */}
          <div className="hero-aurora-orb-l z-[5]" />

          {/* 4. Right cyan orb */}
          <div className="hero-aurora-orb-r z-[5]" />

          {/* 5. Centre rising light beam from feet */}
          <div className="hero-aurora-beam z-[5]" />

          {/* 6. Glassy white-blue rim line at waist level */}
          <div className="hero-aurora-rim z-[5]" />

          {/* Hero Portrait PNG */}
          <Image
            src="/images/hero.png"
            alt="Hero Portrait"
            fill
            className="object-cover object-bottom relative z-10 pointer-events-auto"
            priority
          />

          {/* Bottom fade — blends the photo into the next section */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
            style={{
              height: '45%',
              background:
                'linear-gradient(to top, #090a0e 0%, rgba(9,10,14,0.85) 30%, rgba(9,10,14,0.45) 60%, transparent 100%)',
            }}
          />

          {/* Secondary softer mid-fade for extra smoothness */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 pointer-events-none"
            style={{
              height: '25%',
              background:
                'linear-gradient(to top, #090a0e 0%, rgba(9,10,14,0.6) 50%, transparent 100%)',
            }}
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
