import ButtonWithArrow from "../buttons/buttonWithArrow";
import LittleTexxt from "../littleTitle";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import Image from "next/image";

export default function StartYourJourney() {
  return (
    <div className="flex w-full px-[6.5rem] py-[6.25rem] justify-between items-center gap-[2.875rem] bg-[#222]">
      <div className="flex flex-col justify-center items-start gap-8">
        <div className="flex flex-col">
          <LittleTexxt text="BECOME A BTRUST BUILDER?" className="" />
          <div className="flex flex-col gap-4 items-start">
            <SectionHeader
              text="Want to Kickstart Your Career in Open-Source Bitcoin Development?"
              className="w-[26.625rem]"
            />
            <Paragraph
              text="Btrust Builders is our program designed to educate existing software developers from Africa about Bitcoin and Lightning development to start them on their journey as open-source Bitcoin contributors. The application is open all year round for mid-to-senior level engineers who are ready for the transition."
              className="w-[33.6875rem]"
            />
          </div>
        </div>
        <div>
          <ButtonWithArrow text="Apply Now" onClick={() => {}} />
        </div>
      </div>
      <Image
        src={
          "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020-CcGEDacYv4LD413OMoPnui0R2yTzVs.png"
        }
        alt="start your journey"
        width={0}
        height={0}
        sizes={"100vw"}
        className={` object-cover w-[40.4375rem]`}
      />
    </div>
  );
}
