"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { globalVariants } from "./motion-variants";

// Share stagger state with child items if custom properties need to be passed down
const StaggerContext = createContext({ isInStagger: false });

export const useStagger = () => useContext(StaggerContext);

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  viewTrigger?: boolean; // If true, triggers when entering viewport. If false, triggers on mount.
  className?: string;
}

export default function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  once = true,
  viewTrigger = true,
  className = "",
  ...props
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user requests reduced motion, we disable stagger delays for a faster, clean feel
  const activeDelay = shouldReduceMotion ? 0 : staggerDelay;
  const variants = globalVariants.staggerContainer(activeDelay, delayChildren);

  const motionProps = viewTrigger
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once, margin: "-60px" },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <StaggerContext.Provider value={{ isInStagger: true }}>
      <motion.div
        variants={variants}
        className={`will-change-transform ${className}`}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}
