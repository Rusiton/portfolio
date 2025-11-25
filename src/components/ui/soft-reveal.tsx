import { motion } from "framer-motion";

export function SoftReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
