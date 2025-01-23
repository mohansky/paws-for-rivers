"use client";
import React from "react";
import { Heading } from "../styled/heading";
import Link from "next/link";
import { Button } from "../ui/button";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { motion } from "framer-motion";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen bg-teal-100 overflow-hidden">
      <motion.img
        className="z-10 absolute bottom-0 left-0 w-full md:w-2/3 lg:w-9/12 h-auto object-right-bottom"
        width={1280}
        height={720}
        src="/cat-by-table.png"
        // src="/kitty-on-branch.png"
        alt="Paws for Rivers"
        title="Paws for Rivers"
        initial={{ y: 200, opacity: 0 }} // Start off-screen (below) with no opacity
        animate={{ y: 0, opacity: 1 }} // End at its original position and become fully visible
        transition={{
          type: "spring",
          ease: "easeInOut",
          stiffness: 75, // Adjust spring stiffness for bounce
          damping: 15, // Control overshooting
          duration: 2.5, // Add slight duration for smoother timing
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm" />
      <div className="absolute top-1/3 lg:top-1/2 left-2 lg:left-32 z-20 text-white w-full">
        <Heading size="xl" fontstyle="display" className="mb-5" asChild={true}>
          <h1>Paws for Rivers</h1>
        </Heading>
        <Heading
          size="sm"
          fontweight="medium"
          className="mb-5 text-balance w-10/12"
        >
          Wholesome, sustainable pet nutrition that cares for your furry
          friend’s joints, skin, and health.
        </Heading>
        <Link href="/">
          <Button size="lg" className="uppercase font-semibold">
            Contact
          </Button>
        </Link>
        {/* <Image
        className="z-10 absolute top-0 left-0  lg:w-full h-auto object-right-bottom"
        width={1280}
        height={720}
        src="/cat-mask.png"
        alt="{item.title}"
        title="{item.title}"
      /> */}
      </div>
    </div>
  );
}
