"use client";
import ActivitiesNewsletterAndFooter from "@/components/ActivitiesNewsLetterFooter";
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
    <div className=" relative">
      <Hero />
      <StartYourJourney />
      <ApplyForFunding />
      <BitDev />
      <BtrustUpdate />
      <ActivitiesNewsletterAndFooter />
    </div>
  );
}
