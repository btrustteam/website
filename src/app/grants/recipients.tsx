import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import LittleHeading from "@/components/LittleHeading";
import GrantsHeader from "./grantsHeading";
import StarterRecipients from "./starterRecipient";
import Image from "next/image";
import OpenSourceRecipient from "./openSourceRecipient";

export default function Recipients() {
  return (
    <div className="flex flex-col">
      <div className="px-[6.5rem] mt-[3.5rem]">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <Image src={"/back.svg"} alt="back" width={16} height={16} />
            <LittleHeading text="grants" className=" cursor-pointer" />
          </div>
          <GrantsHeader text="Starter Grant Recipients" />
        </div>
        {/* <StarterRecipients /> */}
        <OpenSourceRecipient />
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
