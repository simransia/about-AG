import FadeIn from './FadeIn'

export default function NextChapterSection() {
  return (
    <section className="bg-surface px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl text-center">
        <FadeIn>
          <h2 className="font-display text-5xl font-bold tracking-tight text-brand-green md:text-7xl lg:text-8xl"
              style={{ lineHeight: 1.1 }}>
            My Next Chapter Is About Building With People, <br className="hidden md:block" />
            <span className="text-gray-400">Not Just For Them.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-32 max-w-4xl space-y-24">
            <p className="font-display text-4xl tracking-wide text-gray-800 md:text-6xl lg:text-7xl"
               style={{ lineHeight: 1.1 }}>
              Through The Bharat Building Mission, I&apos;m Creating A Community Of Founders From Every Corner Of India — Tier 2, Tier 3, And Beyond
            </p>

            <p className="font-display text-4xl tracking-wide text-gray-800 md:text-6xl lg:text-7xl"
               style={{ lineHeight: 1.1 }}>
              Who Want To Grow With Purpose, Not Pressure.
            </p>

            <p className="font-display text-4xl tracking-wide text-brand-teal md:text-6xl lg:text-7xl"
               style={{ lineHeight: 1.1 }}>
              Because Someday, When Someone Says <br />
              <span className="text-gray-900">"Bharat Is Rising,"</span> <br />
              I Want To Know We Helped Build That Rise, With Soul.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
