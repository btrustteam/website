"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Hero from "./hero";
import PotentialBuilder from "./potential";

export default function MeetBuilders() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PotentialBuilder />
      <ActivitiesNewsletter />
    </div>
  );
}
