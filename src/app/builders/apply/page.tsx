"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import ApplyHero from "./hero";
import Program from "./program";

export default function Apply() {
  return (
    <div className="flex flex-col">
      <ApplyHero />
      <Program />
      <ActivitiesNewsletter />
    </div>
  );
}
