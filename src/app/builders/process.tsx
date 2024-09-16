import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import BuildersProcessCard from "./builderProcessCard";

export default function ProcessToJoin() {
  return (
    <div className="flex justify-center items-center pt-[5rem] pb-[3.75rem] w-full bg-[#222]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col justify-center items-center gap-4 w-[58.75rem]">
          <SectionHeader
            text="Btrust Updates"
            className="!text-[2.5rem] text-center"
          />
          <p className="text-black-3 text-center font-poppins text-[1.125rem] leading-[177.778%]">
            Our program offers an immersive learning experience for engineers
            looking to build their competencies and portfolio in Bitcoin &
            Lightning development and a ramp to build a sustainable (funded)
            career contributing to open-source Bitcoin projects.
          </p>
        </div>
        <div className="flex flex-col gap-[2.5rem]">
          <div className="flex items-center justify-center gap-10">
            <BuildersProcessCard
              text="Are you software developer with 3+ years of experience in a production environment?"
              icon_url="/production.svg"
            />
            <BuildersProcessCard
              text="Are you experienced and capable, evidenced by an active GitHub/GitLab account?"
              icon_url="/experience.svg"
            />
          </div>
          <div className="flex gap-[2.5rem]">
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
              text=""
              icon_url="/availability.svg"
              isColumn={true}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ButtonWithArrow text="Apply Now" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}