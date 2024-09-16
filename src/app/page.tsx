"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import ApplyForFunding from "@/components/applyFunding";
import BitDev from "@/components/bitDev";
import BtrustUpdate from "@/components/btrustUpdate";
import Hero from "@/components/hero";
import StartYourJourney from "@/components/start";

export default function Home() {
  return (
    <div className=" relative">
      <Hero />
      <StartYourJourney />
      <ApplyForFunding />
      <BitDev />
      <BtrustUpdate />
      <ActivitiesNewsletter />
    </div>
  );
}
