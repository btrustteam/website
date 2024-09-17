"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Enquiry from "./enquiry";
import Hero from "./hero";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Enquiry />
      <ActivitiesNewsletter />
    </div>
  );
}
