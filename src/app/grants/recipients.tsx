import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import LittleHeading from "@/components/LittleHeading";
import GrantsHeader from "./grantsHeading";
import StarterRecipients from "./starterRecipient";
import Image from "next/image";
import OpenSourceRecipient from "./openSourceRecipient";
import { useEffect, useRef } from "react";

export default function Recipients({
  setPage,
  currentPage,
}: {
  setPage: (page: string) => void;
  currentPage: string;
}) {
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
      firstDivRef.current.focus();
    }
  }, []);
  return (
    <div ref={firstDivRef} className="flex flex-col">
      <div className="px-[6.5rem] mt-[3.5rem]">
        <div className="flex flex-col justify-center">
          <div
            className="flex items-center gap-2 cursor-pointer z-50"
            onClick={() => setPage("")}
          >
            <Image
              src={"/back.svg"}
              alt="back"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1rem] h-[1rem]"
            />
            <LittleHeading text="grants" className="cursor-pointer" />
          </div>
          {currentPage === "starter" && (
            <GrantsHeader text="Starter Grant Recipients" />
          )}
          {currentPage === "open_source" && (
            <GrantsHeader text="Btrust Open-Source Cohort" />
          )}
        </div>
        {currentPage === "starter" && <StarterRecipients />}
        {currentPage === "open_source" && <OpenSourceRecipient />}
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
