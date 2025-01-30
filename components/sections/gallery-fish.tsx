"use client";

import { Heading } from "../styled/heading";
// import WaveDivider from "../styled/wave-divider";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <>
      <section id="gallery" className="py-20">
        {/* // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"> */}
        <Heading size="md" className="text-center mb-5">
          Get to know some invasive fish
        </Heading>
        <InfiniteMovingCards items={fish} direction="right" speed="slow" />
      </section>
    </>
  );
}

const fish = [
  {
    idx: 1,
    origin: "Middle East, Central and South Africa.",
    name: "African Catfish",
    image: "/images/fish/African-Catfish.jpg",
  },
  {
    idx: 3,
    origin: "South America",
    name: "Alligator Gar",
    image: "/images/fish/Alligator-Gar.jpg",
  },
  {
    idx: 4,
    origin: "South America",
    name: "Arapaima",
    image: "/images/fish/Arapaima.jpg",
  },
  {
    idx: 5,
    origin: "South America",
    name: "Armored Catfish",
    image: "/images/fish/Armored-Catfish.jpg",
  },
  {
    idx: 8,
    origin: "South America",
    name: "Mozambique Tilapia",
    image: "/images/fish/Mozambique-Tilapia.jpg",
  },
  {
    idx: 7,
    origin: "Africa",
    name: "Nile Tilapia",
    image: "/images/fish/Nile-Tilapia.jpg",
  },
  {
    idx: 2,
    origin: "South America",
    name: "Red Bellied Pacu",
    image: "/images/fish/Red-Bellied-Pacu.jpg",
  },
  {
    idx: 6,
    origin: "South America",
    name: "Red Bellied Piranha",
    image: "/images/fish/Red-Bellied-Piranha.jpg",
  },
];
