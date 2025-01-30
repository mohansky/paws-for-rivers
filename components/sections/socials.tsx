import React from "react";
import { Heading } from "../styled/heading";
import { Container } from "../styled/container";
import SocialLinks from "../styled/social-links";
import WaveDivider from "../styled/wave-divider";
import Phone from "../styled/phone";
import { contact } from "@/data/contact";

export default function Socials() {
  return (
    <>
      <WaveDivider colorOption="lightbrown" />
      <div className="bg-lightbrown pt-1 pb-20">
        <Container id="contact">
          <Heading size="xl" className="text-center mb-20">
            Contact
          </Heading>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly">
            <div className="mb-5">
              <Heading variant="cardtitle" size="md" className="mb-5">
                Get in touch
              </Heading>
              <Phone contact={contact} />
            </div>
            <div>
              <Heading variant="cardtitle" size="md" className="mb-5">
                Follow us
              </Heading>
              <SocialLinks />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
