"use client";

import React from "react";

interface AmbientTextureProps {
  src: string;
  opacity?: string;
  blur?: string;
  gradientDirection?: "to-right" | "to-left" | "to-top" | "radial" | "none";
  className?: string;
}

export default function AmbientTexture({
  src,
  opacity = "opacity-[0.08]",
  blur = "blur-sm",
  gradientDirection = "radial",
  className = "",
}: AmbientTextureProps) {
  
  // Custom gradient overlay maps for blending medical textures elegantly
  const gradientOverlayMap = {
    "to-right": "absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-white z-10",
    "to-left": "absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white z-10",
    "to-top": "absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 z-10",
    radial: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,white_95%)] z-10",
    none: "",
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 ${className}`}>
      {/* 🖼️ Texture Image Layer */}
      <img
        src={src}
        alt="Ambient healthcare visual texture"
        className={`w-full h-full object-cover object-center ${opacity} ${blur} scale-102 transition-transform duration-1000`}
      />
      {/* 🌌 Dissolve Blend Layer */}
      {gradientOverlayMap[gradientDirection]}
    </div>
  );
}
