import { motion } from "framer-motion";
import officeImage from "../assets/office-space.png";

export default function JourneySection() {
  return (
    <section className="bg-surface py-28">
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[40px] font-medium px-6 leading-snug text-[#052C27]">
          My journey didn&apos;t start with a business plan
          <br /> It started with questions
        </h2>
      </motion.div>
      <hr className="h-px mt-5 bg-[#D9D9D9] border-0" />
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex px-6 justify-end pt-4 md:pt-19 w-full">
          <div className="text-xl w-1/2 font-medium text-[#3A3A3A] flex flex-col space-y-[23px]">
            <p>
              Why do some brands connect deeply while <br />
              others don&apos;t?
            </p>
            <p>
              Why do some founders feel aligned, while <br />
              others burn out chasing trends?
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-24 md:mt-30 relative px-6">
        <img
          src={officeImage}
          alt="Office Space"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
