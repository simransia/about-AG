const navLinks = [
  { label: "Brand Soul", href: "#brand-soul" },
  { label: "Building For Bharat", href: "#building-for-bharat" },
  { label: "Learn with AG", href: "#learn-with-ag" },
];

export default function Navbar() {
  return (
    <header className="px-4 pt-4 md:px-8 absolute top-0 left-0 z-20 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-forest px-5 py-3 shadow-lg md:px-8 md:py-4">
        <a
          href="#"
          className="font-serif text-xl tracking-[0.2em] text-gold md:text-2xl"
        >
          ALKESH
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#work-with-me"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-forest transition hover:bg-white/90"
        >
          Work With Me
        </a>
      </nav>
    </header>
  );
}
