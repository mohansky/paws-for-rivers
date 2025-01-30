import React from "react";
import { Heading } from "../styled/heading";
import Image from "next/image";
import { Container } from "../styled/container";
import WaveDivider from "../styled/wave-divider";

export default function Goals() {
  return (
    <>
    <WaveDivider colorOption="muted" className="z-10" />
    <section id="goals" className="bg-muted">
      <Container className="pt-20 pb-36 " width="marginx">
        <Heading size="md" className="text-center mb-10">
          Sustainable Development Goals
        </Heading>
        <div className="grid place-content-center grid-cols-2 lg:grid-cols-4 gap-10">
          {goals.map((goal, idx) => (
            <div key={idx}>
              <Image
                src={goal.image}
                alt="hero"
                width={240}
                height={240}
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
}

const goals = [
  {
    idx: 1,
    image: "/images/sd/12ResponsibleConsumption.svg",
  },
  {
    idx: 2,
    image: "/images/sd/13Climate.svg",
  },
  {
    idx: 3,
    image: "/images/sd/14LifeBelowWater.svg",
  },
  {
    idx: 4,
    image: "/images/sd/17Partnerships.svg",
  },
];
