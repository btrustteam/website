"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Cohort from "./cohort";
import CohortStructure from "./cohortStructure";
import Eligibility from "./eligibility";
import GrantsHero from "./hero";
import Perks from "./perks";
import StartGrant from "./starter";

export default function MainGrant() {
  return (
    <div className="flex flex-col">
      <GrantsHero />
      <Eligibility />
      <StartGrant />
      <Perks />
      <Cohort />
      <CohortStructure />
      <ActivitiesNewsletter />
    </div>
  );
}
