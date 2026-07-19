import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={ref} className="border-t border-gray-300">
      <motion.div
        initial={{ height: 191 }}
        animate={{ height: isHovered ? 271 : 191 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex items-center justify-center gap-12 px-6 py-10 border-b border-gray-300"
      >
        {/* Left Side: Image */}
        <div className="flex justify-center md:justify-end pr-0 md:pr-12 w-[45%]">
          {hasImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[320px]"
            >
              <img
                src={imagePath ?? BRAND_IMAGE}
                alt={name}
                className="relative h-49 w-79 object-cover shadow-lg"
              />
            </motion.div>
          )}
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left w-[55%]">
          <h3 className="font-anton text-[64px] tracking-tight opacity-80 text-primary">
            {name}
          </h3>
          <p className="mt-4 text-base font-medium text-gray-500 md:text-xl max-w-md">
            {tagline}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-surface mb-22">
      <div className="mx-auto max-w-4xl text-center px-6 mb-14">
        <h2 className="text-5xl tracking-tight font-medium text-[#113123]">
          Brands That Carry My Soul
        </h2>
        <p className="mt-4 text-[#5C5C5C] text-base">
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
