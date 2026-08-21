import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white" | "outline-white";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.1em] uppercase transition-all duration-300 font-sans";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-black hover:shadow-lg",
    secondary: "bg-transparent text-brand-dark border border-brand-dark hover:bg-brand-dark hover:text-white",
    white: "bg-white text-black hover:bg-white/90 hover:shadow-lg",
    "outline-white": "bg-transparent text-white border border-white/50 hover:border-white hover:bg-white hover:text-black"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
