import { cn } from "@/lib/utils";
import React from "react";

export default function WaveDivider({
  colorOption = "teal",
  className,
}: {
  colorOption?: "teal" | "red" | "lightbrown" | "lightred" | "muted";
  className?: string;
}) {
  const colors = {
    teal: "#ccfbf1", // Teal
    red: "#fef2f2", // Red
    lightbrown: "#ebe6db", // Lightrown
    lightred: '#ffad9e;', // Lightred
    muted: "#f5f5f5", // Muted
  };

  const selectedColor = colors[colorOption];
  const transparentColor = `${selectedColor}80`; // 50% transparency version

  return (
    <div className={cn("relative h-24 -mt-20", className)}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background wave */}
        <path
          d="M 0 60 C 300 0, 900 120, 1200 60 L 1200 120 L 0 120 Z"
          fill={selectedColor}
          className="transition-all duration-300 ease-in-out"
        />

        {/* Middle wave with different curve and transparency */}
        <path
          d="M 0 70 C 400 20, 800 110, 1200 70 L 1200 120 L 0 120 Z"
          fill={transparentColor}
          className="transition-all duration-300 ease-in-out"
        />

        {/* Front wave with another curve pattern */}
        <path
          d="M 0 80 C 200 40, 1000 100, 1200 80 L 1200 120 L 0 120 Z"
          fill={selectedColor}
          className="transition-all duration-300 ease-in-out opacity-60"
        />
      </svg>
    </div>
  );
}
