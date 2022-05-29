import React from "react";

export default function Button({
  children,
  small,
  medium,
  large,
  className = "",
}: any) {
  if (medium)
    return (
      <button
        className={`bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`}
        type="button"
      >
        {children}
      </button>
    );

  if (large)
    return (
      <button
        className={`bg-red-500 text-white active:bg-red-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`}
        type="button"
      >
        {children}
      </button>
    );

  return (
    <button
      className={`bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
