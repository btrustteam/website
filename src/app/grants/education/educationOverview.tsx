import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
import FaqContainer from "../faq";
import EducationBrief from "./brief";
import HeroSection from "./heroSection";
import WhoCanApply from "./whoCanApply";

export default function EducationOverview({
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
    <div ref={firstDivRef} className="">
      <HeroSection setPage={setPage} />
      <EducationBrief />
      <WhoCanApply setCurrentSection={setCurrentSection} />
      <FaqContainer
        faqs={[
          {
            answer:
              "We fund programs and initiatives that expand Bitcoin knowledge, including:",
            question: "What does the Education Grant cover?",
            lists: [
              "Developer Training Programs – Hands-on workshops and structured courses.",
              "Bitcoin Research – Studies and reports on Bitcoin development and adoption.",
              //   "Language Translation & Automation – Expanding access to Bitcoin knowledge through manual translation and AI-assisted tools.",
            ],
          },
          {
            answer:
              "Both individuals and organizations can apply, but all content must remain open-source and freely available.",
            question:
              "Can I apply as an individual, or does it need to be an organization?",
          },
          //   {
          //     answer:
          //       "Any research that provides data-driven insights into Bitcoin adoption, ecosystem growth, or development trends in the Global South.",
          //     question: "What qualifies as an Education Research Grant?",
          //   },
          {
            question: "How long does an Education Grant last?",
            answer:
              "Grant durations vary based on project scope, typically ranging from six months to one year.",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
