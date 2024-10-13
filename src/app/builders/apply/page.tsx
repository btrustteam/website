"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { Metadata } from "next";
import ApplyProgress from "./applyProgress";
import Faqs from "./fags";
import ApplyHero from "./hero";
import Program from "./program";

export const metadata: Metadata = {
  title: "Btrust Builders Apply",
  description: "Kickstart Your Bitcoin Developer Career",
  openGraph: {
    type: "website",
    title: "Btrust Builders Apply",
    description: "Kickstart Your Bitcoin Developer Career",
    url: "https://www.btrust.tech/builders/apply",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-6KKpRfy7dN42oSYTCKawD369BLEF6a.png",
      },
    ],
  },
};

export default function Apply() {
  return (
    <div className="flex flex-col">
      <ApplyHero />
      <Program />
      <ApplyProgress />
      <Faqs />
      <ActivitiesNewsletter />
    </div>
  );
}
