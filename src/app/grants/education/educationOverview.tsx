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
              "Lorem ipsum dolor sit amet consectetur. Et mauris enim mauris habitant enim molestie condimentum ut. Sed rhoncus massa ut ut ultrices vel ut bibendum porta. Ipsum imperdiet elit mauris netus posuere rutrum nisl. Diam scelerisque est id tortor egestas feugiat. Pulvinar leo orci hendrerit facilisis id pulvinar morbi. Fermentum congue tempor dictum sit eu mauris dui nam eu.",
            question: "Lorem Ipsum Dolor SIt Amet",
          },
          {
            answer:
              "Lorem ipsum dolor sit amet consectetur. Et mauris enim mauris habitant enim molestie condimentum ut. Sed rhoncus massa ut ut ultrices vel ut bibendum porta. Ipsum imperdiet elit mauris netus posuere rutrum nisl. Diam scelerisque est id tortor egestas feugiat. Pulvinar leo orci hendrerit facilisis id pulvinar morbi. Fermentum congue tempor dictum sit eu mauris dui nam eu.",
            question: "Lorem Ipsum Dolor SIt Amet",
          },
          {
            answer:
              "Lorem ipsum dolor sit amet consectetur. Et mauris enim mauris habitant enim molestie condimentum ut. Sed rhoncus massa ut ut ultrices vel ut bibendum porta. Ipsum imperdiet elit mauris netus posuere rutrum nisl. Diam scelerisque est id tortor egestas feugiat. Pulvinar leo orci hendrerit facilisis id pulvinar morbi. Fermentum congue tempor dictum sit eu mauris dui nam eu.",
            question: "Lorem Ipsum Dolor SIt Amet",
          },
          {
            answer:
              "Lorem ipsum dolor sit amet consectetur. Et mauris enim mauris habitant enim molestie condimentum ut. Sed rhoncus massa ut ut ultrices vel ut bibendum porta. Ipsum imperdiet elit mauris netus posuere rutrum nisl. Diam scelerisque est id tortor egestas feugiat. Pulvinar leo orci hendrerit facilisis id pulvinar morbi. Fermentum congue tempor dictum sit eu mauris dui nam eu.",
            question: "Lorem Ipsum Dolor SIt Amet",
          },
        ]}
      />
      <ActivitiesNewsletter />
    </div>
  );
}
