'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projects, projectFilters, Project } from '@/data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => {
        if (activeFilter === 'freelance') return p.freelance
        return p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      })

  return (
    <section id="projects" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15] mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-secondary/80 mt-2 max-w-md">
              Production-ready backend systems delivered for real clients across various industries.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-[30px] bg-white/[0.06] backdrop-blur-[36px] saturate-[180%] border border-white/[0.1] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.25),inset_0_-1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_-6px_rgba(0,0,0,0.7)] hover:bg-white/[0.09] hover:border-white/[0.22] hover:shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.45),inset_0_-1.5px_1.5px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.18),0_24px_50px_-8px_rgba(0,0,0,0.85),0_0_30px_rgba(255,255,255,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col p-3.5 sm:p-4"
            >
              {/* Top Specular Sheen (simulates upper glass curve light entry) */}
              <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[0.5px] z-20" />

              {/* Project Image - Curved pop-up container with rim light highlight */}
              <div className="relative w-full h-48 sm:h-52 rounded-[22px] overflow-hidden border border-white/[0.15] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_10px_28px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.6),0_16px_36px_rgba(0,0,0,0.65)] group-hover:scale-[1.02] transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {project.freelance && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/[0.18] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.5)] border border-white/[0.25] text-[10px] font-bold uppercase tracking-wider flex items-center z-10">
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
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-[10px] font-medium text-white/70 border border-white/[0.1]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1 rounded-full bg-white/[0.06] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] text-[10px] font-medium text-white/40 border border-white/[0.1]">
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
                  <div className="w-8 h-8 rounded-full bg-white/[0.06] group-hover:bg-gradient-to-b group-hover:from-white/[0.85] group-hover:to-[#c5cbda]/[0.65] text-white/60 group-hover:text-[#14161d] flex items-center justify-center transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.3)]">
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-2xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#0d0e12]/90 backdrop-blur-[42px] saturate-[190%] border border-white/[0.18] shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.35),inset_0_-1.5px_1.5px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.12),0_24px_60px_-10px_rgba(0,0,0,0.85)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Specular Sheen line */}
            <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[0.5px] z-20" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/[0.1] hover:bg-white/[0.2] flex items-center justify-center text-white/70 hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Project Image */}
            <div className="relative h-60 sm:h-72 mx-5 sm:mx-8 mt-5 sm:mt-8 rounded-[24px] overflow-hidden border border-white/[0.18] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_12px_32px_rgba(0,0,0,0.6)]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

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
        </div>
      )}
    </section>
  )
}
