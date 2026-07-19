import Navbar from "./Navbar";
import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="relative h-[881px] overflow-hidden bg-black">
      <Navbar />
      <img
        src={heroImage}
        alt="Alkesh Gupta"
        className="h-full w-full object-cover object-top"
      />

      <div className="absolute left-1/2 top-[450px] transform -translate-x-1/2 z-10 max-w-[721px] px-6 pt-20 text-center text-[40px] font-semibold leading-tight text-white">
        Hi, I&apos;m{" "}
        <span className="bg-linear-to-r from-[#F8EEA4] to-[#C7A008] bg-clip-text text-transparent">
          Alkesh Gupta
        </span>{" "}
        — a Founder, Creator, and Soul Alchemist.
      </div>
    </section>
  );
}
