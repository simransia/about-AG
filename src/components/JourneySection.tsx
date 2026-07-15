import FadeIn from "./FadeIn";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import officeImage from "../assets/office-space.png";

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Light parallax for the office image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="bg-surface px-6 py-28">
      <div>
        <FadeIn>
          <h2 className="text-[40px] w-[66%] font-medium leading-snug text-brand-green">
            My journey didn&apos;t start with a business plan It started with
            questions
          </h2>
        </FadeIn>
      </div>

      <div className="flex justify-end pt-4 md:pt-10">
        <FadeIn delay={0.3}>
          <div className="text-xl text-gray-700 flex flex-col space-y-[23px]">
            <p>
              Why do some brands connect deeply while <br />
              others don&apos;t?
            </p>
            <p>
              Why do some founders feel aligned, while <br />
              others burn out chasing trends?
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.5}>
        <div className="mx-auto mt-24 md:mt-32 overflow-hidden rounded bg-black relative">
          <img
            src={officeImage}
            alt="Office Space"
            className="h-full w-full object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
