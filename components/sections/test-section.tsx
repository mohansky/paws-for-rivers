// import Image from "next/image";
// import React from "react";

// export default function TestSection() {
//   return (
//     <div className="h-screen w-screen bg-blue-200">
//       <Image
//         src="/waves-layer.png"
//         alt="test"
//         width={1280}
//         height={720}
//         className="h-full w-full object-cover animate-scroll"
//       />
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TestSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="h-screen w-screen bg-blue-200 overflow-hidden">
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <div className="flex">
        {[0, 1].map((index) => (
          <Image
            key={index}
            src="/waves-layer.png"
            alt="test"
            width={1280}
            height={720}
            className="h-full w-full object-cover animate-scroll"
          />
        ))}
      </div>
    </div>
  );
};

export default TestSection;
