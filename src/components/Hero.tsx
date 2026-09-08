'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import TwitterImage from '@/components/TwitterImage'
import { heroContent } from '@/data/content'

export default function Hero() {
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef<HTMLElement>(null)
  const scrollLocked = useRef(false)
  const scrollLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  // ── Intro video state ──────────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null)
  // 'playing' | 'fading' | 'done'
  const [introPhase, setIntroPhase] = useState<'playing' | 'fading' | 'done'>('playing')
  // Controls whether the page elements animate in
  const [pageVisible, setPageVisible] = useState(false)
  // Page content ready state — Skip button remains hidden/disabled until page DOM is loaded
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  // Mobile navigation drawer toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ── Monitor DOM page readiness for skip button ─────────────────
  useEffect(() => {
    const checkLoaded = () => {
      if (document.readyState === 'complete') {
        setIsPageLoaded(true)
      }
    }

    if (document.readyState === 'complete') {
      setIsPageLoaded(true)
    } else {
      window.addEventListener('load', checkLoaded)
      // Fallback timer: ensure skip button is enabled within 1.5s max if load event fires late
      const timer = setTimeout(() => setIsPageLoaded(true), 1500)
      return () => {
        window.removeEventListener('load', checkLoaded)
        clearTimeout(timer)
      }
    }
  }, [])

  const handleSkipVideo = () => {
    if (introPhase !== 'playing') return
    if (videoRef.current) {
      videoRef.current.pause()
    }
    sessionStorage.setItem('intro_played', '1')
    setIntroPhase('fading')
    setTimeout(() => {
      setIntroPhase('done')
      setPageVisible(true)
    }, 400)
  }

  // ── Lock scroll position ONLY while intro video is active ─────────
  useEffect(() => {
    if (introPhase === 'done') return

    const lockScroll = () => window.scrollTo(0, 0)
    window.addEventListener('scroll', lockScroll)

    return () => {
      window.removeEventListener('scroll', lockScroll)
    }
  }, [introPhase])

  useEffect(() => {
    const sections = ['projects', 'skills', 'contact']

    const handleScroll = () => {
      // Don't override the pill while the page is still animating to the clicked section
      if (scrollLocked.current) return

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

  // ── Intro video logic ─────────────────────────────────────────
  useEffect(() => {
    // If the video was already watched this session, skip it immediately
    const alreadyWatched = sessionStorage.getItem('intro_played') === '1'
    if (alreadyWatched) {
      setIntroPhase('done')
      setPageVisible(true)
      return
    }

    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      // Remember that the intro has been played for this session
      sessionStorage.setItem('intro_played', '1')
      // Start crossfade-out of overlay
      setIntroPhase('fading')
      // After the CSS transition completes, hide overlay & trigger page entrance
      const t = setTimeout(() => {
        setIntroPhase('done')
        // Small delay so the page is rendered before animating in
        requestAnimationFrame(() => setPageVisible(true))
      }, 800)
      return () => clearTimeout(t)
    }

    video.addEventListener('ended', handleEnded)
    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  // Move the sliding pill to the active nav item
  useEffect(() => {
    if (!navRef.current) return

    if (!activeSection) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }

    const navEl = navRef.current
    const activeLink = navEl.querySelector<HTMLAnchorElement>(`[data-nav-id="${activeSection}"]`)
    if (!activeLink) return

    const navRect = navEl.getBoundingClientRect()
    const linkRect = activeLink.getBoundingClientRect()

    setPillStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    })
  }, [activeSection])

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* ── INTRO VIDEO OVERLAY ─────────────────────────────────── */}
      {introPhase !== 'done' && (
        <div
          className="intro-video-overlay"
          style={{ opacity: introPhase === 'fading' ? 0 : 1 }}
        >
          <video
            ref={videoRef}
            src="/images/0906.mp4"
            autoPlay
            muted
            playsInline
            className="intro-video"
          />

          {/* GATED SKIP BUTTON AT BOTTOM RIGHT — CANNOT APPEAR UNTIL PAGE CONTENT IS LOADED */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 flex items-center pointer-events-auto">
            {isPageLoaded ? (
              <button
                onClick={handleSkipVideo}
                className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.12] hover:bg-white/[0.22] active:scale-95 border border-white/[0.25] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_24px_rgba(0,0,0,0.5)] text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span>Skip Intro</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                  skip_next
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-white/50 text-[10px] font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-ping" />
                <span>Loading page...</span>
              </div>
            )}
          </div>
        </div>
      )}

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

      {/* FLOATING NAVBAR — slides down from top after intro */}
      <header
        className="fixed top-0 inset-x-0 z-50 flex justify-center items-center pt-5 sm:pt-7 px-4 pointer-events-none"
        style={{
          transform: pageVisible ? 'translateY(0)' : 'translateY(-130%)',
          transition: pageVisible
            ? 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s'
            : 'none',
        }}
      >
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

          {/* Nav with sliding pill indicator */}
          <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">
            {/* Sliding glass pill — absolutely positioned inside the nav */}
            <span
              aria-hidden="true"
              className="absolute top-0 h-full rounded-full pointer-events-none"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                boxShadow:
                  'inset 0 1px 0.5px rgba(255,255,255,0.45), 0 2px 12px rgba(0,0,0,0.35)',
                border: '1px solid rgba(255,255,255,0.18)',
                transition:
                  'left 0.38s cubic-bezier(0.34,1.56,0.64,1), width 0.32s cubic-bezier(0.34,1.56,0.64,1), opacity 0.22s ease',
              }}
            />

            {navItems.map((item) => (
              <a
                key={item.id}
                data-nav-id={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  // Lock scroll-handler override for the duration of the smooth-scroll animation
                  scrollLocked.current = true
                  if (scrollLockTimer.current) clearTimeout(scrollLockTimer.current)
                  scrollLockTimer.current = setTimeout(() => {
                    scrollLocked.current = false
                  }, 900)
                  setActiveSection(item.id)
                }}
                className={`relative z-10 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white font-semibold scale-[1.04]'
                    : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
                }`}
                style={{
                  textShadow:
                    activeSection === item.id
                      ? '0 0 14px rgba(255,255,255,0.5)'
                      : 'none',
                  transition: 'color 0.25s ease, transform 0.25s ease, text-shadow 0.25s ease',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-b from-white to-[#dce2f4] text-[#0d0f14] text-xs font-semibold shadow-[inset_0_1px_1px_#ffffff,0_4px_14px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all"
              href="#contact"
            >
              <span>Get in Touch</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>

            {/* Mobile Navigation Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-white/[0.1] hover:bg-white/[0.18] border border-white/[0.18] flex items-center justify-center text-white/80 transition-all active:scale-95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[18px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Floating Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pointer-events-auto w-full max-w-sm mt-3 p-3 rounded-[24px] bg-[#0c0e14]/90 backdrop-blur-3xl border border-white/[0.18] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1.5 animate-modal-open">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setActiveSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeSection === item.id
                    ? 'bg-white/15 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[16px] text-white/40">arrow_forward</span>
              </a>
            ))}
          </div>
        )}
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

          {/* Hero Portrait — same frame as the intro video end for seamless crossfade */}
          <TwitterImage
            src="/images/VideoCapture_20260906-183952.jpg"
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

        {/* FLOATING GLASS CARD - Overlays Image at Bottom — slides up from bottom after intro */}
        <div className="relative z-20 flex-1 flex items-end justify-center pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
          <div
            className="w-full max-w-5xl p-5 sm:p-7 md:p-8 rounded-[30px] sm:rounded-[36px] liquid-glass-card"
            style={{
              transform: pageVisible ? 'translateY(0)' : 'translateY(120%)',
              opacity: pageVisible ? 1 : 0,
              transition: pageVisible
                ? 'transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s, opacity 0.55s ease 0.15s'
                : 'none',
            }}
          >
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
    </>
  )
}
