import LittleText from "../littleTitle";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import Image from "next/image";
import OutlineButton from "../buttons/OutlineButton";
import BorderlessButton from "../buttons/BorderLessButton";

export default function ApplyForFunding() {
  return (
    <div className="flex flex-col items-start py-[6.25rem] px-[6.5625rem] bg-bg-black gap-[4rem]">
      <div className="w-full flex justify-between items-end">
        <div>
          <LittleText text="APPLY FOR FUNDING" className="" />
          <SectionHeader
            text="Get funded to contribute to Free and Open-Source Bitcoin projects."
            className="w-[36.75rem]"
          />
        </div>
        <Paragraph
          text="We have two grant schemes for developers who want to start or continue their contribution efforts to open-source Bitcoin projects."
          className="w-[33.6875rem]"
        />
      </div>
      <div className="flex flex-col items-center gap-[2.5rem] w-full">
        <div className="w-full flex p-[1.5rem] gap-[1.5rem] rounded-2xl bg-[#222]">
          <Image
            src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image-zH3GMgNt52mguWJ1eAldR6XUoW66Do.png"
            alt="Join"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-[22.3125rem] object-cover rounded-lg"
          />
          <div className="w-full flex flex-col p-[2rem] gap-[1rem]">
            <div className="gap-[1rem] flex flex-col w-full">
              <div>
                <LittleText text="APPLY FOR A STARTER GRANT" className="" />
                <SectionHeader
                  text="New to Bitcoin Open-Source Contributions?"
                  className="text-[1.5rem]"
                />
              </div>
              <Paragraph
                text="This grant supports software developers new to Bitcoin open-source contributions. 
It provides full-time funding for six months to help you focus on key projects and prepare a strong proposal for long-term support."
                className=""
              />
            </div>
            <div className="flex gap-[1rem] items-center">
              <OutlineButton text="Apply for Funding" onClick={() => {}} />
              <BorderlessButton text="Read More" onClick={() => {}} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between p-[1.5rem] gap-[1.5rem] rounded-2xl bg-[#222]">
          <div className="w-full flex flex-col p-[2rem] gap-[1rem]">
            <div className="gap-[1rem] flex flex-col w-full">
              <div>
                <LittleText text="JOIN THE OPEN-SOURCE COHORT" className="" />
                <SectionHeader
                  text="Are you an Experienced Open-Source Contributor?"
                  className="text-[1.5rem]"
                />
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <Paragraph
                  text="Working in open source can feel isolating, especially for developers in the Global South facing pay and career uncertainties."
                  className="w-full"
                />
                <Paragraph
                  text="Our Open Source Cohort offers support, allowing you to contribute to Bitcoin projects independently within a supportive team framework."
                  className=""
                />
              </div>
            </div>
            <div className="flex gap-[1rem] items-center">
              <OutlineButton text="Apply for Funding" onClick={() => {}} />
              <BorderlessButton text="Read More" onClick={() => {}} />
            </div>
          </div>
          <Image
            src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(1)-vtlrWpxlQAlrOkwg8fDaGi9XeuAuUG.png"
            alt="Join"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-[22.3125rem] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
