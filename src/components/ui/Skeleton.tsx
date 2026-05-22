"use client";

import React from "react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "text" | "circle" | "rect" | "card";
  width?: string | number;
  height?: string | number;
}

export default function Skeleton({
  className = "",
  variant = "rect",
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  
  // High-end double-layered gradient shimmer effect (Linear/Stripe style)
  // Utilizes a sliding absolute background overlay to create a premium glass reflection
  const baseClasses = "relative overflow-hidden bg-slate-100 rounded-lg select-none pointer-events-none";
  
  const shimmerClasses = 
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent";

  // Pre-configured variant shapes
  const variantClasses = {
    text: "h-3.5 w-full rounded-md",
    circle: "rounded-full flex-shrink-0",
    rect: "w-full rounded-xl",
    card: "w-full rounded-[2rem] p-6 bg-white border border-slate-100 shadow-soft",
  };

  // Resolve custom width/height values
  const customStyles: React.CSSProperties = {
    width: width,
    height: height,
    ...style,
  };

  // Compound card skeleton layout (pre-built layout helper)
  if (variant === "card") {
    return (
      <div
        className={`${variantClasses.card} ${className}`}
        style={customStyles}
        {...props}
      >
        <div className="flex items-center gap-4 mb-6">
          <Skeleton variant="circle" width={48} height={48} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
        <div className="space-y-3">
          <Skeleton variant="text" width="95%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="75%" />
        </div>
        <div className="mt-8 flex gap-3">
          <Skeleton variant="rect" width={90} height={32} className="rounded-full" />
          <Skeleton variant="rect" width={110} height={32} className="rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* 1. Self-contained Shimmer Keyframes Injector */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      
      <div
        className={`${baseClasses} ${shimmerClasses} ${variantClasses[variant]} ${className}`}
        style={customStyles}
        {...props}
      />
    </>
  );
}

/**
 * Compound Skeleton Layout Helpers for easier section mocking
 */
export function SkeletonTextLines({ count = 3, className = "" }) {
  return (
    <div className={`space-y-3.5 w-full ${className}`}>
      {Array.from({ length: count }).map((_, idx) => {
        // Vary lengths for realistic loading text rhythm
        const widths = ["100%", "92%", "85%", "95%", "78%"];
        const width = widths[idx % widths.length];
        return <Skeleton key={idx} variant="text" width={width} />;
      })}
    </div>
  );
}

export function SkeletonGrid({ columns = 3, count = 3, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 sm:gap-8 ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <Skeleton key={idx} variant="card" />
      ))}
    </div>
  );
}
