"use client";
import ApplyForFunding from "@/components/applyFunding";
import BitDev from "@/components/bitDev";
import BtrustUpdate from "@/components/btrustUpdate";
import Gradient from "@/components/gradient";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Pattern from "@/components/pattern";
import StartYourJourney from "@/components/start";

export default function Home() {
  return (
    <div className="bg-bg-black relative">
      <Pattern />
      <Gradient />
      <Nav />
      <Hero />
      <StartYourJourney />
      <ApplyForFunding />
      <BitDev />
      <BtrustUpdate />
    </div>
  );
}
