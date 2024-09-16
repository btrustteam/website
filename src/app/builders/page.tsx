"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import BuildersHero from "./buildersHero";
import ProcessToJoin from "./process";

export default function Builders() {
  return (
    <div className="flex flex-col">
      <BuildersHero />
      <ProcessToJoin />
      <ActivitiesNewsletter />
    </div>
  );
}
