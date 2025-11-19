import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -30]) // subtle parallax
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to ensure text contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            Ascendia — learn with clarity
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Minimal learning for maximal growth
          </h1>

          <p className="mt-5 max-w-xl text-base text-neutral-600 sm:text-lg">
            Curated courses, refined instruction, and a distraction‑free experience designed to help you advance with focus.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
            >
              Explore Courses
            </motion.a>
            <motion.a
              href="#why"
              whileHover={{ x: 2 }}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Why Ascendia
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
