"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden select-none">
      
      {/* 1. TOP LINEAR PROGRESS LOADER (Stripe-like) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-sky-50 overflow-hidden z-50">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="h-full w-2/3 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full"
        />
      </div>

      {/* 2. CALMING BACKGROUND MESH SPHERES */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-primary-100/50 filter blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-cyan-100/40 filter blur-[120px] animate-pulse-slow delay-75" />
      </div>

      {/* Subtle medical dotted background */}
      <div className="absolute inset-0 bg-medical-pattern opacity-30 z-10 pointer-events-none" />

      {/* 3. CENTRAL ELEGANT GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col items-center p-10 sm:p-12 rounded-[2rem] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-luxury max-w-[280px] sm:max-w-[320px] w-full"
      >
        {/* PULSING MEDICAL BRAND ICON */}
        <div className="relative mb-6">
          {/* Ripple circle 1 */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-primary-100"
          />
          {/* Ripple circle 2 */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.05, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute inset-[-6px] rounded-full bg-primary-50/50 border border-primary-200/20"
          />

          {/* Actual core container */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 z-10">
            <svg className="w-8 h-8 text-white filter drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>

        {/* BRAND TYPOGRAPHY: Soft, sophisticated stagger */}
        <div className="flex flex-col items-center leading-none text-center">
          <span className="font-heading font-extrabold text-[15px] tracking-[0.2em] text-primary-600 uppercase">
            IVCARE
          </span>
          <span className="font-heading font-bold text-[9px] tracking-[0.3em] text-navy-400 uppercase mt-1">
            MEDIKA
          </span>
        </div>

        {/* LOADING SUBTITLE SHIMMER */}
        <div className="mt-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50/40 border border-primary-100/30">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 animate-ping" />
          <span className="text-[10px] font-bold text-primary-700 tracking-wider uppercase animate-pulse">
            Mengamankan Sesi...
          </span>
        </div>
      </motion.div>

    </div>
  );
}
