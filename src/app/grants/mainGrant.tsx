"use client";
import ActivitiesNewsletterAndFooter from "@/components/ActivitiesNewsLetterFooter";
import GrantsHero from "./hero";

export default function MainGrant() {
  return (
    <div className="flex flex-col">
      <GrantsHero />
      <ActivitiesNewsletterAndFooter />
    </div>
  );
}
