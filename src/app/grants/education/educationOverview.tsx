import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { useEffect, useRef } from "react";
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
      <ActivitiesNewsletter />
    </div>
  );
}
