import Hero from './components/Hero'
import Courses from './components/Courses'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-rose-100 selection:text-rose-800">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-sm font-semibold tracking-tight">Ascendia</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#courses" className="hover:text-neutral-900 transition-colors">Courses</a>
            <a href="#why" className="hover:text-neutral-900 transition-colors">Why</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
          <a href="#courses" className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800">Explore</a>
        </div>
      </header>

      <main className="[&>*]:scroll-mt-20">
        <Hero />
        <Courses />
        <Why />
        <Testimonials />
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
