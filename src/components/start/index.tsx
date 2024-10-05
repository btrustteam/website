import ButtonWithArrow from "../buttons/buttonWithArrow";
import LittleText from "../littleTitle";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import Image from "next/image";

export default function StartYourJourney() {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:px-[6.5rem] py-[3rem] lg:py-[6.25rem] justify-between items-center gap-[5.44rem] lg:gap-[2.875rem] bg-[#222]">
      <div className="flex flex-col justify-center items-start gap-8 px-[1.5rem]">
        <div className="flex flex-col">
          <LittleText text="BECOME A BTRUST BUILDER?" className="" />
          <div className="flex flex-col gap-4 items-start">
            <SectionHeader
              text="Want to Kickstart Your Career in Open-Source Bitcoin Development?"
              className="w-full lg:w-[26.625rem]"
            />
            <Paragraph className="w-full lg:w-[33.6875rem]">
              Btrust Builders is our program designed to educate existing
              software developers from Africa about Bitcoin and Lightning
              development to start them on their journey as open-source Bitcoin
              contributors. The application is open all year round for
              mid-to-senior level engineers who are ready for the transition.
            </Paragraph>
          </div>
        </div>
        <div>
          <ButtonWithArrow text="Learn More" url="/builders" />
        </div>
      </div>
      <Image
        src={
          "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-2EMn6I2YVzhcouFzWtg8GuJeCInCos.png"
        }
        alt="start your journey"
        width={0}
        height={0}
        sizes={"100vw"}
        className={`object-cover w-full lg:w-[40.4375rem] h-[18.75rem] lg:h-auto`}
      />
    </div>
  );
}
