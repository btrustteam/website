"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Hero from "./hero";

export default function MeetBuilders() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ActivitiesNewsletter />
    </div>
  );
}
