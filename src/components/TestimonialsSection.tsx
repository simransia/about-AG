import FadeIn from './FadeIn'
import { motion } from 'framer-motion'
import { useRef } from 'react'

import test1 from '../assets/testimonial-1.png'
import test2 from '../assets/testimonial-2.png'
import test3 from '../assets/testimonial-3.png'
import test4 from '../assets/testimonial-4.png'

const testimonials = [
  {
    quote: "He Understands People — And That Changes Everything.",
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    image: test1,
  },
  {
    quote: "Working With Alkesh Doesn't Feel Like Outsourcing, It Feels Like Building Together.",
    name: "Suman Vyas",
    role: "Project Head, DiigiiHost",
    image: test2,
  },
  {
    quote: "He Never Talks About Trends. He Talks About Truth, And Somehow, That Always Works.",
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    image: test3,
  },
  {
    quote: "Working With Alkesh Doesn't Feel Like Outsourcing, It Feels Like Building Together.",
    name: "Prajakta",
    role: "Design Lead",
    image: test4,
  }
]

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-surface px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-5xl">
            What People Say
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 w-full cursor-grab overflow-hidden active:cursor-grabbing">
            <motion.div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 pl-4 pr-4 pt-4 hide-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {testimonials.map((test, idx) => (
                <motion.div
                  key={idx}
                  className="flex w-[85vw] shrink-0 flex-col justify-between rounded-2xl bg-white p-8 shadow-sm md:w-[400px]"
                >
                  <p className="text-xl font-medium leading-relaxed text-gray-800 md:text-2xl">
                    "{test.quote}"
                  </p>
                  <div className="mt-12 flex items-center gap-4">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="h-14 w-14 rounded-full object-cover grayscale"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{test.name}</h4>
                      <p className="text-sm text-gray-500">{test.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
