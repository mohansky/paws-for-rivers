import React from "react";
import { Heading } from "../styled/heading";
import { Paragraph } from "../styled/paragraph";
// import Image from "next/image";
import { Container } from "../styled/container";
import WaveDivider from "../styled/wave-divider";
import { Icon } from "@iconify/react";

export default function WhyIsItaThreat() {
  return (
    <>
      <WaveDivider colorOption="teal" />
      <section id="whyitathreat" className="bg-teal-100 py-20">
        <Container width="marginx">
          <div className="relative flex flex-col md:flex-row items-center gap-4">
            <div>
              <Heading size="md">Why is it a threat</Heading>
              <Paragraph className="mb-5">
                India boasts a rich and diverse range of freshwater fish
                species, due to its varied climatic zones, river systems, and
                unique landscapes. The country&apos;s freshwater fish diversity
                is not only significant in terms of species count but also in
                the ecological and economic value they hold.
              </Paragraph>
              <Paragraph className="mb-5">
                India is home to over <b> 900 species of freshwater fishes,</b>{" "}
                many of which are <b>endemic</b> to the subcontinent, meaning{" "}
                <b>they are found nowhere else in the world.</b>
              </Paragraph>
              <Paragraph className="mb-5">
                Invasive fish, with established reproductive populations in
                Rivers, threaten the existence of native species, which are
                already under the risk of extinction, due to various human
                activities. (create an animated video here to visually show
                population explosion).
              </Paragraph>
            </div>
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
          </div>
        </Container>
      </section>
    </>
  );
}
