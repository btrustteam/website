import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import EventConferenceBrief from "./brief";
import EventConferenceHero from "./eventConferenceHero";
import WhatWeFund from "./whatWeFund";

export default function OverviewEventConference({
  setPage,
  setCurrentSection,
}: {
  setPage: (page: string) => void;
  setCurrentSection: (section: string) => void;
}) {
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
      firstDivRef.current.focus();
    }
  }, []);
  return (
    <div ref={firstDivRef}>
      <EventConferenceHero setPage={setPage} />
      <EventConferenceBrief />
      <WhatWeFund setCurrentSection={setCurrentSection} />
      <ActivitiesNewsletter />
    </div>
  );
}
