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
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-white/40 mt-2 max-w-md">
            A curated stack of technologies I use to build fast, scalable, and maintainable systems.
          </p>
        </div>

        {/* Main Layout: Sidebar + Card */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* ── Left Sidebar / Mobile Horizontal Swipeable Category Track ── */}
          <aside className="flex flex-row overflow-x-auto custom-glass-scrollbar lg:overflow-visible flex-nowrap lg:flex-col gap-2.5 pb-2 lg:pb-0 lg:w-60 shrink-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            {skillCategories.map((cat, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={i}
                  id={`skills-cat-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    group flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-medium
                    transition-all duration-300 text-left shrink-0 lg:shrink lg:w-full min-w-max lg:min-w-0 active:scale-95
                    ${isActive ? 'skills-btn-active' : 'skills-btn-idle'}
                  `}
                >
                  {/* Icon container */}
                  <span
                    className={`
                      w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                      ${isActive
                        ? 'bg-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]'
                        : 'bg-white/[0.05] group-hover:bg-white/[0.08]'
                      }
                    `}
                  >
                    <span
                      className={`material-symbols-outlined text-[15px] sm:text-[16px] transition-colors duration-300
                        ${isActive ? 'text-[#14161D]' : 'text-white/50 group-hover:text-white/80'}
                      `}
                    >
                      {cat.icon}
                    </span>
                  </span>

                  <span className={`transition-colors duration-300 ${isActive ? 'text-[#14161D]' : 'text-white/55 group-hover:text-white/90'}`}>
                    {cat.title}
                  </span>

                  {/* Active arrow indicator (desktop only) */}
                  {isActive && (
                    <span className="hidden lg:inline-block material-symbols-outlined text-[14px] text-[#14161D]/50 ml-auto shrink-0">
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
            className="flex-1 rounded-[28px] sm:rounded-3xl p-5 sm:p-7 md:p-8 skills-card"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.1] flex items-center justify-center border border-white/[0.18] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shrink-0">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-white">
                  {active.icon}
                </span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">{active.title}</h3>
                <p className="text-[11px] sm:text-xs text-white/35 mt-0.5">{active.skills.length} technologies</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/[0.08] mb-5 sm:mb-7 rounded-full" />

            {/* Skill Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {active.skills.map((skill, i) => (
                <div
                  key={i}
                  className="skills-pill text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2"
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
