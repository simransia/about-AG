import FadeIn from "./FadeIn";
import aboutImage from "../assets/about-agphoto.png";
import team1 from "../assets/Dr.-Gaikwad 1.png";
import team2 from "../assets/Anuved1.png";
import team3 from "../assets/nafscob1.png";
import team4 from "../assets/Soupherb1.png";
import team5 from "../assets/Anuved1.png";

export default function StorySection() {
  return (
    <section id="brand-soul" className="bg-surface px-6 pb-28 md:pb-40">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <p className="text-2xl leading-relaxed text-[#5C5C5C] font-medium">
            What began as a small digital agency slowly evolved into <br />a
            place where we didn&apos;t just design websites or logos...
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-1 text-3xl font-medium text-[#052C27]">
            we understood people.
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <FadeIn delay={0.3}>
          <div className="flex items-center justify-center gap-4">
            <img
              src={team1}
              alt="Alkesh Gupta and team"
              className="w-[204px] h-60 object-cover"
            />
            <img
              src={team2}
              alt="Alkesh Gupta and team"
              className="w-[204px] h-60 object-cover"
            />
            <img
              src={team3}
              alt="Alkesh Gupta and team"
              className="w-[204px] h-60 object-cover"
            />
            <img
              src={team4}
              alt="Alkesh Gupta and team"
              className="w-[204px] h-60 object-cover"
            />
            <img
              src={team5}
              alt="Alkesh Gupta and team"
              className="w-[204px] h-60 object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
