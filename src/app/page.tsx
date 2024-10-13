import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import ApplyForFunding from "@/components/applyFunding";
import BitDev from "@/components/bitDev";
import BtrustUpdate from "@/components/btrustUpdate";
import Hero from "@/components/hero";
import StartYourJourney from "@/components/start";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btrust",
  description:
    "We locate, educate and renumerate Bitcoin Open-Source Engineers in the Global South",
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <StartYourJourney />
      <ApplyForFunding />
      <BitDev />
      <BtrustUpdate />
      <ActivitiesNewsletter />
    </div>
  );
}
