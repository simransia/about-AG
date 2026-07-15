import FadeIn from "./FadeIn";
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
    <section className="bg-surface py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-[40px] font-medium text-[#151515] md:text-[40px]">
          What People Say
        </h2>
      </div>

      <div className="mt-20 w-full cursor-grab active:cursor-grabbing">
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
              <p className="text-base font-medium leading-relaxed text-gray-500 md:text-[17px]">
                "{test.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1a3c34]">{test.name}</h4>
                  <p className="text-[13px] font-medium text-gray-500">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-6 mt-8 flex justify-center border-b border-gray-300 pb-20">
        <button className="flex items-center gap-3 rounded-full border border-[#5C5C5C] bg-transparent py-1.5 pl-2 pr-1.5 transition-colors hover:bg-gray-100">
          <div className="flex -space-x-2">
            <img
              src={test1}
              alt="User 1"
              className="h-8 w-8 rounded-full border-2 border-[#F5F5F5] object-cover"
            />
            <img
              src={test2}
              alt="User 2"
              className="h-8 w-8 rounded-full border-2 border-[#F5F5F5] object-cover"
            />
            <img
              src={test3}
              alt="User 3"
              className="h-8 w-8 rounded-full border-2 border-[#F5F5F5] object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 px-2">More</span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#052C27] text-white">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
