import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import soulImage from "../assets/soul.png";
import scienceImage from "../assets/science.png";
import scaleImage from "../assets/scale.png";

const pillars = [
  { src: soulImage, alt: "Soul", delay: 0.4, className: "w-60 h-75" },
  {
    src: scienceImage,
    alt: "Science",
    delay: 0.2,
    className: "w-60 h-75 relative bottom-[21px]",
  },
  { src: scaleImage, alt: "Scale", delay: 0.3, className: "w-60 h-75" },
];

export default function PillarsSection() {
  return (
    <section className="bg-surface px-6 pb-22">
      <div className="mx-auto max-w-4xl text-center mb-9">
        <p className="text-xl text-[#5C5C5C] mb-6 font-medium">
          And somewhere along that path, the idea that defined everything <br />{" "}
          I do was born
        </p>
        <h2 className="font-medium text-[40px] text-[#052C27]">
          The Brand Soul Philosophy.
        </h2>
      </div>

      <div className="flex items-center justify-center gap-6">
        {pillars.map((pillar) => (
          <FadeIn key={pillar.alt} delay={pillar.delay}>
            <motion.img
              initial={{ y: 100, opacity: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              src={pillar.src}
              alt={pillar.alt}
              className={pillar.className}
            />
          </FadeIn>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-xl font-medium text-gray-600">
          Because every brand, just like every human, has a soul. When you find{" "}
          <br />
          it, align with it, and express it with integrity —{" "}
          <span className="text-[#052C27]">it creates movement.</span>
        </p>
      </div>
    </section>
  );
}
