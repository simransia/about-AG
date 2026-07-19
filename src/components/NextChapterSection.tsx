import { RevealLine } from "./RevelLine";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { NEXT_CHAPTER_BLOCKS } from "../data/content";

export default function NextChapterSection() {
  const blockRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start 80%", "end 40%"],
  });

  return (
    <section ref={blockRef} className="relative px-8">
      <div className="border-b border-[#5C5C5C] text-center pb-34 pt-47">
        <div className="bg-linear-to-r absolute right-40 top-120 z-10 rounded-full w-25 h-25 from-[#F8EEA4] to-[#C7A008] p-[2px]">
          <div className="rounded-full w-full h-full text-surface text-base font-medium bg-black flex items-center justify-center">
            Join <br /> Mission
          </div>
        </div>
        {NEXT_CHAPTER_BLOCKS.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className={`${blockIndex == NEXT_CHAPTER_BLOCKS.length - 1 ? "" : "mb-50"} flex flex-col items-center`}
          >
            {block.map((line, lineIndex) => (
              <RevealLine
                key={lineIndex}
                color1="text-[#dfdfdf]"
                color2="text-[#052C27]"
                start={line.start}
                end={line.end}
                progress={scrollYProgress}
                className="font-anton font-bold leading-[70px] w-max text-6xl"
              >
                {line.text}
              </RevealLine>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
