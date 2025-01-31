import React from "react";
import { Heading } from "../styled/heading";
// import { Paragraph } from "../styled/paragraph";
import { Container } from "../styled/container";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Paragraph } from "../styled/paragraph";
import WaveDivider from "../styled/wave-divider";

export default function Team() {
  return (
    <>
      <WaveDivider colorOption="lightbrown" />
      <section id="team" className="bg-lightbrown py-20">
        <Container width="marginx">
          <Heading size="md" className="text-center">
            Who we are
          </Heading>
          <Paragraph className="text-center mb-5">
            We are a bunch of people who care for the planet and would like to
            make a difference.
          </Paragraph>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {team.map((team, idx) => (
              <Card
                key={idx}
                className="bg-transparent border-none shadow-none"
              >
                <CardHeader>
                  <Image
                    src={team.image}
                    alt={team.name}
                    width={240}
                    height={240}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-blue-950">{team.name}</CardTitle>
                  <CardDescription className="text-blue-900">
                    {team.role}
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

const team = [
  {
    idx: 1,
    name: "Neeti Mahesh",
    role: "Founder",
    image: "/images/team/neeti-mahesh.jpg",
  },
  {
    idx: 2,
    name: "Sayan Deb Sinha",
    role: "Product & Growth Partner",
    image: "/images/team/sayan-deb-sinha.jpg",
  },
  // {
  //   idx: 3,
  //   name: "James Peterson",
  //   role: "Sales & Distribution",
  //   image: "/images/team/team3.jpg",
  // },
];
