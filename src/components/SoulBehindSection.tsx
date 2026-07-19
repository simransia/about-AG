import PORTRAIT_IMAGE from "../assets/about-agphoto.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StorySection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 0.35], ["100%", "-100%"]);

  const text1Y = useTransform(scrollYProgress, [0.22, 0.45], ["100%", "-100%"]);

  const text2Y = useTransform(scrollYProgress, [0.35, 0.58], ["100%", "-100%"]);

  const text3Y = useTransform(scrollYProgress, [0.45, 1], ["100%", "40%"]);

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <img
          src={PORTRAIT_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <motion.div
          style={{ y: titleY }}
          className="absolute left-10 top-0 bottom-0 w-[28%]"
        >
          <p className="text-[40px] leading-12 text-surface">
            The Soul Behind the Brand
          </p>
        </motion.div>

        <motion.div
          style={{ y: text1Y }}
          className="absolute left-10 top-0 bottom-0 w-[28%]"
        >
          <p className="text-2xl leading-9 text-surface">
            When I'm not building, I'm observing - People, silence, stories.
          </p>
        </motion.div>
        <motion.div
          style={{ y: text2Y }}
          className="absolute right-10 top-0 bottom-0 w-[29%] text-left"
        >
          <p className="text-2xl leading-9 text-surface">
            I find clarity in long drives, in chai over deep conversations, in
            music that feels like truth.
          </p>
        </motion.div>
        <motion.div
          style={{ y: text3Y }}
          className="absolute left-10 top-0 bottom-0 w-[28%]"
        >
          <p className="text-2xl leading-9 text-surface">
            I've realized success doesn't come from balance— it comes from
            alignment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
