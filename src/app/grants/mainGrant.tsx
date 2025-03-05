"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import AllGrants from "./allGrantContainer";
import BtrustGrant from "./btrustGrant";

import GrantsHero from "./hero";

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
      <AllGrants setPage={setPage} />
      <ActivitiesNewsletter />
    </div>
  );
}
