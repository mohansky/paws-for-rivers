import React from "react";
import { Heading } from "../styled/heading";
import { Paragraph } from "../styled/paragraph";
import Image from "next/image";
import { Container } from "../styled/container";
import WaveDivider from "../styled/wave-divider";

export default function WhyThisPetFood() {
  return (
    <>
      <WaveDivider colorOption="red" />
      <section id="whythispetfood" className="bg-red-50 py-20">
        <Container width="marginx">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/images/cf.jpg"
              alt="hero"
              width={240}
              height={240}
              className="rounded-full"
            />
            <div>
              {/* <div className="bg-lightred px-5 py-3 rounded-full w-fit"> */}
              <Heading size="md">Why this pet food</Heading>
              <Paragraph className="">
                We aim to provide wholesome treats and supplements to take care
                of your pets’ nutritional requirements, with the additional
                benefits of addressing joint and skin health. We provide
                sustainable fish based pet food, through the use of
                overpopulated invasive freshwater fishes as a source of fish
                protein in pet food. It also provides an alternative source to
                wild caught/ farmed marine fish, with its high nutritional value
                and omega 3 fatty acids. Every purchase you make contributes
                towards river research and conservation projects.
              </Paragraph>
            </div>
          </div>
        </Container>
      </section>
      {/* <WaveDivider colorOption="red"/> */}
    </>
  );
}
