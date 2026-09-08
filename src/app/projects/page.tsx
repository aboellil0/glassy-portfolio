'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { projects, projectFilters, Project } from '@/data/projects'

export default function AllProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [isClosing, setIsClosing] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [slideIndex, setSlideIndex] = useState(0)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleClose = () => {
        if (isClosing) return
        setIsClosing(true)
        setTimeout(() => {
            setSelectedProject(null)
            setIsClosing(false)
            setSlideIndex(0)
        }, 200)
    }

    const handleSelectProject = (project: Project) => {
        setSlideIndex(0)
        setSelectedProject(project)
    }

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden'
            document.body.classList.add('modal-open')
        } else {
            document.body.style.overflow = 'unset'
            document.body.classList.remove('modal-open')
        }
        return () => {
            document.body.style.overflow = 'unset'
            document.body.classList.remove('modal-open')
        }
    }, [selectedProject])

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => {
            if (activeFilter === 'freelance') return p.freelance
            return p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
        })

    return (
        <main className="relative min-h-screen w-full bg-[#090a0e] overflow-x-hidden">

            {/*
        ── GPU-SAFE BACKGROUND ────────────────────────────────────────────────
        All blobs use only `transform` (translate/scale) + `opacity` animations.
        No `top` / `left` animation → zero layout reflow, runs on the compositor thread.
        Each blob is isolated to its own compositing layer via will-change + translateZ.
      */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                {/* Blob A – top-left indigo */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 700, height: 700,
                        top: '-10%', left: '-8%',
                        background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        willChange: 'transform, opacity',
                        animation: 'pg-blob-a 28s ease-in-out infinite',
                    }}
                />
                {/* Blob B – bottom-right blue */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 600, height: 600,
                        bottom: '-8%', right: '-6%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
                        filter: 'blur(90px)',
                        willChange: 'transform, opacity',
                        animation: 'pg-blob-b 34s ease-in-out infinite',
                    }}
                />
                {/* Blob C – centre violet */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 500, height: 500,
                        top: '40%', left: '45%',
                        transform: 'translate(-50%, -50%)',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                        willChange: 'transform, opacity',
                        animation: 'pg-blob-c 40s ease-in-out infinite',
                    }}
                />
                {/* Blob D – mid-left cyan */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 420, height: 420,
                        top: '55%', left: '5%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 70%)',
                        filter: 'blur(85px)',
                        willChange: 'transform, opacity',
                        animation: 'pg-blob-d 45s ease-in-out infinite 6s',
                    }}
                />
            </div>

            {/* Keyframes injected as a style tag – pure transform-based, zero reflow */}
            <style>{`
        @keyframes pg-blob-a {
          0%,100% { transform: translate(0,0) scale(1);      opacity:.9; }
          33%      { transform: translate(60px,-40px) scale(1.12); opacity:1; }
          66%      { transform: translate(-30px,50px) scale(.92); opacity:.8; }
        }
        @keyframes pg-blob-b {
          0%,100% { transform: translate(0,0) scale(1);      opacity:.85; }
          40%      { transform: translate(-70px,-50px) scale(1.1); opacity:1; }
          75%      { transform: translate(40px,30px) scale(.9); opacity:.75; }
        }
        @keyframes pg-blob-c {
          0%,100% { transform: translate(-50%,-50%) scale(1);    opacity:.8; }
          50%      { transform: translate(-50%,-50%) scale(1.18); opacity:1; }
        }
        @keyframes pg-blob-d {
          0%,100% { transform: translate(0,0) scale(1);      opacity:.7; }
          45%      { transform: translate(50px,-60px) scale(1.15); opacity:.9; }
        }
      `}</style>

            {/* ── TOP NAV ─────────────────────────────────────────────────────────── */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 sm:px-10 py-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.85] to-[#c8ceda]/[0.7] text-[#14161d] font-semibold text-sm shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1.5px_1.5px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.35)] hover:from-white hover:to-[#d8dce8] active:scale-95 transition-all duration-200"
                >
                    <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    <span>Back to Portfolio</span>
                </Link>
            </header>

            {/* ── PAGE CONTENT ────────────────────────────────────────────────────── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

                {/* Page header */}
                <div className="mb-14 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                        All Projects
                    </h1>
                    <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
                        Every backend system, API, and platform I&apos;ve built — from freelance deliveries to personal experiments.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-white/30">{projects.length} projects</span>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
                    </div>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                    {projectFilters.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`
                px-4 py-2 rounded-full text-xs transition-all active:scale-95
                ${activeFilter === filter.value
                                    ? 'bg-gradient-to-b from-white/[0.85] to-[#c8ceda]/[0.7] text-[#14161d] font-semibold shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1.5px_1.5px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.35)]'
                                    : 'bg-white/[0.06] hover:bg-white/[0.12] text-white/70 hover:text-white font-medium backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.25)] border border-white/[0.08]'
                                }
              `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Row count */}
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-xs text-white/30 font-medium">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                {/* ── PROJECTS GRID ──────────────────────────────────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectProject(project)}
                            /*
                              Performance notes:
                              - `isolation-isolate` creates a new stacking context so backdrop-blur
                                doesn't repaint neighbours.
                              - hover only animates `transform` + `box-shadow` – both compositor-only.
                              - No filter changes on hover (filter changes force rasterization).
                            */
                            className="group relative cursor-pointer rounded-[30px] bg-white/[0.06] backdrop-blur-[24px] saturate-[160%] border border-white/[0.1] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.22),inset_0_-1px_2px_rgba(0,0,0,0.35),0_16px_40px_-6px_rgba(0,0,0,0.65)] hover:bg-white/[0.09] hover:border-white/[0.2] hover:-translate-y-1.5 transition-transform duration-300 overflow-hidden flex flex-col p-3.5 sm:p-4 [isolation:isolate]"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Top Specular Sheen */}
                            <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent z-20" />

                            {/* Project Image */}
                            <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden border border-white/[0.12] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),0_10px_28px_rgba(0,0,0,0.45)] group-hover:scale-[1.02] transition-transform duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {project.freelance && (
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/[0.18] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.4)] border border-white/[0.22] text-[10px] font-bold uppercase tracking-wider flex items-center z-10">
                                        <span className={project.lightImage ? 'text-white' : 'text-black'}>
                                            Freelance
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="pt-4 px-1 pb-1 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-secondary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-secondary/70 mt-2 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-sm text-[10px] font-medium text-white/70 border border-white/[0.1]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[10px] font-medium text-white/40 border border-white/[0.1]">
                                                +{project.tags.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-white/[0.08]">
                                    <div className="flex items-center gap-2">
                                        {project.liveUrl && (
                                            <span className="material-symbols-outlined text-[15px] text-white">check_circle</span>
                                        )}
                                        <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">
                                            {project.liveUrl ? 'Live System' : 'Repository'}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/[0.06] group-hover:bg-gradient-to-b group-hover:from-white/[0.85] group-hover:to-[#c5cbda]/[0.65] text-white/60 group-hover:text-[#14161d] flex items-center justify-center transition-all duration-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROJECT MODAL ───────────────────────────────────────────────────── */}
            {mounted && selectedProject && createPortal(
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${isClosing ? 'animate-backdrop-close' : 'animate-backdrop-open'
                        }`}
                    onClick={handleClose}
                >
                    <div
                        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-glass-scrollbar rounded-[32px] bg-white/[0.07] backdrop-blur-[36px] border border-white/[0.22] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1px_2px_rgba(0,0,0,0.4),0_24px_60px_rgba(0,0,0,0.85)] ${isClosing ? 'animate-modal-close' : 'animate-modal-open'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-20" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.1] hover:bg-white/[0.2] flex items-center justify-center text-white/70 hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                        >
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>

                        {/* Image Slider */}
                        {(() => {
                            const imgs = selectedProject.images?.length ? selectedProject.images : [selectedProject.image]
                            const total = imgs.length
                            const prev = () => setSlideIndex(i => (i - 1 + total) % total)
                            const next = () => setSlideIndex(i => (i + 1) % total)
                            return (
                                <div className="relative mx-5 sm:mx-8 mt-5 sm:mt-8">
                                    {/* Slide track */}
                                    <div className="relative h-60 sm:h-72 rounded-[24px] overflow-hidden border border-white/[0.18] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_12px_32px_rgba(0,0,0,0.6)]">
                                        {imgs.map((src, i) => (
                                            <div
                                                key={i}
                                                className="absolute inset-0 transition-opacity duration-500"
                                                style={{ opacity: i === slideIndex ? 1 : 0, pointerEvents: i === slideIndex ? 'auto' : 'none' }}
                                            >
                                                <Image src={src} alt={`${selectedProject.title} screenshot ${i + 1}`} fill className="object-cover" />
                                            </div>
                                        ))}

                                        {/* Prev / Next */}
                                        {total > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); prev() }}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/[0.18] backdrop-blur-2xl border border-white/[0.25] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-200 active:scale-95 hover:bg-white/[0.28]"
                                                >
                                                    <span className={`material-symbols-outlined text-[18px] ${selectedProject.lightImage ? 'text-white' : 'text-black'}`}>chevron_left</span>
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); next() }}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/[0.18] backdrop-blur-2xl border border-white/[0.25] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-200 active:scale-95 hover:bg-white/[0.28]"
                                                >
                                                    <span className={`material-symbols-outlined text-[18px] ${selectedProject.lightImage ? 'text-white' : 'text-black'}`}>chevron_right</span>
                                                </button>
                                            </>
                                        )}

                                        {/* Counter badge */}
                                        {total > 1 && (
                                            <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold">
                                                {slideIndex + 1} / {total}
                                            </div>
                                        )}
                                    </div>

                                    {/* Dot indicators */}
                                    {total > 1 && (
                                        <div className="flex justify-center gap-1.5 mt-3">
                                            {imgs.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => { e.stopPropagation(); setSlideIndex(i) }}
                                                    className={`rounded-full transition-all duration-300 ${
                                                        i === slideIndex
                                                            ? 'w-4 h-1.5 bg-white'
                                                            : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })()}

                        {/* Content */}
                        <div className="p-6 sm:p-8 relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                {selectedProject.freelance && (
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                                        Freelance Project
                                    </span>
                                )}
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                {selectedProject.title}
                            </h2>

                            <p className="text-sm text-secondary/80 mb-6 leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {selectedProject.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-secondary/80">
                                            <span className="material-symbols-outlined text-[16px] text-white mt-0.5">check</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl text-xs font-medium text-white/90 border border-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-white/[0.85] to-[#c5cbda]/[0.65] text-[#14161d] font-semibold text-sm shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),inset_0_-1.5px_1.5px_rgba(0,0,0,0.15),0_4px_16px_rgba(0,0,0,0.35)] active:scale-95 transition-all"
                                    >
                                        <span>View Live</span>
                                        <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                                    </a>
                                )}
                                {selectedProject.repoUrl && (
                                    <a
                                        href={selectedProject.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-sm border border-white/[0.18] backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-95 transition-all"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">code</span>
                                        <span>View Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </main>
    )
}
