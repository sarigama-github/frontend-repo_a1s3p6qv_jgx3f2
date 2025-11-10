import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow" />
          <span className="font-semibold tracking-tight text-slate-800">My Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <button onClick={() => scrollTo('about')} className="hover:text-slate-900 transition-colors">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-slate-900 transition-colors">Projects</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900 transition-colors">Contact</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="ml-2 inline-flex items-center rounded-md bg-slate-900 text-white px-3 py-2 hover:bg-slate-800 transition-colors">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const splineRef = useRef(null)

  return (
    <section className="relative min-h-[92vh] pt-24" id="home">
      <div className="absolute inset-0">
        <Spline
          ref={splineRef}
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 text-white px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Creative Developer crafting modern, interactive experiences
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-xl">
              I build playful, performant web apps with a focus on delightful UX, clean code, and solid architecture.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" onClick={(e)=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-3 hover:bg-slate-50 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

function About() {
  const skills = ['React', 'TypeScript', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind', 'Framer Motion', 'Vite']
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About Me</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a full‑stack developer who loves merging design and engineering to ship products people enjoy using. I obsess over micro‑interactions, accessibility, and performance.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Lately, I’ve been exploring real‑time 3D on the web and playful motion to bring interfaces to life.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Skills</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((s) => (
                <div key={s} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-800 shadow-sm hover:shadow transition-shadow">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Hero',
      tag: 'Frontend',
      desc: 'A playful, modern landing experience powered by Spline and smooth UI.',
      link: '#',
    },
    {
      title: 'API‑Driven App',
      tag: 'Full‑stack',
      desc: 'Clean backend services with FastAPI and a sleek React client.',
      link: '#',
    },
    {
      title: 'Design System',
      tag: 'UI/UX',
      desc: 'Composable components, robust tokens, and delightful motion.',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="hidden sm:inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900">Let’s build yours →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-indigo-200 via-violet-200 to-cyan-200" />
              <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{p.tag}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact</h2>
            <p className="mt-4 text-slate-700">Have a project in mind or just want to say hi? I’d love to hear from you.</p>
            <div className="mt-6 rounded-xl border border-slate-200 p-6 bg-slate-50">
              <p className="text-sm text-slate-600">Email</p>
              <a href="mailto:hello@example.com" className="text-slate-900 font-medium hover:underline">hello@example.com</a>
              <p className="mt-4 text-sm text-slate-600">Social</p>
              <div className="mt-2 flex items-center gap-3 text-slate-700">
                <a href="#" className="hover:text-slate-900">Twitter</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-900">GitHub</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-900">LinkedIn</a>
              </div>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Tell me about your project..." />
            </div>
            <button className="mt-4 inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 transition-colors">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <a href="#home" onClick={(e)=>{e.preventDefault();document.getElementById('home')?.scrollIntoView({behavior:'smooth'})}} className="text-sm text-slate-700 hover:text-slate-900">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
