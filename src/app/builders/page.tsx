"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import BuildersHero from "./buildersHero";

export default function Builders() {
  return (
    <div className="flex flex-col">
      <BuildersHero />
      <div></div>
      <ActivitiesNewsletter />
    </div>
  );
}
