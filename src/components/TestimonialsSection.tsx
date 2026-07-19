import arrowIcon from "../assets/arrow.png";
import { motion } from "framer-motion";
import { useRef } from "react";

import test1 from "../assets/testimonial-1.png";
import test2 from "../assets/testimonial-2.png";
import test3 from "../assets/testimonial-3.png";
import test4 from "../assets/testimonial-4.png";

const testimonials = [
  {
    quote: "He Understands People — And That Changes Everything.",
    name: "Dr. Gaikwad",
    role: "The Smile Architect",
    image: test1,
  },
  {
    quote:
      "Working With Alkesh Doesn't Feel Like Outsourcing, It Feels Like Building Together.",
    name: "Suman Vyas",
    role: "Project Head, DiigiiHost",
    image: test2,
  },
  {
    quote:
      "He Never Talks About Trends. He Talks About Truth, And Somehow, That Always Works.",
    name: "Siddhant Jadhav",
    role: "Graphics & Content Lead",
    image: test3,
  },
  {
    quote:
      "Working With Alkesh Doesn't Feel Like Outsourcing, It Feels Like Building Together.",
    name: "Prajakta",
    role: "Design Lead",
    image: test4,
  },
  {
    quote:
      "Working With Alkesh Doesn't Feel Like Outsourcing, It Feels Like Building Together.",
    name: "Prajakta",
    role: "Design Lead",
    image: test1,
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-surface pt-24 overflow-hidden px-4">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-[40px] font-medium text-[#151515]">
          What People Say
        </h2>
      </div>

      <div className="mt-21 w-full cursor-grab active:cursor-grabbing">
        <motion.div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto pb-12 px-6 md:px-12 hide-scrollbar md:gap-16 lg:gap-28"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              className="flex w-[300px] shrink-0 flex-col justify-between"
            >
              <p className="text-xl font-medium leading-relaxed text-[#151515] opacity-80">
                "{test.quote}"
              </p>
              <div className="mt-8 flex items-center gap-6">
                <img
                  src={test.image}
                  alt={test.name}
                  className="h-12.5 w-12.5 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-xl mb-1.5 text-primary opacity-80">
                    {test.name}
                  </h4>
                  <p className="text-base font-medium text-[#151515] opacity-80">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-6 mt-8 flex justify-center pb-26 border-b border-[#5C5C5C]">
        <button className="flex items-center gap-3 rounded-full border border-[#5C5C5C] bg-transparent transition-colors hover:bg-gray-100">
          <div className="flex -space-x-2 py-3 pl-2.5 pr-2">
            {[test1, test2, test3].map((imgSrc, idx) => (
              <img
                key={idx}
                src={imgSrc}
                alt={`User ${idx + 1}`}
                className="h-10 w-10 rounded-full border-2 border-[#F5F5F5] object-cover"
              />
            ))}
          </div>
          <span className="text-xl font-medium text-[#5C5C5C]">More</span>
          <div className="w-max p-2.5">
            <img src={arrowIcon} alt="redirect arrow" className="h-12 w-12" />
          </div>
        </button>
      </div>
    </section>
  );
}
