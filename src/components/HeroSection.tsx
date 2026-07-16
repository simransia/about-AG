import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_IMAGE } from "../data/content";
import Navbar from "./Navbar";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ['start start', 'end start'],
  // })

  // // Light parallax effect for the background image
  // const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={containerRef}
      className="relative h-[881px] overflow-hidden bg-black"
    >
      <Navbar />
      <img
        src={HERO_IMAGE}
        alt="Alkesh Gupta"
        className="h-full w-full object-cover object-top"
      />

      <div className="absolute left-1/2 top-[450px] transform -translate-x-1/2 z-10 max-w-[721px] px-6 pt-20 text-center text-[40px] font-semibold leading-tight text-white">
        Hi, I&apos;m{" "}
        <span className="bg-linear-to-r from-[#F8EEA4] to-[#C7A008] bg-clip-text text-transparent">
          Alkesh Gupta
        </span>{" "}
        — a Founder, Creator, and Soul Alchemist.
      </div>
    </section>
  );
}
