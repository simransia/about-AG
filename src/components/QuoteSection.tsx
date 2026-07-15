import FadeIn from './FadeIn'
import quoteBg from '../assets/quote-bg.png'

export default function QuoteSection() {
  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="absolute inset-0 z-0">
        <img
          src={quoteBg}
          alt="Quote background"
          className="h-full w-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-brand-green/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <FadeIn>
          <div className="rounded-xl border border-white/20 bg-black/20 p-12 backdrop-blur-sm md:p-20">
            <p className="font-serif text-3xl italic leading-relaxed text-white md:text-5xl lg:text-6xl"
               style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              "This Is Not My Story,<br />
              It's A Reminder,<br />
              That Every Founder's Story Can Have A Soul."
            </p>
            <p className="mt-12 font-sans text-xl font-medium tracking-widest text-gold-light md:text-2xl">
              - Alkesh Gupta
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
