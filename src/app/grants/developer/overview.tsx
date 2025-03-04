import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import Cohort from "../cohort";
import SeederGrant from "../seederGrant";
import StartGrant from "../starter";
import DeveloperInfo from "./info";
import OverviewHero from "./overviewHero";

export default function OverviewDeveloper({
  setSection,
  setPage,
}: {
  setSection: (section: string) => void;
  setPage: (page: string) => void;
}) {
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
      firstDivRef.current.focus();
    }
  }, []);
  return (
    <div ref={firstDivRef} className="flex flex-col w-full">
      <OverviewHero setPage={setPage} />
      <DeveloperInfo />
      <StartGrant setPage={setSection} />
      <Cohort setPage={setSection} />
      <SeederGrant />
      <ActivitiesNewsletter />
    </div>
  );
}
