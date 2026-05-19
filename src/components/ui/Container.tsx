import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean; // If true, removes padding but keeps max-width
}

export default function Container({ children, className = "", clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={`w-full max-w-[82rem] mx-auto ${
        clean ? "" : "px-6 md:px-12 lg:px-16"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
