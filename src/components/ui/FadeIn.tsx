"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewportSettings = { once: true, margin: "-100px" };

export function FadeIn({
  children,
  className = "",
  duration = 0.6,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStagger = useContext(FadeInStaggerContext);

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
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as any, // premium cubic-bezier easeOut
      },
    },
  };

  if (isInStagger) {
    return (
      <motion.div
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className = "",
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  faster?: boolean;
}) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={{
          visible: {
            transition: {
              staggerChildren: faster ? 0.08 : 0.15,
            },
          },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}
