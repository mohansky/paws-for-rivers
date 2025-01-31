import React from "react";
import { Heading } from "../styled/heading";
// import { Paragraph } from "../styled/paragraph";
import WaveDivider from "../styled/wave-divider";

export default function Source() {
  return (
    <>
      <WaveDivider className="z-10" />
      <div className=" bg-teal-100 pt-10 pb-32">
        <div className="z-40">
          {/* <Heading size="md" className="text-center">
            Sourced locally from Wild-Caught Fisheries
          </Heading> */}
          {/* <Paragraph className="text-center text-balance max-w-2xl mx-auto">
            We work directly with small-scale fishers in South India to turn
            wild-caught, invasive fish into delectably healthy treats that your
            pet will love.
          </Paragraph> */}
          <Heading size="sm" className="text-center text-balance max-w-5xl mx-auto">
            We work directly with small-scale fishermen in South India to turn
            wild-caught, invasive fish into delectably healthy treats that your
            pet will love.
          </Heading>
        </div>
      </div>
      <WaveDivider className="z-40" colorOption="white" /> 
    </>
  );
}
