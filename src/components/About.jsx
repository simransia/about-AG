import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="/about-agphoto.png"
        alt="About"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 flex min-h-screen items-center px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-xl text-white">
          <motion.p
            variants={item}
            className="mb-3 uppercase tracking-[0.3em] text-amber-400"
          >
            About Me
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-6 text-5xl font-bold leading-tight md:text-6xl"
          >
            Building beautiful
            <br />
            frontend experiences.
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 text-lg leading-8 text-white/80"
          >
            I create responsive, accessible and high-performance web
            applications using React, Tailwind CSS and modern frontend tools.
          </motion.p>

          <motion.p
            variants={item}
            className="mb-10 text-lg leading-8 text-white/80"
          >
            My focus is delivering polished interfaces with smooth animations
            and delightful user experiences.
          </motion.p>

          <motion.div variants={item}>
            <button className="rounded-full border border-amber-400 px-8 py-3 font-medium text-white transition hover:bg-amber-400 hover:text-black">
              Download Resume
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
