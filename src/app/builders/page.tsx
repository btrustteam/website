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
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Screenshot%202023-12-28%20at%2008.44%201-ni992ux3ckchiqqnxdCdiuWhvWWqH8.png",
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
