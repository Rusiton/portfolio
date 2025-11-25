import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: string,
}

export function FadeIn({ children, delay = 0, y = 20, style = "" }: Props) {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
