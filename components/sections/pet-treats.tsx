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
import { Button } from "../ui/button";
import Link from "next/link";

export default function PetTreats() {
  return (
    <>
      <section id="treats" className="py-20">
        <Container width="marginx">
          <div className="mx-auto flex flex-col items-center mb-10">
            <Heading size="md">Pet Treats</Heading>
            <Paragraph className="mb-5">
              Our products are sustainably sourced from artisanal fishermen. Get
              in touch to preorder now.
            </Paragraph>
            <Link href="/#contact">
              <Button className="uppercase font-semibold">Preorder</Button>
            </Link>
          </div>

          <div className="grid place-content-center md:grid-cols-2 gap-10 mx-auto">
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
    name: "Tilapia Bites",
    origin: "African Catfish",
    image: "/images/treats/cat-treat.jpg",
  },
  {
    idx: 2,
    name: "Catfish Feast",
    origin: "South America",
    image: "/images/treats/dog-treat.jpg",
  },
  // {
  //   idx: 3,
  //   name: "Nile Tilapia Sticks",
  //   origin: "Africa",
  //   image: "/images/treats/cat-treat-2.jpg",
  // },
];
