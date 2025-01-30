"use client";
import React from "react";
import { Heading } from "../styled/heading";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { motion } from "framer-motion";
import { motion } from "motion/react";

export default function Fave() {
  return (
    <div className="relative w-screen h-[60vh] bg-white overflow-hidden">
      <motion.img
        className="z-10 absolute bottom-0 lg:top-0 right-0 w-full md:w-2/3 lg:w-9/12 h-auto object-right-bottom"
        width={1280}
        height={720}
        src="/cat-mask-nobg.png"
        alt="Paws for Rivers"
        title="Paws for Rivers"
        // initial={{ y: 200, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{
        //   type: "spring",
        //   ease: "easeInOut",
        //   stiffness: 75,
        //   damping: 15,
        //   duration: 2.5,
        // }}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/5 backdrop-blur-sm" />
      <div className="absolute w-[50vw] top-10 lg:top-1/3 left-20 lg:left-10 z-20 text-white">
        <Heading size="md" fontstyle="display" className="mb-5">
          Your Pet’s New Fave Treat
        </Heading>
        <Heading
          size="sm"
          fontweight="medium"
          className="mb-5 text-balance w-10/12"
        >
          Our clean label treats are the perfect high protein, low fat snacks
          for both dogs and cats of all ages and sizes. They can be used for
          training or broken up and used as a yummy topper too!
        </Heading>
        {/* <Link href="/">
          <Button size="lg" className="uppercase font-semibold">
            Contact
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
