import { motion } from 'framer-motion'
import { Star, Flame, Sparkles } from 'lucide-react'

const courses = [
  {
    title: 'Product Strategy Essentials',
    tag: 'Most Popular',
    description: 'Build a crisp, outcome‑driven strategy with minimal noise and maximum clarity.',
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: 'Design Systems, Minimalist Edition',
    tag: 'New',
    description: 'Create scalable, minimalist systems with typography, spacing, and constraints.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'AI for Operators',
    tag: 'Core',
    description: 'Automate workflows and make smarter decisions with practical AI building blocks.',
    icon: <Flame className="h-5 w-5" />,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function Courses() {
  return (
    <section id="courses" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Featured Courses</h2>
            <p className="mt-2 max-w-xl text-neutral-600">Focused, modern, and built to make progress feel effortless.</p>
          </div>
          <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-700">View all</a>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {courses.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-neutral-900">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-neutral-700 ring-1 ring-inset ring-neutral-200 group-hover:scale-105 transition-transform">
                  {c.icon}
                </div>
                <div className="ml-auto text-xs font-medium text-rose-600">{c.tag}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{c.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900/80 group-hover:text-neutral-900">
                Explore
                <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
