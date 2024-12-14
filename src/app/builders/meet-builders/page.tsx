import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { Metadata } from "next";
import CurrentBuilders from "./currentBuilder";
import Hero from "./hero";
import PotentialBuilder from "./potential";

export const metadata: Metadata = {
  title: "Meet Btrust builders",
  description: "Meet The Builders",
  openGraph: {
    type: "website",
    title: "Meet Btrust builders",
    description: "Meet The Builders",
    url: "https://www.btrust.tech/builders/meet-builders",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-89-auS9DlGEkFBxPdgk99MalH74lvvrNh.JPG",
      },
    ],
  },
};

export default function MeetBuilders() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PotentialBuilder />
      <CurrentBuilders />
      <ActivitiesNewsletter />
    </div>
  );
}
