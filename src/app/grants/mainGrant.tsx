"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import AllGrants from "./allGrantContainer";
import BtrustGrant from "./btrustGrant";
import Cohort from "./cohort";
import CohortStructure from "./cohortStructure";
import Eligibility from "./eligibility";
import GrantsHero from "./hero";
import Perks from "./perks";
import StartGrant from "./starter";

export default function MainGrant({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <GrantsHero />
      <BtrustGrant />
      {/* <Eligibility /> */}
      {/* <StartGrant setPage={setPage} /> */}
      <AllGrants />
      {/* <Perks /> */}
      {/* <Cohort setPage={setPage} /> */}
      {/* <CohortStructure /> */}
      <ActivitiesNewsletter />
    </div>
  );
}
