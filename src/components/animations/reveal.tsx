import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: string,
}

export function Reveal({ children, delay = 0, style = "" }: Props) {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
