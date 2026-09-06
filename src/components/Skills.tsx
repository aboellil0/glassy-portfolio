'use client'

import { skillCategories } from '@/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15] mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm text-secondary/80 mt-2 max-w-md">
              Backend development expertise with modern frameworks and architectural patterns.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/[0.06] backdrop-blur-[36px] border border-white/[0.1] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_16px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/20 to-white/10 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                  <span className="material-symbols-outlined text-[20px] text-white">
                    {index === 0 ? 'api' : index === 1 ? 'storage' : index === 2 ? 'cloud' : 'architecture'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-secondary/90">{skill.name}</span>
                      <span className="text-xs text-white/50 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.08] overflow-hidden shadow-[inset_0_1px_1px_rgba(0,0,0,0.3)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-white/60 to-white/90 shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
