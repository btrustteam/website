"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { Metadata } from "next";
import Enquiry from "./enquiry";
import Hero from "./hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "We’d Love to Hear from You",
  openGraph: {
    type: "website",
    title: "Contact Us",
    description: "We’d Love to Hear from You",
    url: "https://www.btrust.tech/contact",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2041%20(4)-mJpb1uDxiZZWzI5TSKOMminFDJJcJF.png",
      },
    ],
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Enquiry />
      <ActivitiesNewsletter />
    </div>
  );
}
