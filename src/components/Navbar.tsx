import LOGO from "../assets/alkeshsirlogo.png";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  return (
    <header className="absolute top-[22px] left-[25px] right-[25px] z-20 ">
      <nav className="flex w-full items-center justify-between rounded-full bg-[#052C27] px-5 py-3 shadow-lg md:px-8 md:py-4.5">
        <a href="#" className="">
          <img src={LOGO} alt="brand logo" className="h-7 w-31" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-base font-medium text-surface transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="inline-block rounded-full bg-linear-to-r from-[#F8EEA4] to-[#C7A008] p-[2px] shadow-[0_4px_4px_rgba(199,160,8,0.25)]">
          <button className="rounded-full bg-white px-6 py-3.5 h-11.5 w-39.5 text-base font-semibold text-[#17322C]">
            Work With Me
          </button>
        </div>
      </nav>
    </header>
  );
}
