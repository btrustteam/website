import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import FaqContainer from "../faq";
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
      <FaqContainer
        faqs={[
          {
            answer:
              "We support Bitcoin-only events that help onboard and connect contributors to the open-source ecosystem, including:",
            question: "What kinds of events do you fund?",
            lists: [
              "Grassroots meetups (BitDevs), bootcamps, and developer-focused events.",
              "Conferences with a strong technical focus.",
            ],
          },
          {
            answer:
              "Yes, but funding is only available for non-commercial, Bitcoin-focused events that align with Btrust’s mission",
            question: "Can event organizers apply for funding?",
          },
          {
            answer:
              "Yes, we offer travel support for speakers presenting at developer-focused Bitcoin conferences.",
            question: "Do you fund travel costs for speakers and attendees?",
          },
          {
            answer:
              "Yes, but each application is evaluated separately, and funding decisions depend on impact, reach, and alignment with our mission.",
            question: "Can I apply for funding for a recurring event?",
          },
          {
            question: "What events has Btrust funded in the past?",
            answer: "Past grant recipients include:",
            lists: [
              "Africa Bitcoin Conference (Ghana & Kenya, from inception)",
              "Adopting Bitcoin Cape Town (2024 and 2025 editions)",
              "Bitcoin Lightning Development Bootcamp (Nairobi)",
            ],
          },
          {
            question: "How do I apply?",
            answer:
              "Visit our Event & Conference Grants Page and submit your application.",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
