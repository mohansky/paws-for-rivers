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
    lightred: "#ffad9e;", // Lightred
    muted: "#f5f5f5", // Muted
  };

  const selectedColor = colors[colorOption];

  return (
    <div className={cn("relative h-24 -mt-20", className)}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 70 C 150 20, 300 120, 450 70 C 600 20, 750 120, 900 70 C 1050 20, 1200 120, 1200 70 L 1200 120 L 0 120 Z"
          fill={selectedColor}
          className="transition-all duration-300 ease-in-out"
        />
      </svg>
    </div>
  );
}
