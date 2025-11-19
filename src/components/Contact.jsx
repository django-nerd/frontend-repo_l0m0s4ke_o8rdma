import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // keep existing backend integrations — assuming /api/contact exists
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus({ ok: true, msg: 'Thanks — we\'ll be in touch shortly.' })
        e.currentTarget.reset()
      } else {
        const t = await res.text()
        setStatus({ ok: false, msg: t || 'Something went wrong.' })
      }
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

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
          Contact us
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-700">Name</label>
            <input name="name" required className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700">Email</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-neutral-700">Message</label>
            <textarea name="message" rows="4" required className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition-[box-shadow,transform] focus:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 disabled:opacity-50"
            >
              {loading ? 'Sending…' : 'Send message'}
            </motion.button>
            {status && (
              <span className={`text-sm ${status.ok ? 'text-emerald-600' : 'text-rose-600'}`}>{status.msg}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
