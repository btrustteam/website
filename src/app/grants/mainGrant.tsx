"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Eligibility from "./eligibility";
import GrantsHero from "./hero";

export default function MainGrant() {
  return (
    <div className="flex flex-col">
      <GrantsHero />
      <Eligibility />
      <ActivitiesNewsletter />
    </div>
  );
}
