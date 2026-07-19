import { motion } from "framer-motion";

export default function MovementSection() {
  return (
    <section
      id="building-for-bharat"
      className="relative overflow-hidden bg-surface px-6 pb-43"
    >
      <div className="text-[105px] font-anton font-bold opacity-80 flex flex-col text-[#052C27]">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          The Stronger The Soul
        </motion.div>
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="pl-[15%]"
        >
          The Stronger The Brand
        </motion.div>
      </div>
    </section>
  );
}
