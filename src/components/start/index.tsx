import ButtonWithArrow from "../buttons/buttonWithArrow";
import ButtonWithIcon from "@/components/buttons/buttonWithIcon";

import LittleText from "../littleTitle";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import Image from "next/image";
import { DISCORD_LINK } from "@/lib/constants";

export default function StartYourJourney() {
  return (
    <div className="flex w-full flex-col lg:flex-row lg:px-[6.5rem] py-[3rem] lg:py-[6.25rem] justify-between items-center gap-[5.44rem] lg:gap-[2.875rem] bg-[#222]">
      <div className="flex flex-col justify-center items-start gap-8 px-[1.5rem]">
        <div className="flex flex-col">
          <LittleText text="BECOME A BTRUST BUILDER" className="" />
          <div className="flex flex-col gap-4 items-start">
            <SectionHeader
              text="Empowering open-source Bitcoin builders in the Global Majority"
              className="w-full lg:w-[26.625rem]"
            />
            <Paragraph className="w-full lg:w-[33.6875rem]">
              Btrust Builders is a comprehensive engineering program designed to train experienced software developers in Africa to contribute to open-source Bitcoin and Lightning development. <br />
              Our program offers an immersive learning experience for engineers looking to build their competencies and portfolio in Bitcoin & Lightning development and a ramp to build a sustainable (funded) career contributing to open-source Bitcoin projects. <br />
              Application is open all year round for mid-senior level engineers ready for the transition.
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[1.5rem]">
          <ButtonWithArrow text="Apply Now" url="/builders" />
          <ButtonWithIcon
              text="Join Our Community"
              iconName="discord"
              url={DISCORD_LINK}
          />
        </div>
      </div>
      <Image
        src={
          "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust-Builders.jpg"
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
