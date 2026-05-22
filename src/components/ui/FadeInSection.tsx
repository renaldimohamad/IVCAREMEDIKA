"use client";

import React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { EASING, TIMING } from "./motion-variants";

interface FadeInSectionProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  duration = TIMING.normal,
  y = 16,
  x = 0,
  scale = 1,
  once = true,
  threshold = 0.1,
  className = "",
  ...props
}: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user requests reduced motion, bypass physical slides/scales and do a simple, direct opacity fade
  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
      x: shouldReduceMotion ? 0 : x,
      scale: shouldReduceMotion ? 1 : scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: EASING.premiumEase,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px", amount: threshold }}
      variants={variants}
      className={`will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
