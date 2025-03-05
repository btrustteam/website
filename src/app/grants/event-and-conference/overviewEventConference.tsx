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
