import LittleText from "../littleTitle";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import Image from "next/image";
import OutlineButton from "../buttons/OutlineButton";
import BorderlessButton from "../buttons/BorderLessButton";
import ButtonWithArrow from "../buttons/buttonWithArrow";

export default function ApplyForFunding() {
  return (
    <div className="flex flex-col items-start py-[5rem] px-[1.5rem] lg:py-[6.25rem] lg:px-[6.5625rem] bg-bg-black lg:gap-[4rem] gap-6">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-end">
        <div>
          <LittleText text="APPLY FOR FUNDING" className="" />
          <SectionHeader
            text="Get funded to contribute to Free and Open-Source Bitcoin projects."
            className="w-full lg:w-[36.75rem]"
          />
        </div>
        <Paragraph className="w-full lg:w-[33.6875rem]">
          We have two grant schemes for developers who want to start or continue
          their contribution efforts to open-source Bitcoin projects.
        </Paragraph>
      </div>
      <div className="flex flex-col items-center gap-6 lg:gap-[2.5rem] w-full">
        <div className="w-full flex flex-col lg:flex-row p-4 lg:p-[1.5rem] gap-[1.5rem] rounded-2xl bg-[#222]">
          <Image
            src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image-zH3GMgNt52mguWJ1eAldR6XUoW66Do.png"
            alt="Join"
            width={0}
            height={0}
            sizes={"100vw"}
            className="w-full lg:w-[22.3125rem] object-cover rounded-lg"
          />
          <div className="w-full flex flex-col lg:p-[2rem] gap-8 lg:gap-[1rem]">
            <div className="gap-[1rem] flex flex-col w-full">
              <div>
                <LittleText text="APPLY FOR A STARTER GRANT" className="" />
                <SectionHeader
                  text="New to Bitcoin Open-Source Contributions?"
                  className="text-[1.5rem]"
                />
              </div>
              <Paragraph className="">
                This grant supports software developers new to Bitcoin
                open-source contributions.  It provides full-time funding for
                six months to help you focus on key projects and prepare a
                strong proposal for long-term support.
              </Paragraph>
            </div>
            <div className="flex flex-col lg:flex-row gap-[1rem] lg:items-center w-full">
              <div className="lg:flex items-center justify-center hidden">
                <OutlineButton text="Apply for Funding" onClick={() => {}} />
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <BorderlessButton text="Read More" onClick={() => {}} />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <ButtonWithArrow
                  text="Apply for Funding"
                  onClick={() => {}}
                  className="w-full"
                  noIcon={true}
                />
              </div>
              <div className="flex items-center justify-center w-full lg:hidden">
                <OutlineButton
                  text="Read More"
                  onClick={() => {}}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-col-reverse flex lg:flex-row lg:justify-between p-4 lg:p-[1.5rem] gap-[1.5rem] rounded-2xl bg-[#222]">
          <div className="w-full flex flex-col lg:p-[2rem] gap-[1rem]">
            <div className="gap-[1rem] flex flex-col w-full">
              <div>
                <LittleText text="JOIN THE OPEN-SOURCE COHORT" className="" />
                <SectionHeader
                  text="Are you an Experienced Open-Source Contributor?"
                  className="!text-[1.5rem]"
                />
              </div>
              <div className="flex flex-col lg:gap-[1.5rem]">
                <Paragraph className="w-full">
                  Working in open source can feel isolating, especially for
                  developers in the Global South facing pay and career
                  uncertainties.
                </Paragraph>
                <Paragraph className="">
                  Our Open Source Cohort offers support, allowing you to
                  contribute to Bitcoin projects independently within a
                  supportive team framework.
                </Paragraph>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[1rem] w-full lg:items-center">
              <div className="lg:flex items-center justify-center hidden">
                <OutlineButton text="Apply for Funding" onClick={() => {}} />
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <BorderlessButton text="Read More" onClick={() => {}} />
              </div>
              <div className="flex items-center justify-center lg:hidden">
                <ButtonWithArrow
                  text="Apply for Funding"
                  onClick={() => {}}
                  className="w-full"
                  noIcon={true}
                />
              </div>
              <div className="flex items-center justify-center w-full lg:hidden">
                <OutlineButton
                  text="Read More"
                  onClick={() => {}}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <Image
            src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(1)-vtlrWpxlQAlrOkwg8fDaGi9XeuAuUG.png"
            alt="Join"
            width={0}
            height={0}
            sizes={"100vw"}
            className="lg:w-[22.3125rem] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
