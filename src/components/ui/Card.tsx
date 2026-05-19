import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "airy" | "glass" | "simple" | "navy";
  hoverLift?: boolean;
}

export default function Card({
  children,
  variant = "airy",
  hoverLift = true,
  className = "",
  ...props
}: CardProps) {
  
  const baseClasses = "rounded-[2rem] p-8 transition-all duration-500 flex flex-col justify-between";

  const variantClasses = {
    airy: "bg-white border border-primary-50/60 shadow-soft hover:border-primary-100/50",
    glass: "bg-white/70 backdrop-blur-xl border border-white/60 shadow-luxury",
    simple: "bg-white border border-primary-100/10 shadow-sm",
    navy: "bg-navy-900/90 text-white border border-white/10 shadow-luxury",
  };

  const liftClasses = hoverLift
    ? "hover:-translate-y-1 hover:shadow-luxury cursor-default"
    : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${liftClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
