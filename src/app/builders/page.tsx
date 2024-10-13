import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { Metadata } from "next";
import BuildersHero from "./buildersHero";
import ProcessToJoin from "./process";

export const metadata: Metadata = {
  title: "Btrust Builders",
  description: "Empowering Open-Source Bitcoin Builders in Africa",
  openGraph: {
    type: "website",
    title: "Btrust Builders",
    description: "Empowering Open-Source Bitcoin Builders in Africa",
    url: "https://www.btrust.tech/builders",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2023-iiQiySKc69hB8Hey4eke2g4XzfnbFB.png",
      },
    ],
  },
};

export default function Builders() {
  return (
    <div className="flex flex-col">
      <BuildersHero />
      <ProcessToJoin />
      <ActivitiesNewsletter />
    </div>
  );
}
