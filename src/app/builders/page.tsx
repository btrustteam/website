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
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-89-auS9DlGEkFBxPdgk99MalH74lvvrNh.JPG",
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
