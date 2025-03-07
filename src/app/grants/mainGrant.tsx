"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import AllGrants from "./allGrantContainer";
import BtrustGrant from "./btrustGrant";
import FaqContainer from "./faq";

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
      <FaqContainer
        faqs={[
          {
            answer:
              "Btrust Grants provide financial support to developers, educators, and event organizers working to strengthen the Bitcoin open-source ecosystem. We offer grants for developer contributions, education programs, research, and Bitcoin-only events to remove financial barriers and enable impactful contributions.",
            question: "What are Btrust Grants?",
          },
          {
            answer:
              "Our grants are open to developers, educators, and organizers from Africa, India, Latin America, MENA, and Southeast Asia. We also consider applicants from other Global South regions on a case-by-case basis, contingent on their Proof of Work.",
            question: "Who can apply for a Btrust Grant?",
          },
          {
            answer: "We fund:",
            question: "What kind of projects do you fund?",
            lists: [
              "Open-source Bitcoin development and research.",
              "Developer training, language translation, and Bitcoin-related research.",
              "Bitcoin-only meetups, bootcamps, and developer-focused conferences.",
            ],
          },
          {
            answer: "All grants are paid in Bitcoin (BTC)",
            question: "How are grants paid out?",
          },
          {
            question: "How do I apply?",
            answer:
              "You can apply by visiting our Grants Page, selecting the relevant grant category, then applying through the link provided. Applications are reviewed on a rolling basis.",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
