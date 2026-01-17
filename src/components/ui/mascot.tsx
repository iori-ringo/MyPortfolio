"use client";

import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type AnimationType = "float" | "bounce" | "pop" | "wave" | "none";

interface MascotProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string; // Imageタグへのクラス
  containerClassName?: string; // コンテナへのクラス
  animation?: AnimationType;
  delay?: number;
}

// アニメーション設定を取得する関数
const getAnimationConfig = (
  animation: AnimationType,
  delay: number,
): {
  initial?: TargetAndTransition;
  animate: TargetAndTransition | VariantLabels;
  transition?: Transition;
} => {
  switch (animation) {
    case "float":
      return {
        animate: {
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        },
        transition: {
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
      };
    case "bounce":
      return {
        animate: {
          y: [0, -15, 0],
          scale: [1, 1.05, 1],
        },
        transition: {
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay,
        },
      };
    case "pop":
      return {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay,
        },
      };
    case "wave":
      return {
        animate: {
          rotate: [0, 15, -10, 10, -5, 0],
        },
        transition: {
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 2,
          ease: "easeInOut",
          delay,
        },
      };
    default:
      return { animate: {} };
  }
};

export const Mascot = ({
  src,
  alt = "Mascot",
  width,
  height,
  className,
  containerClassName,
  animation = "none",
  delay = 0,
}: MascotProps) => {
  const animationConfig = getAnimationConfig(animation, delay);

  return (
    <motion.div
      className={cn("relative inline-block", containerClassName)}
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("drop-shadow-lg", className)}
        priority
      />
    </motion.div>
  );
};
