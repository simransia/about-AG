import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import soulImage from "../assets/soul.png";
import scienceImage from "../assets/science.png";
import scaleImage from "../assets/scale.png";

export default function PillarsSection() {
  return (
    <section className="bg-surface px-6 pb-28">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <FadeIn>
          <p className="text-xl text-[#5C5C5C] mb-6 font-medium">
            And somewhere along that path, the idea that defined everything{" "}
            <br /> I do was born
          </p>
          <h2 className="font-medium text-[40px] text-[#052C27]">
            The Brand Soul Philosophy.
          </h2>
        </FadeIn>
      </div>

      <div className="flex items-center justify-center gap-6">
        <FadeIn delay={0.1}>
          <motion.img
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            src={soulImage}
            alt="Soul"
            className="w-60 h-75"
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <motion.img
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            src={scienceImage}
            alt="Science"
            className="w-60 h-75 relative bottom-[21px]"
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <motion.img
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            src={scaleImage}
            alt="Scale"
            className="w-60 h-75"
          />
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 max-w-3xl text-center">
        <FadeIn delay={0.4}>
          <p className="text-xl font-medium text-gray-600">
            Because every brand, just like every human, has a soul. When you
            find <br />
            it, align with it, and express it with integrity —{" "}
            <span className="text-[#052C27]">it creates movement.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
