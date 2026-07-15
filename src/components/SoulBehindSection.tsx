import FadeIn from "./FadeIn";
import PORTRAIT_IMAGE from "../assets/about-agphoto.png";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SoulBehindSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  const q1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.22, 0.3],
    [0, 1, 1, 0],
  );

  const q1Y = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  const q2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.55, 0.65],
    [0, 1, 1, 0],
  );

  const q2Y = useTransform(scrollYProgress, [0.3, 0.65], [40, 0]);

  const q3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.9, 1],
    [0, 1, 1, 0],
  );

  const q3Y = useTransform(scrollYProgress, [0.65, 1], [40, 0]);

  return (
    <section id="learn-with-ag" className="relative py-24">
      <div ref={containerRef} className="relative h-[300vh]">
        {/* IMAGE */}
        <motion.img
          src={PORTRAIT_IMAGE}
          alt="Portrait"
          className="z-10 w-full h-full object-contain"
        />
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* QUOTE 1 */}

          <motion.div
            style={{
              opacity: q1Opacity,
              y: q1Y,
            }}
            className="absolute left-8 top-1/3 max-w-[230px] text-gray-300 md:left-24 md:max-w-[280px]"
          >
            <p className="text-base leading-7 md:text-lg">
              When I'm not building, I'm observing — people, silence, stories.
            </p>
          </motion.div>

          {/* QUOTE 2 */}

          <motion.div
            style={{
              opacity: q2Opacity,
              y: q2Y,
            }}
            className="absolute right-8 top-1/2 max-w-[230px] text-right text-gray-300 md:right-24 md:max-w-[280px]"
          >
            <p className="text-base leading-7 md:text-lg">
              I find clarity in long drives, in chai over deep conversations, in
              music that feels like truth.
            </p>
          </motion.div>

          {/* QUOTE 3 */}

          <motion.div
            style={{
              opacity: q3Opacity,
              y: q3Y,
            }}
            className="absolute bottom-32 left-8 max-w-[230px] text-gray-300 md:bottom-40 md:left-24 md:max-w-[280px]"
          >
            <p className="text-base leading-7 md:text-lg">
              I've realized success doesn't come from balance — it comes from
              alignment.
            </p>
          </motion.div>
        </div>
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-32 text-center">
          <a
            href="mailto:hello@alkeshgupta.com"
            className="inline-block rounded-full bg-white px-10 py-4 font-semibold text-[#052C27] transition hover:scale-105"
          >
            Work With Me
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
