import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import BuildersProcessCard from "./builderProcessCard";

export default function ProcessToJoin() {
  return (
    <div className="flex justify-center items-center px-[1.5rem] pt-[5rem] pb-[3.75rem] w-full bg-[#222]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-[58.75rem]">
          <SectionHeader
            text="Become a Btrust Builder"
            className="text-[1.8125rem] lg:!text-[2.5rem] text-center w-[13.875rem] lg:w-full"
          />
          <p className="text-black-3 text-center font-poppins w-full text-base lg:text-[1.125rem] leading-[200%] lg:leading-[177.778%]">
            Our program offers an immersive learning experience for engineers
            looking to build their competencies and portfolio in Bitcoin &
            Lightning development and a ramp to build a sustainable (funded)
            career contributing to open-source Bitcoin projects.
          </p>
        </div>
        <div className="flex flex-col gap-[2.5rem]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            <BuildersProcessCard
              text="Are you software developer with 3+ years of experience in a production environment?"
              icon_url="/production.svg"
            />
            <BuildersProcessCard
              text="Are you experienced and capable, evidenced by an active GitHub/GitLab account?"
              icon_url="/experience.svg"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-[2.5rem]">
            <div className="flex flex-col gap-10">
              <BuildersProcessCard
                text="Are you able to engage with complex, technical concepts?"
                icon_url="/technical.svg"
              />
              <BuildersProcessCard
                text="Are you willing to learn and grow?"
                icon_url="/learn.svg"
              />
            </div>
            <BuildersProcessCard
              text="Are you available to commit a minimum of 20 hours a week to the program?"
              icon_url="/availability.svg"
              isColumn={true}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <ButtonWithArrow
            text="Apply Now"
            onClick={() => {}}
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
