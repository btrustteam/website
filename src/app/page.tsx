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
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2022%20(2)-k74hWDxrpMm2FhilOCsd8OknPADFul.png",
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
