import manifesto1 from "../assets/brand-soul-manifesto-1.png";
import manifesto2 from "../assets/brand-soul-manifesto-2.png";
import manifesto3 from "../assets/brand-soul-manifesto-3.png";

export default function ManifestoSection() {
  return (
    <section className="bg-brand-green px-6 py-15">
      <div className="">
        <div>
          <h2 className="text-center font-sans text-[40px] font-semibold text-[#F5F5F5]">
            The Brand Soul Manifesto
          </h2>
        </div>

        <div className="mt-20 space-y-32">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={manifesto1}
                alt="Manifesto 1"
                className="h-100 w-[350px] rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-6xl tracking-wide text-white ">
              <p className="translate-x-[110px]">
                A <span className="font-semibold">BRAND</span> is
              </p>
              <p className="translate-x-[70px]">not a logo.</p>
              <p className="translate-x-[10px]">It's a living system</p>
              <p className="translate-x-[-50px]">of emotion</p>
              <p className="translate-x-[-70px]">and intention.</p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2 text-6xl tracking-wide text-white">
              <p className="translate-x-[146px]">
                A <span className="font-semibold">FOUNDER</span> is
              </p>
              <p className="translate-x-[170px]">Not A Title.</p>
              <p className="translate-x-[220px]"> It&apos;s The Discipline</p>
              <p className="translate-x-[275px]">To Build</p>
              <p className="translate-x-[330px]"> What Others Only</p>
              <p className="translate-x-[360px]"> Imagine.y</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={manifesto2}
                alt="Manifesto 1"
                className="h-100 w-[350px] rounded-lg"
              />
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={manifesto3}
                alt="Manifesto 1"
                className="h-100 w-[350px] rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-6xl tracking-wide text-white ">
              <p className="">
                And <span className="font-semibold">BUSINESS</span> is
              </p>
              <p className="translate-x-[-40px]">Not About The Market</p>
              <p className="translate-x-[-80px]">It&apos;s About</p>
              <p className="translate-x-[-120px]">The Value</p>
              <p className="translate-x-[-160px]">You Choose To Create,</p>
              <p className="translate-x-[-180px]"> Consistently</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
