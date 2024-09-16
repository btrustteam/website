"use client";

import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

export default function BuildersHero() {
  return (
    <div className="flex flex-col justify-center gap-20 mt-14 w-full">
      <div className="flex px-[6.4375rem] py-0 flex-col justify-center gap-4 w-full">
        <div className="flex flex-col w-[61.625rem]">
          <LittleHeading text="btrust builders" className="" />
          <SubHeading
            text="Empowering Open-Source Bitcoin Builders in Africa"
            className=""
          />
        </div>
        <div className="flex flex-col gap-6">
          <Paragraph className="w-[57.5rem] leading-[218.75%]">
            Btrust Builders is a comprehensive engineering program designed to
            train experienced software developers in Africa to contribute to
            open-source Bitcoin & Lightning development. Our program offers an
            immersive learning experience for engineers looking to build their
            competencies and portfolio in Bitcoin & Lightning development and a
            ramp to build a sustainable (funded) career contributing to
            open-source Bitcoin projects.
          </Paragraph>
          <div className="flex gap-8">
            <ButtonWithArrow noIcon={true} text="Apply" onClick={() => {}} />
            <OutlineButton text="Meet the Builders" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="flex jus items-center w-full">
        <DynamicImage
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2023-1mE2ek0Fzkmk5WKbPgEyczcqXiNTBc.png"
          alt="builder"
          className="h-[46.1875rem] w-full"
        />
      </div>
    </div>
  );
}