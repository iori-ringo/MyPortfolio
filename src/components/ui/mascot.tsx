"use client";

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
  // アニメーション定義
  const animations = {
    float: {
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay,
      },
    },
    bounce: {
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay,
      },
    },
    pop: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      },
    },
    wave: {
      rotate: [0, 15, -10, 10, -5, 0],
      transition: {
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 2,
        ease: "easeInOut",
        delay: delay,
      },
    },
    none: {},
  };

  const selectedAnimation = animations[animation] as any;
  const isInitialAnimate = animation === "pop";

  return (
    <motion.div
      className={cn("relative inline-block", containerClassName)}
      initial={isInitialAnimate ? selectedAnimation.initial : undefined}
      animate={isInitialAnimate ? selectedAnimation.animate : selectedAnimation}
      // @ts-ignore - framer-motion型の複雑さ回避
      transition={selectedAnimation.transition}
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
