"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import ApplyProgress from "./applyProgress";
import ApplyHero from "./hero";
import Program from "./program";

export default function Apply() {
  return (
    <div className="flex flex-col">
      <ApplyHero />
      <Program />
      <ApplyProgress />
      <ActivitiesNewsletter />
    </div>
  );
}
