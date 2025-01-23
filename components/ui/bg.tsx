"use client";
import React from "react";

const WaveBackground = () => {
  return (
    <div className="fixed top-0 left-0">
      <div className="relative w-screen h-screen bg-blue-500">
        {/* Wave wrapper */}
        <div className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden">
          {/* First wave */}
          <div
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{
              animation: "wave 18s linear infinite",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff22'/%3E%3C/svg%3E")`,
              backgroundPosition: "0 bottom",
              backgroundRepeat: "repeat-x",
              backgroundSize: "50% auto",
              transform: "translate3d(0, 0, 0)",
            }}
          />

          {/* Second wave */}
          <div
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{
              animation: "wave 15s linear infinite",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff44'/%3E%3C/svg%3E")`,
              backgroundPosition: "0 bottom",
              backgroundRepeat: "repeat-x",
              backgroundSize: "50% auto",
              transform: "translate3d(0, 0, 0)",
            }}
          />

          {/* Third wave */}
          <div
            className="absolute bottom-0 left-0 w-[200%] h-full"
            style={{
              animation: "wave 11s linear infinite",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff66'/%3E%3C/svg%3E")`,
              backgroundPosition: "0 bottom",
              backgroundRepeat: "repeat-x",
              backgroundSize: "50% auto",
              transform: "translate3d(0, 0, 0)",
            }}
          />

          <style jsx>{`
            @keyframes wave {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(-25%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default WaveBackground;
