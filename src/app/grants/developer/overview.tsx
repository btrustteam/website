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
