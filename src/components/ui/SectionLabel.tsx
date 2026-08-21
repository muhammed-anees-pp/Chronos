import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span className={`block text-xs uppercase tracking-[0.2em] text-brand-muted mb-4 font-sans ${className}`}>
      {children}
    </span>
  );
}
