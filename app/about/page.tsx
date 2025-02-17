import { InfiniteMovingCardsDemo } from "@/components/sections/gallery-fish";
// import Goals from "@/components/sections/goals";
// import Hero from "@/components/sections/hero";
// import PetTreats from "@/components/sections/pet-treats";
import Team from "@/components/sections/team";
import WhyIsItaThreat from "@/components/sections/why-is-it-a-threat";
import WhatAreInvasiveFish from "@/components/sections/what-are-invasive-fish";
import ExplainerVideo from "@/components/sections/explainerVideo";
import WhyThisPetFood from "@/components/sections/why-this-pet-food";
// import TestSection from "@/components/sections/test-section";

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <TestSection/> */}
      <WhatAreInvasiveFish />
      <WhyIsItaThreat />
      <ExplainerVideo />
      <WhyThisPetFood />
      <InfiniteMovingCardsDemo />
      {/* <PetTreats /> */}
      {/* <Goals /> */}
      <Team />
    </main>
  );
}
