import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import Paragraph from "@/components/Paragraph";
import CohortStructureCard from "./cohortStructureCard";
import UniversalGrantOverview from "./universalGrantOverview";
import { useRouter } from "next/navigation";

export default function SeederGrant() {
  const route = useRouter();
  return (
    <div className="flex flex-col px-6 lg:px-[6.5rem] w-full">
      <UniversalGrantOverview
        title="Seeder Grants"
        details={[
          "The Seeder Grant is designed to support developers and contributors working on open-source Bitcoin projects or research ideas that advance Bitcoin’s technical growth. Focused on strengthening the Bitcoin FOSS ecosystem, it is designed to empower developers in Africa and the broader Global South, ensuring their contributions help build a more resilient and decentralized Bitcoin network.",
          "The grant provides financial assistance and resources to bring impactful projects to life while ensuring they remain open-source, community-driven, and publicly accessible.",
        ]}
        imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/7-mMjioz1WanKMs1ljpUzahgFYXMOm6y.png"
        isReverse={true}
        noMarginBottom={true}
      />
      <div className="flex lg:py-[3.5rem] pb-[5.5rem] flex-col justify-center gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.25rem] font-poppins font-semibold text-active-white w-full lg:w-[18.125rem]">
            Eligibility Criteria
          </h3>
          <Paragraph className="w-full lg:w-[50.75rem]">
            You are eligible for this grant if you fit the following criteria:
          </Paragraph>
        </div>
        <div className="flex flex-col justify-center gap-10 w-full">
          <div className="flex flex-col lg:flex-row justify-between w-full gap-[1.5rem]">
            <CohortStructureCard
              text="The project must be fully open-source under a recognized open-source license (e.g., MIT, GPL, Apache 2.0)."
              heading="Open-Source Commitment"
              full={true}
            />
            <CohortStructureCard
              text="The project must align with Btrust ethos and principles, and directly contribute to the Bitcoin ecosystem."
              heading="Bitcoin-Centric Focus"
              full={true}
            />
            <CohortStructureCard
              text="The project should demonstrate innovation and have the potential to positively impact the Bitcoin African ecosystem."
              heading="Innovation and Impact"
              full={true}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-[1.5rem] w-full">
            <CohortStructureCard
              text="The project must have a clear scope, timeline, and deliverables."
              heading="Feasibility and Scope"
              full={true}
            />
            <CohortStructureCard
              text="Teams are preferred, but individuals with a strong track record may also apply and they must have the necessary technical skills and experience in FOSS to complete the project."
              heading="Team or Individual Capacity"
              full={true}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <ButtonWithArrow
          text="Apply for this grant"
          onClick={() => {
            route.push("https://btrust.homerun.co/starter-grants/en");
          }}
          noIcon={true}
          className="w-auto"
        />
      </div>
    </div>
  );
}
