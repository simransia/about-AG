import { motion } from "framer-motion";
import team1 from "../assets/Dr.-Gaikwad 1.png";
import team2 from "../assets/Anuved1.png";
import team3 from "../assets/nafscob1.png";
import team4 from "../assets/Soupherb1.png";
import team5 from "../assets/Anuved1.png";

const teamImages = [team1, team2, team3, team4, team5];

export default function StorySection() {
  return (
    <section id="brand-soul" className="bg-surface px-6 pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xl leading-relaxed text-[#5C5C5C] font-medium">
          What began as a small digital agency slowly evolved into <br />a place
          where we didn&apos;t just design websites or logos...
        </p>

        <p className="mt-1 text-2xl font-medium text-[#052C27]">
          we understood people.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-6xl">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4">
            {teamImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt="Alkesh Gupta and team"
                className="w-[204px] h-60 object-cover"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
