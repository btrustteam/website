"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Eligibility from "./eligibility";
import GrantsHero from "./hero";
import StartGrant from "./starter";

export default function MainGrant() {
  return (
    <div className="flex flex-col">
      <GrantsHero />
      <Eligibility />
      <StartGrant />
      <ActivitiesNewsletter />
    </div>
  );
}
