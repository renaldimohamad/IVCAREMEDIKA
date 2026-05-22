"use client";

import React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { globalVariants } from "./motion-variants";
import { useStagger } from "./StaggerContainer";

type AnimationPreset = "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "fadeIn";

interface MotionItemProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  preset?: AnimationPreset;
  className?: string;
  customTiming?: {
    duration?: number;
    ease?: any;
  };
}

export default function MotionItem({
  children,
  preset = "fadeInUp",
  className = "",
  customTiming,
  ...props
}: MotionItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const { isInStagger } = useStagger();

  // Mapping presets to variants
  const presetVariants = {
    fadeInUp: globalVariants.fadeInUp,
    fadeInLeft: globalVariants.fadeInLeft,
    fadeInRight: globalVariants.fadeInRight,
    scaleIn: globalVariants.scaleIn,
    fadeIn: globalVariants.fadeIn,
  };

  const selectedVariant = presetVariants[preset] || presetVariants.fadeInUp;

  // Custom variants that override offsets for reduced-motion profiles
  const finalVariants = {
    hidden: selectedVariant.hidden,
    visible: (custom: any) => {
      // Resolve functional variants
      const baseVisible = typeof selectedVariant.visible === "function" 
        ? selectedVariant.visible(custom) 
        : selectedVariant.visible;
      
      return {
        ...baseVisible,
        transition: {
          ...baseVisible.transition,
          ...customTiming,
        }
      };
    }
  };

  // If NOT inside a StaggerContainer, we mount its own animation lifecycle trigger.
  // Otherwise, it gets triggered collectively by StaggerContainer's initial/animate state.
  const motionProps = isInStagger
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <motion.div
      variants={finalVariants}
      className={`will-change-transform ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
