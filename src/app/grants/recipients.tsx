import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import LittleHeading from "@/components/LittleHeading";
import GrantsHeader from "./grantsHeading";
import StarterRecipients from "./starterRecipient";
import OpenSourceRecipient from "./openSourceRecipient";

export default function Recipients({
  currentPage,
}: {
  currentPage: string;
}) {
  const router = useRouter();
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
      firstDivRef.current.focus();
    }
  }, []);
  return (
    <div ref={firstDivRef} className="flex flex-col">
      <div className="px-[1.5rem] lg:px-[6.5rem] mt-[2rem] lg:mt-[3.5rem]">
        <div className="flex flex-col justify-center">
          <div
            className="flex items-center gap-2 cursor-pointer z-50"
            onClick={() => router.push('/grants/developer')}
          >
            <Image
              src={"/back.svg"}
              alt="back"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1rem] h-[1rem]"
            />
            <LittleHeading text="grants / developer" className="cursor-pointer" />
          </div>
          {currentPage === "starter" && (
            <GrantsHeader text="Starter Grant Recipients" />
          )}
          {currentPage === "open-source" && (
            <GrantsHeader text="Btrust Open-Source Cohort" />
          )}
        </div>
        {currentPage === "starter" && <StarterRecipients />}
        {currentPage === "open-source" && <OpenSourceRecipient />}
      </div>
    </div>
  );
}
