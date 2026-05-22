"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASING, TIMING } from "@/components/ui/motion-variants";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  const shouldReduceMotion = useReducedMotion();

  // Premium transition variants
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 8,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: TIMING.normal,
        ease: EASING.premiumEase,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      variants={pageVariants}
      className="w-full flex-grow flex flex-col will-change-[opacity,transform]"
    >
      {children}
    </motion.div>
  );
}
