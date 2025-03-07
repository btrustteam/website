import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import Cohort from "../cohort";
import FaqContainer from "../faq";
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
      <FaqContainer
        faqs={[
          {
            answer: "We offer three types of developer grants:",
            question: "What types of Developer Grants does Btrust offer?",
            lists: [
              "Long-Term Grants (BOSC) – For developers making sustained contributions to Bitcoin open-source projects.",
              "Starter Grants – Six-month grants to help new developers begin contributing to Bitcoin development.",
              "Seeder Grants – Supporting open-source Bitcoin research and development in Africa and the Global South.",
            ],
          },
          {
            answer:
              "We fund open-source Bitcoin projects, including work on the Bitcoin protocol, Layer 2 solutions, security improvements, developer tooling, and related research.",
            question: "What kind of Bitcoin projects qualify?",
          },
          {
            answer:
              "Both individuals and teams can apply, but all work must remain open-source and publicly accessible.",
            question: "Can I apply as an individual, or do I need a team?",
          },
          {
            answer: "",
            question:
              "What’s the difference between a Seeder Grant and an Education Research Grant?",
            lists: [
              "If the research focuses on Bitcoin FOSS development (e.g., protocol upgrades, security enhancements, tooling), it falls under the Seeder Grant.",
              "If the research is for educational purposes (e.g., adoption studies, reports on ecosystem trends), it qualifies as an Education Research Grant.",
            ],
          },
          {
            question: "How long do Developer Grants last?",
            answer: "Grant durations vary:",
            lists: [
              "Starter Grants last six months.",
              "Long-Term BOSC Grants typically last one year, with renewal options.",
              "Seeder Grants are based on project scope and timeline.",
            ],
          },
          {
            question: "Do I need a specific project idea to apply?",
            answer:
              "Not necessarily. If you’re new, the Starter Grant can help you explore and contribute to existing open-source projects. However, for the Seeder Grant, a well-defined project proposal is required.",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
