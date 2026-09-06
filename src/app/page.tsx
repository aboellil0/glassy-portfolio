import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative z-10 w-full">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-white/[0.06] bg-[#07080a]/60">
        <p className="text-xs text-white/40">
          © 2024 Mohamed Aboellil. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
