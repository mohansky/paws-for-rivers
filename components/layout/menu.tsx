"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./hamburger-menu";
import Navbar from "./navbar";
// import { options } from "@/.velite";

export default function Menu() {
  const [yValue, setYValue] = useState(0);
  const [toHide, setToHide] = useState(false);

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      if (yValue >= window.scrollY) {
        setToHide(false);
      } else {
        setToHide(true);
      }
      setYValue(window.scrollY);
    };

    window.addEventListener("scroll", showHeaderOnScrollUp);

    return () => {
      window.removeEventListener("scroll", showHeaderOnScrollUp);
    };
  }, [yValue]);

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 z-30 bg-teal-500 backdrop-blur" +
          (toHide && "py-0 h-0 hidden")
        }
      >
        <div className=" flex justify-between py-1 max-w-8xl mx-auto px-4 md:px-8">
          <Link href="/" title="Paws for Rivers">
            <Image
              src="/images/pfrlogo.svg"
              alt="Paws for Rivers"
              title="Paws for Rivers"
              // className="bg-primary"
              width="100"
              height="100"
            />
          </Link>
          <HamburgerMenu />
          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
