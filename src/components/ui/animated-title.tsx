"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedTitle = ({ children, className }: AnimatedTitleProps) => {
  return (
    <motion.h1
      className={cn(className)}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.h1>
  );
};
