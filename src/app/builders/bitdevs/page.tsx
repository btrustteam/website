import { Metadata } from "next";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Hero from "./hero";
import AllBitDevs from "./bitDevsContainer";

export const metadata: Metadata = {
  title: "BitDevs In Africa",
  description: "BitDevs Locations In Africa",
  openGraph: {
    type: "website",
    title: "BitDevs In Africa",
    description: "BitDevs Locations In Africa",
    url: "https://www.btrust.tech/builders/bitdevs",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/bitdevs-accra-jTBPbFCwWOdWJpG3Q40TvJ0iru2mCP.png",
      },
    ],
  },
};

export default function MeetBuilders() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AllBitDevs />
      <ActivitiesNewsletter />
    </div>
  );
}
