import React from "react";
import Image from "next/image";
import { Heading } from "../styled/heading";
import SocialLinks from "../styled/social-links";
// import Address from "../styled/address";
import Phone from "../styled/phone";
import { contact } from "@/data/contact";
import { Container } from "../styled/container";
// import WaveDivider from "../styled/wave-divider";

export default function Footer() {
  return (
    <>
      {/* <WaveDivider colorOption="lightbrown" /> */}
      <footer className="border-primary bg-lightred">
        <Container width="nomargin">
          <div className="py-5 px-20 flex flex-col md:flex-row space-y-5 justify-between">
            <div>
              <Image
                className="w-full h-auto mx-auto my-auto"
                src="/images/pfrlogo.png"
                alt="Paws for Rivers"
                title="Paws for Rivers"
                width="150"
                height="150"
              />
            </div>
            <div>
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
          <div className="flex justify-center border-t border-muted-foreground/50 text-muted-foreground/50 text-xs p-1">
            <p className="m-0">© {new Date().getFullYear()}, Paws for Rivers</p>
            {/* <p className="m-0">
            Designed and Developed by
            <a
              className="footer-link"
              href="https://mohankumar.dev/"
              target="_blank"
              title="Mohan Kumar"
            >
              {" "}
              Mohan{" "}
            </a>
          </p> */}
          </div>
        </Container>
      </footer>
    </>
  );
}
