'use client'

import { contactMethods } from '@/data/contact'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `mailto:mohamed.aboellil0@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 16px rgba(0,0,0,0.4)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#c5c6ca' }}>
              Get in Touch
            </span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', lineHeight: '40px', margin: 0 }}>
            Let&apos;s Work Together
          </h2>
          <p style={{ fontSize: 14, color: '#c5c6ca', marginTop: 12, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: '20px' }}>
            Have a project in mind or looking for a backend developer? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Two-column layout: contact cards left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — Contact Method Cards stacked vertically */}
          <div className="flex flex-col gap-4 h-full">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-5 transition-all duration-300 flex-1"
                style={{
                  borderRadius: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.07) 100%)',
                  backdropFilter: 'blur(36px) saturate(180%)',
                  boxShadow: 'inset 0 1.5px 1px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08), 0 16px 40px -6px rgba(0,0,0,0.7)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.10) 100%)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.07) 100%)'
                }}
              >
                {/* Icon — active milk pill */}
                <div
                  className="shrink-0 w-14 h-14 flex items-center justify-center"
                  style={{
                    borderRadius: '1rem',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(200,206,218,0.65) 100%)',
                    boxShadow: 'inset 0 1.5px 1px rgba(255,255,255,0.95), inset 0 -1.5px 1.5px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.35)',
                  }}
                >
                  <span className="material-symbols-outlined text-[24px]" style={{ color: '#14161d' }}>
                    {method.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 3 }}>
                    {method.label}
                  </p>
                  <p className="truncate group-hover:text-white transition-colors" style={{ fontSize: 14, color: '#e3e2e7', lineHeight: '20px' }}>
                    {method.value}
                  </p>
                </div>

                {/* Arrow */}
                <span className="material-symbols-outlined shrink-0 group-hover:translate-x-1 transition-all duration-200" style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)' }}>
                  arrow_forward
                </span>
              </a>
            ))}
          </div>

          {/* RIGHT — Contact Form Liquid Glass Card */}
          <div
            style={{
              borderRadius: '1.75rem',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.07) 100%)',
              backdropFilter: 'blur(36px) saturate(180%)',
              boxShadow: 'inset 0 1.5px 1px rgba(255,255,255,0.25), inset 0 -1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px -10px rgba(0,0,0,0.8)',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top specular sheen */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70%',
                height: '1.5px',
                background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.55), transparent)',
                pointerEvents: 'none',
              }}
            />

            {/* Card header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0"
                style={{
                  borderRadius: '0.875rem',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(200,206,218,0.65) 100%)',
                  boxShadow: 'inset 0 1.5px 1px rgba(255,255,255,0.95), inset 0 -1.5px 1.5px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.35)',
                }}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ color: '#14161d' }}>send</span>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 2 }}>
                  Send a Message
                </p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>
                  Drop me a line directly
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-name" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '9999px',
                    background: 'rgba(0,0,0,0.35)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.12)',
                    border: 'none', outline: 'none', color: '#fff', fontSize: 14, boxSizing: 'border-box',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-email" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '9999px',
                    background: 'rgba(0,0,0,0.35)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.12)',
                    border: 'none', outline: 'none', color: '#fff', fontSize: 14, boxSizing: 'border-box',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-message" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: '1.25rem',
                    background: 'rgba(0,0,0,0.35)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6), inset 0 -1px 1px rgba(255,255,255,0.1), 0 0 0 1px rgba(255,255,255,0.12)',
                    border: 'none', outline: 'none', color: '#fff', fontSize: 14,
                    resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                {sent ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#4ade80' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>
                    Opening your mail client…
                  </span>
                ) : <span />}
                <button
                  type="submit"
                  className="flex items-center gap-2 active:scale-95 transition-all"
                  style={{
                    padding: '12px 24px', borderRadius: '9999px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(200,206,218,0.65) 100%)',
                    boxShadow: 'inset 0 1.5px 1px rgba(255,255,255,0.95), inset 0 -1.5px 1.5px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.35)',
                    border: 'none', cursor: 'pointer', color: '#14161d',
                    fontSize: 14, fontWeight: 600, letterSpacing: '-0.005em',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Focus ring for inputs via global style */}
      <style>{`
        .contact-input::placeholder { color: #687082; }
        .contact-input:focus {
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.6), 0 0 0 1.5px rgba(255,255,255,0.4), 0 0 20px rgba(255,255,255,0.15) !important;
        }
      `}</style>
    </section>
  )
}
