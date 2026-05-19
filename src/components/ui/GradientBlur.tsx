import React from "react";

interface GradientBlurProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "custom";
  color?: "primary" | "cyan" | "sky" | "green";
  size?: "sm" | "md" | "lg" | "xl";
  opacity?: 5 | 10 | 15 | 20 | 25 | 30;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function GradientBlur({
  position = "center",
  color = "primary",
  size = "md",
  opacity = 10,
  pulse = true,
  className = "",
  style,
  ...props
}: GradientBlurProps) {
  
  // Color combinations mapping to custom theme colors
  const colorMap = {
    primary: "bg-primary-100/15 bg-primary-200/5",
    cyan: "bg-cyan-100/20 bg-cyan-200/5",
    sky: "bg-sky-50/40 bg-sky-100/10",
    green: "bg-green-50/20 bg-green-100/5",
  };

  // Viewport sizes mapping to pixel widths and blur scales
  const sizeMap = {
    sm: "w-[300px] h-[300px] blur-[60px] lg:blur-[80px]",
    md: "w-[500px] h-[500px] blur-[100px] lg:blur-[120px]",
    lg: "w-[800px] h-[800px] blur-[130px] lg:blur-[150px]",
    xl: "w-[1100px] h-[1100px] blur-[160px] lg:blur-[180px]",
  };

  // Position maps
  const positionMap = {
    "top-left": "absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3",
    "top-right": "absolute top-0 right-0 translate-x-1/3 -translate-y-1/3",
    "bottom-left": "absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3",
    "bottom-right": "absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3",
    center: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    custom: "",
  };

  // Opacity utility overrides
  const opacityMap = {
    5: "opacity-50",
    10: "opacity-100",
    15: "opacity-120",
    20: "opacity-150",
    25: "opacity-200",
    30: "opacity-300",
  };

  return (
    <div
      className={`rounded-full pointer-events-none -z-10 mix-blend-multiply ${colorMap[color]} ${sizeMap[size]} ${positionMap[position]} ${opacityMap[opacity]} ${
        pulse ? "animate-pulse-slow" : ""
      } ${className}`}
      style={style}
      {...props}
    />
  );
}
