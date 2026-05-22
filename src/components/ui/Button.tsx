import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "white" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: any;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  iconPosition = "right",
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  // Base classes with high-end micro-animations
  const baseClasses =
    "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none hover:scale-102 active:scale-98";

  // Size classes
  const sizeClasses = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
  };

  // Variant classes
  const variantClasses = {
    primary: "btn-primary shadow-soft hover:shadow-glow text-white",
    white: "btn-white text-navy-700 shadow-soft",
    outline:
      "border border-primary-200/50 bg-white/40 text-primary-600 hover:bg-primary-50/50 backdrop-blur-sm",
    text: "text-primary-600 hover:text-primary-700 hover:underline px-0 py-0 rounded-none bg-transparent hover:scale-100 active:scale-100",
  };

  // Content rendering
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2 flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 flex-shrink-0">{icon}</span>
      )}
    </>
  );

  // If href is provided, render polymorphic anchor/link
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("https") ||
      href.startsWith("tel") ||
      href.startsWith("mailto") ||
      href.startsWith("wa.me");

    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          {...props}>
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        target={target}
        {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}>
      {content}
    </button>
  );
}
