import alkeshLogo from '../assets/alkeshsirlogo-footer.png'

export default function Footer() {
  return (
    <footer className="bg-[#111] px-6 pb-8 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl italic text-gold-light md:text-5xl lg:text-6xl">
              Maybe it's time we build<br />something together.
            </h2>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
            <ul className="space-y-4 font-sans text-lg text-gray-400">
              <li><a href="#" className="hover:text-white transition">about</a></li>
              <li><a href="#" className="hover:text-white transition">work</a></li>
              <li><a href="#" className="hover:text-white transition">services</a></li>
              <li><a href="#" className="hover:text-white transition">contact</a></li>
            </ul>

            <ul className="space-y-4 font-sans text-lg text-gray-400">
              <li><a href="#" className="hover:text-white transition">diigiihost</a></li>
              <li><a href="#" className="hover:text-white transition">quote your price</a></li>
              <li><a href="#" className="hover:text-white transition">best rate websites</a></li>
            </ul>

            <ul className="space-y-4 font-sans text-lg text-gray-400">
              <li><a href="#" className="hover:text-white transition">instagram</a></li>
              <li><a href="#" className="hover:text-white transition">facebook</a></li>
              <li><a href="#" className="hover:text-white transition">youtube</a></li>
              <li><a href="#" className="hover:text-white transition">linkedin</a></li>
              <li><a href="#" className="hover:text-white transition">x</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-gray-800 pt-8 md:flex-row">
          <img src={alkeshLogo} alt="Alkesh" className="h-12 object-contain grayscale" />
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} Alkesh Gupta. All rights reserved. By DIIGIIHOST
          </p>
        </div>
      </div>
    </footer>
  )
}
