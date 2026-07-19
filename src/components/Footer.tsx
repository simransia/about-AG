import LOGO from "../assets/alkeshsirlogo.png";

const MAIN_LINKS = ["about", "work", "services", "contact"];
const SUB_LINKS = ["diigiihost", "quote your price", "best rate websites"];
const SOCIAL_LINKS = ["instagram", "facebook", "youtube", "linkedin", "x"];

export default function Footer() {
  return (
    <footer className="bg-[#111] px-6 pb-8 pt-8 text-white">
      <div className="flex flex-col gap-16 md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h2 className="text-2xl bg-linear-to-r from-[#F8EEA4] to-[#C7A008] bg-clip-text text-transparent">
            Maybe it's time we build
            <br />
            something together.
          </h2>
        </div>

        <div className="flex flex-col gap-19 sm:flex-row sm:gap-24">
          <ul className="space-y-5 text-xl text-[#F5F5F5]">
            {MAIN_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-5 text-xl text-[#F5F5F5]">
            {SUB_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ul className="space-y-5 text-xl text-[#F5F5F5]">
            {SOCIAL_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-45 flex flex-col items-end justify-between gap-8 md:flex-row">
        <img src={LOGO} alt="Alkesh" className="h-12 object-contain" />
        <p className="text-base text-[#F5F5F5]">
          Copyright ©{" "}
          <span className="font-sans">{new Date().getFullYear()}</span> Alkesh
          Gupta. All rights reserved. By DIIGIIHOST
        </p>
      </div>
    </footer>
  );
}
