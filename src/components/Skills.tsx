'use client'

import { useState } from 'react'
import { skillCategories } from '@/data/skills'

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = skillCategories[activeIndex]

  return (
    <section id="skills" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15] mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-white/40 mt-2 max-w-md">
            A curated stack of technologies I use to build fast, scalable, and maintainable systems.
          </p>
        </div>

        {/* Main Layout: Sidebar + Card */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── Left Sidebar: Category Buttons ── */}
          <aside className="flex flex-row flex-wrap lg:flex-col gap-2 lg:w-60 shrink-0">
            {skillCategories.map((cat, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={i}
                  id={`skills-cat-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium
                    transition-all duration-300 text-left w-full
                    ${isActive ? 'skills-btn-active' : 'skills-btn-idle'}
                  `}
                >
                  {/* Icon container */}
                  <span
                    className={`
                      w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                      ${isActive
                        ? 'bg-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
                        : 'bg-white/[0.05] group-hover:bg-white/[0.08]'
                      }
                    `}
                  >
                    <span
                      className={`material-symbols-outlined text-[16px] transition-colors duration-300
                        ${isActive ? 'text-[#14161D]' : 'text-white/50 group-hover:text-white/80'}
                      `}
                    >
                      {cat.icon}
                    </span>
                  </span>

                  <span className={`transition-colors duration-300 ${isActive ? 'text-[#14161D]' : 'text-white/55 group-hover:text-white/90'}`}>
                    {cat.title}
                  </span>

                  {/* Active arrow indicator */}
                  {isActive && (
                    <span className="material-symbols-outlined text-[14px] text-[#14161D]/50 ml-auto shrink-0">
                      chevron_right
                    </span>
                  )}
                </button>
              )
            })}
          </aside>

          {/* ── Right: Glassy Skill Card ── */}
          <div
            key={activeIndex}
            className="flex-1 rounded-2xl p-8 skills-card"
          >
            {/* Card Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-2xl bg-white/[0.1] flex items-center justify-center border border-white/[0.18] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                <span className="material-symbols-outlined text-[20px] text-white">
                  {active.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{active.title}</h3>
                <p className="text-xs text-white/35 mt-0.5">{active.skills.length} technologies</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.08] mb-7 rounded-full" />

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2.5">
              {active.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skills-pill"
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
