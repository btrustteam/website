"use client";
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
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Screenshot%202023-12-28%20at%2008.44%201-ni992ux3ckchiqqnxdCdiuWhvWWqH8.png",
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
