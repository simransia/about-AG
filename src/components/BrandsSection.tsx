import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import BRAND_IMAGE from "../assets/brand.png";
import { brands } from "../data/content";

function BrandItem({
  name,
  tagline,
  hasImage,
  imagePath,
}: {
  name: string;
  tagline: string;
  hasImage?: boolean;
  imagePath?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={ref} className="">
      <motion.div
        initial={{ height: 191 }}
        animate={{ height: isHovered ? 271 : 191 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 border-b border-gray-300"
      >
        {/* Left Side: Image */}
        <div className="flex justify-center md:justify-end pr-0 md:pr-12">
          {hasImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[320px]"
            >
              <div className="absolute -bottom-3 -right-3 h-full w-full bg-[#1b3d32]" />
              <img
                src={BRAND_IMAGE}
                alt={name}
                className="relative h-48 w-full object-cover shadow-lg"
              />
            </motion.div>
          )}
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left">
          <h3 className="font-anton font-semibold text-[64px] tracking-tight opacity-80 text-[#052C27]">
            {name}
          </h3>
          <p className="mt-3 text-base text-gray-500 md:text-lg max-w-md">
            {tagline}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-4xl text-center px-6 mb-12">
        <h2 className="font-display text-4xl tracking-tight text-[#113123] md:text-5xl lg:text-6xl">
          Brands That Carry My Soul
        </h2>
        <p className="mt-4 text-gray-600 md:text-lg">
          Over the years, I've had the privilege of shaping brands that became
          more
          <br className="hidden md:block" />
          than businesses — they became movements
        </p>
      </div>
      {brands.map((brand) => (
        <BrandItem key={brand.name} {...brand} />
      ))}
    </section>
  );
}
