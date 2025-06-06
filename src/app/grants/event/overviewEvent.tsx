import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import FaqContainer from "../faq";
import EventBrief from "./brief";
import EventHero from "./eventHero";
import WhatWeFund from "./whatWeFund";

export default function OverviewEvent({
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
      <EventHero setPage={setPage} />
      <EventBrief />
      <WhatWeFund setCurrentSection={setCurrentSection} />
      <FaqContainer
        faqs={[
          {
            answer:
              "We support Bitcoin-only events that help onboard and connect contributors to the open-source ecosystem, including:",
            question: "What kinds of events do you fund?",
            lists: [
              "Grassroots meetups (BitDevs), bootcamps, and developer-focused events.",
              "Events with a strong technical focus.",
            ],
          },
          {
            answer:
              "Yes, but funding is only available for non-commercial, Bitcoin-focused events that align with Btrust’s mission",
            question: "Can event organizers apply for funding?",
          },
          //   {
          //     answer:
          //       "Yes, we offer travel support for speakers presenting at developer-focused Bitcoin conferences.",
          //     question: "Do you fund travel costs for speakers and attendees?",
          //   },
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
              "Bitcoin Lightning Development Bootcamp (Benin, Cape Town, Kaduna, Lagos, Lusaka, Nairobi, Senegal)",
              "Bitdevs across Abuja, Accra, Cotonou, Douala, Gitega, Goma, Joburg, Kaduna, Kampala, Kano, Lagos, Nairobi and Uyo",
            ],
          },
          {
            question: "How do I apply?",
            answer:
              "Simply head to the Event Grants section above and click the button to complete your application.",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
