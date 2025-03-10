import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import Cohort from "../cohort";
import FaqContainer from "../faq";
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
      <FaqContainer
        faqs={[
          {
            answer: "We offer two types of developer grants:",
            question: "What types of Developer Grants does Btrust offer?",
            lists: [
              "Long-Term Grants (BOSC) – For developers making sustained contributions to Bitcoin open-source projects.",
              "Starter Grants – Six-month grants to help new developers begin contributing to Bitcoin development.",
            ],
          },
          {
            answer:
              "We fund open-source Bitcoin projects, including work on the Bitcoin protocol, Layer 2 solutions, security improvements, developer tooling, and related research.",
            question: "What kind of Bitcoin projects qualify?",
          },
          {
            question: "How long do Developer Grants last?",
            answer: "Grant durations vary:",
            lists: [
              "Starter Grants last six months.",
              "Long-Term BOSC Grants typically last one year, with renewal options.",
            ],
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
