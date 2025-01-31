import React from "react";
import { Heading } from "../styled/heading";
import { Paragraph } from "../styled/paragraph";
// import Image from "next/image";
import { Container } from "../styled/container";
import { Icon } from "@iconify/react";

export default function WhatAreInvasiveFish() {
  return (
    <section id="whatareif" className="bg-lightbrown py-20 mt-20">
      <Container width="marginx">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Icon
            icon="tabler:paw"
            width="400"
            height="400"
            className="text-blue-950 hidden lg:block lg:min-w-64"
          />
          <Icon
            icon="tabler:paw"
            width="400"
            height="400"
            className="text-blue-950 absolute top-20 opacity-10 block lg:hidden"
          />
          <div className="col-span-3">
            <Heading size="md">What are invasive species of Fish</Heading>
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
