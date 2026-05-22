/**
 * Premium Motion Design Tokens & Variants
 * Calibrated for calm, trustworthy Medical UI
 */

export const EASING = {
  // Calm, grounding ease-out for medical trust
  premiumEase: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  
  // Classic smooth ease-in-out
  smoothInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const TIMING = {
  fast: 0.3,
  normal: 0.6, // Slower, calmer default
  slow: 0.8,
};

// Global variants for reusable Framer Motion elements
export const globalVariants = {
  // Stagger container
  staggerContainer: (staggerDelay = 0.05, delayChildren = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  }),

  // Stagger item - vertical fade-in (very subtle translate)
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 12 // Reduced from 20 for subtler feel
    },
    visible: (customTiming = {}) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: TIMING.normal,
        ease: EASING.premiumEase,
        ...customTiming
      },
    }),
  },

  // Soft slide-in from left
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: -16 
    },
    visible: (customTiming = {}) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: TIMING.normal,
        ease: EASING.premiumEase,
        ...customTiming
      },
    }),
  },

  // Soft slide-in from right
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: 16 
    },
    visible: (customTiming = {}) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: TIMING.normal,
        ease: EASING.premiumEase,
        ...customTiming
      },
    }),
  },

  // Simple opacity fade (ideal for subtle background layers)
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (customTiming = {}) => ({
      opacity: 1,
      transition: {
        duration: TIMING.normal,
        ease: "easeOut",
        ...customTiming
      },
    }),
  },

  // Premium scale-in (Very subtle pop)
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.98,
      y: 8
    },
    visible: (customTiming = {}) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: TIMING.normal,
        ease: EASING.premiumEase,
        ...customTiming
      },
    }),
  },
};
