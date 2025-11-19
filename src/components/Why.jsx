import { motion } from 'framer-motion'
import { Shield, Timer, LineChart, Sparkles } from 'lucide-react'

const values = [
  {
    title: 'Clarity First',
    desc: 'No clutter. Only what helps you move forward.',
    icon: Shield,
  },
  {
    title: 'Time‑Smart',
    desc: 'Short, dense modules with crisp outcomes.',
    icon: Timer,
  },
  {
    title: 'Progress You Can Feel',
    desc: 'Small steps, steady momentum, real results.',
    icon: LineChart,
  },
  {
    title: 'Refined by Design',
    desc: 'Premium typography, pacing, and flow.',
    icon: Sparkles,
  },
]

function Why() {
  return (
    <section id="why" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Why Ascendia</h2>
          <p className="mt-2 max-w-xl text-neutral-600">Everything you need to learn clearly — nothing you don’t.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {values.map(({ title, desc, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-700 ring-1 ring-inset ring-neutral-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why
