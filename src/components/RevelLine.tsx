import { motion, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface RevealLineProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  start: number;
  end: number;
  className?: string;
  color1: string;
  color2: string;
}

export const RevealLine = ({
  children,
  progress,
  start,
  end,
  className,
  color1,
  color2,
}: RevealLineProps) => {
  const maxProgress = useRef(0);

  const width = useTransform(progress, (p) => {
    if (p > maxProgress.current) {
      maxProgress.current = p;
    }

    if (maxProgress.current <= start) return "0%";
    if (maxProgress.current >= end) return "100%";

    return `${((maxProgress.current - start) / (end - start)) * 100}%`;
  });

  return (
    <div className={`relative ${className}`}>
      {/* Color 1 text */}
      <p className={color1}>{children}</p>

      {/* Color 2 text */}
      <motion.p
        style={{ width }}
        className={`absolute left-0 top-0 -bottom-1 overflow-hidden whitespace-nowrap ${color2}`}
      >
        {children}
      </motion.p>
    </div>
  );
};
