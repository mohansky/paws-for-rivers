import React from "react";
import { Heading } from "../styled/heading";
import { Paragraph } from "../styled/paragraph";
import Image from "next/image";
import { Container } from "../styled/container";

export default function WhatAreInvasiveFish() {
  return (
    <section id="whatareif" className="bg-lightbrown py-20">
      <Container width="marginx">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/images/piranha.png"
            alt="hero"
            width={240}
            height={240}
            className="rounded-full bg-blue-200 col-span-1"
          />
          <div className="col-span-3">
            <Heading size="md">What are Invasive Alien Species of Fish</Heading>
            <Paragraph className="mb-10">
              Quite simply put, they are fish that have been introduced
              illegally or through the aquarium trade and through aquaculture
              with good intentions, but are causing adverse harm to the ecology
              and have negative socio-economic impacts. Some of the invasive
              fish have been banned by the government, from being bred.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  );
}
