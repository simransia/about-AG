import { useScroll } from "framer-motion";
import { useRef } from "react";
import manifesto1 from "../assets/brand-soul-manifesto-1.png";
import manifesto2 from "../assets/brand-soul-manifesto-2.png";
import manifesto3 from "../assets/brand-soul-manifesto-3.png";
import { RevealLine } from "./RevelLine";

const MANIFESTO_DATA = [
  {
    image: manifesto1,
    imagePosition: "left",
    scrollOffset: ["start 80%", "end 30%"],
    lines: [
      {
        text: (
          <>
            A <span className="font-semibold">BRAND</span> is
          </>
        ),
        start: 0,
        end: 0.15,
        className: "translate-x-[110px]",
      },
      {
        text: "not a logo.",
        start: 0.15,
        end: 0.3,
        className: "translate-x-[70px]",
      },
      {
        text: "It's a living system",
        start: 0.3,
        end: 0.45,
        className: "translate-x-[10px]",
      },
      {
        text: "of emotion",
        start: 0.45,
        end: 0.6,
        className: "translate-x-[-50px]",
      },
      {
        text: "and intention.",
        start: 0.6,
        end: 0.75,
        className: "translate-x-[-70px]",
      },
    ],
  },
  {
    image: manifesto2,
    imagePosition: "right",
    scrollOffset: ["start 80%", "end 30%"],
    lines: [
      {
        text: (
          <>
            A <span className="font-semibold">FOUNDER</span> is
          </>
        ),
        start: 0,
        end: 0.15,
        className: "translate-x-[146px]",
      },
      {
        text: "Not A Title.",
        start: 0.15,
        end: 0.3,
        className: "translate-x-[170px]",
      },
      {
        text: " It's The Discipline",
        start: 0.3,
        end: 0.45,
        className: "translate-x-[220px]",
      },
      {
        text: "To Build",
        start: 0.45,
        end: 0.6,
        className: "translate-x-[275px]",
      },
      {
        text: " What Others Only",
        start: 0.6,
        end: 0.75,
        className: "translate-x-[330px]",
      },
      {
        text: " Imagine.",
        start: 0.75,
        end: 0.9,
        className: "translate-x-[360px]",
      },
    ],
  },
  {
    image: manifesto3,
    imagePosition: "left",
    scrollOffset: ["start 75%", "end 30%"],
    lines: [
      {
        text: (
          <>
            And <span className="font-semibold">BUSINESS</span> is
          </>
        ),
        start: 0,
        end: 0.15,
        className: "",
      },
      {
        text: "Not About The Market",
        start: 0,
        end: 0.15,
        className: "translate-x-[-40px]",
      },
      {
        text: "It's About",
        start: 0.15,
        end: 0.3,
        className: "translate-x-[-80px]",
      },
      {
        text: "The Value",
        start: 0.3,
        end: 0.45,
        className: "translate-x-[-120px]",
      },
      {
        text: "You Choose To Create,",
        start: 0.45,
        end: 0.6,
        className: "translate-x-[-160px]",
      },
      {
        text: " Consistently",
        start: 0.6,
        end: 0.75,
        className: "translate-x-[-180px]",
      },
    ],
  },
];

function ManifestoBlock({ data }: { data: any }) {
  const blockRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: data.scrollOffset as any,
  });

  const ImageComponent = (
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={data.image}
        alt="Manifesto"
        className="h-100 w-[350px] rounded-lg"
      />
    </div>
  );

  const TextComponent = (
    <div className="w-full md:w-1/2 text-6xl tracking-wide text-[#7d908e]">
      {data.lines.map((line: any, index: number) => (
        <RevealLine
          key={index}
          progress={scrollYProgress}
          start={line.start}
          end={line.end}
          className={line.className}
          color1="text-[#7d908e]"
          color2="text-white"
        >
          {line.text}
        </RevealLine>
      ))}
    </div>
  );

  return (
    <div
      ref={blockRef}
      className="flex flex-col items-center gap-12 md:flex-row"
    >
      {data.imagePosition === "left" ? ImageComponent : TextComponent}
      {data.imagePosition === "left" ? TextComponent : ImageComponent}
    </div>
  );
}

export default function ManifestoSection() {
  return (
    <section className="bg-[#052C27] px-6 py-15">
      <div className="">
        <div>
          <h2 className="text-center font-sans text-[40px] font-medium text-[#F5F5F5]">
            The Brand Soul Manifesto
          </h2>
        </div>

        <div className="mt-20 space-y-32">
          {MANIFESTO_DATA.map((block, idx) => (
            <ManifestoBlock key={idx} data={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
