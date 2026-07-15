import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

export default function MovementSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const topLineX = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const bottomLineX = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section
      ref={ref}
      id="building-for-bharat"
      className="relative overflow-hidden bg-surface px-6 pb-32"
    >
      <div className="text-[105px] font-anton font-bold opacity-80 flex flex-col text-[#052C27]">
        <motion.div
          // style={{ x: topLineX }}
          className=""
        >
          The Stronger The Soul
        </motion.div>
        <motion.div
          // style={{ x: bottomLineX }}
          className="pl-[15%]"
        >
          The Stronger The Brand
        </motion.div>
      </div>
    </section>
  );
}
