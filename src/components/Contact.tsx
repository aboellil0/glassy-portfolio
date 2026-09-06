'use client'

import { contactMethods } from '@/data/contact'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15] mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm text-secondary/80 mt-3 max-w-lg mx-auto">
            Have a project in mind or looking for a backend developer? I’d love to hear from you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/[0.06] backdrop-blur-[36px] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-white/20 to-white/10 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_24px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[24px] text-white">
                  {method.icon}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">{method.label}</p>
                <p className="text-sm text-white group-hover:text-secondary transition-colors">{method.value}</p>
              </div>
              <span className="material-symbols-outlined text-[16px] text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">arrow_forward</span>
            </a>
          ))}
        </div>

        {/* Availability Note */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.15]">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-white/80">
              Currently <span className="font-semibold text-white">available</span> for freelance projects
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
