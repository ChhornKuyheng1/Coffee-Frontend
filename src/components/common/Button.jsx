import React from "react";
import { LoaderCircle } from "lucide-react";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
  secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-200",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`w-full inline-flex items-center justify-center gap-2 
        rounded-lg font-medium transition-colors duration-200 focus:outline-none 
        focus:ring-4 focus:ring-blue-100 disabled:opacity-50 disabled:cursor-not-allowed
         ${variants[variant]} 
         ${sizes[size]} 
         ${className}
         `}
      {...props}
    >
      {loading && <LoaderCircle size={17} className="animate-spin" />}
      {children}
    </button>
  );
}
