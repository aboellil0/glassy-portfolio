'use client'

import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15] mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience & Education
            </h2>
            <p className="text-sm text-secondary/80 mt-2 max-w-md">
              A journey through freelance work, leadership, and academic achievements.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-white to-white/60 shadow-[0_0_12px_rgba(255,255,255,0.5)] transform -translate-x-[7px] md:-translate-x-[8px] mt-6" />

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="rounded-2xl bg-white/[0.06] backdrop-blur-[36px] border border-white/[0.1] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_16px_40px_rgba(0,0,0,0.4)]">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-secondary/80">{item.company}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-medium text-white/60 px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.1]">
                          {item.period}
                        </span>
                        <span className="text-[10px] text-white/40 mt-1">{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-secondary/70 mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2 text-xs text-secondary/60">
                          <span className="material-symbols-outlined text-[14px] text-primary mt-0.5">arrow_right</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
