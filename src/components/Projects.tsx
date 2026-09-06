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
        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`
                px-4 py-2 rounded-full text-xs font-medium transition-all
                ${activeFilter === filter.value
                  ? 'bg-gradient-to-b from-white/90 to-white/70 text-[#0e1015] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.3)]'
                  : 'bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/[0.1]'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-white/[0.06] backdrop-blur-[36px] border border-white/[0.1] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_16px_40px_rgba(0,0,0,0.5)] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0e] via-transparent to-transparent" />
                {project.freelance && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/[0.15] backdrop-blur-xl text-[10px] font-semibold uppercase tracking-wider text-white border border-white/[0.2]">
                    Freelance
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-white group-hover:text-secondary transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs text-secondary/70 mt-2 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[10px] font-medium text-white/60 border border-white/[0.1]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.06] text-[10px] font-medium text-white/40 border border-white/[0.1]">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span>
                    )}
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">
                      {project.liveUrl ? 'Live' : 'Repository'}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121317] border border-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_24px_60px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/[0.1] hover:bg-white/[0.2] flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Project Image */}
            <div className="relative h-64 sm:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 -mt-16 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                {selectedProject.freelance && (
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                    Freelance Project
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-sm text-secondary/80 mb-6">
                {selectedProject.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-secondary/70">
                      <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-white/[0.08] text-xs font-medium text-white/80 border border-white/[0.15]"
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-white to-white/80 text-[#0e1015] font-semibold text-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.3)] hover:brightness-105 active:scale-[0.98] transition-all"
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
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium text-sm border border-white/[0.2] transition-all"
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
