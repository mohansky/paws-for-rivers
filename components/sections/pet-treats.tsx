import React from "react";
import { Container } from "../styled/container";
import { Heading } from "../styled/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Paragraph } from "../styled/paragraph";

export default function PetTreats() {
  return (
    <>
   
    <section id="treats" className="bg-lightbrown py-20">
      <Container width="marginx">
        <Heading size="md" className="text-center">
          Pet Treats
        </Heading>
        <Paragraph className="text-center mb-5">
          Our products are sustainably sourced from artisanal fishermen.
        </Paragraph>

        <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {treats.map((treat) => (
            <Card
              key={treat.idx}
              className="bg-transparent border-none shadow-none"
            >
              <CardHeader className="p-0 m-0">
                <Image
                  src={treat.image}
                  alt="hero"
                  width={360}
                  height={360}
                  className="rounded-2xl"
                />
              </CardHeader>
              <CardContent className="text-center my-5">
                <CardTitle className="text-blue-950 mb-3">
                  {treat.name}
                </CardTitle>
                <CardDescription className="text-blue-900">
                  {treat.origin}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
}

const treats = [
  {
    idx: 1,
    name: "African Catfish Strips",
    origin: "African Catfish",
    image: "/images/treats/cat-treat.jpg",
  },
  {
    idx: 2,
    name: "Alligator Gar Chips",
    origin: "South America",
    image: "/images/treats/dog-treat.jpg",
  },
  {
    idx: 3,
    name: "Nile Tilapia Sticks",
    origin: "Africa",
    image: "/images/treats/cat-treat-2.jpg",
  },
];
