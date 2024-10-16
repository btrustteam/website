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
  openGraph: {
    type: "website",
    title: "Btrust",
    description:
      "We locate, educate and renumerate Bitcoin Open-Source Engineers in the Global South",
    url: "https://www.btrust.tech/",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/site-NzkG02zso9ZCRsswQ5hC1xFpgEp75r.png",
      },
    ],
  },
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
