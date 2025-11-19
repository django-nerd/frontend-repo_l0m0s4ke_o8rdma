import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Amira', role: 'Founder', quote: 'The most focused learning experience I\'ve tried. Quietly excellent.' },
  { name: 'Jon', role: 'PM', quote: 'Clear, concise, and practical. It made momentum feel easy.' },
  { name: 'Maya', role: 'Designer', quote: 'Minimalist structure with premium feel. I kept wanting to learn.' },
]

function Testimonials() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
        >
          Kind words
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <p className="text-neutral-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-neutral-500">{t.name} — {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
