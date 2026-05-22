import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  background?: "white" | "navy-50" | "navy-900" | "medical-pattern";
  hasDivider?: boolean;
  spacing?: "default" | "none" | "hero" | "custom";
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
  hasDivider = true,
  spacing = "default",
  ...props
}: SectionProps) {
  // Background styles
  const bgClasses = {
    white: "bg-white",
    "navy-50": "bg-navy-50",
    "navy-900": "bg-navy-900 text-white",
    "medical-pattern": "bg-white bg-medical-pattern",
  };

  // Spacing rhythm classes
  const spacingClasses = {
    default: "py-24 lg:py-36",
    none: "",
    hero: "relative pt-10 lg:pt-24 pb-24 sm:pb-32 lg:pb-40 lg:min-h-screen flex flex-col justify-center",
    custom: "",
  };

  return (
    <section
      id={id}
      className={`
    relative
    overflow-x-clip
    overflow-y-visible
    ${bgClasses[background]}
    ${spacingClasses[spacing]}
    ${className}
  `}
      {...props}>
      {/* Dynamic top absolute thin porcelain divider line */}
      {hasDivider && background !== "navy-900" && (
        <div className="section-divider absolute top-0 left-0 right-0 z-10 pointer-events-none"></div>
      )}

      {children}
    </section>
  );
}
