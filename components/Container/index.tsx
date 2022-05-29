import React from "react";

export default function index({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-5 md:px-0 py-10 ${className}`}>
      {children}
    </div>
  );
}
