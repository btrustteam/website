import Paragraph from "@/components/Paragraph";
import CohortStructureCard from "./cohortStructureCard";

export default function CohortStructure() {
  return (
    <div className="flex lg:py-[3.5rem] pb-[5.5rem] flex-col justify-center gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.25rem] font-poppins font-semibold text-active-white w-full lg:w-[18.125rem]">
          Cohort Structure
        </h3>
        <Paragraph className="w-full lg:w-[50.75rem]">
          The Btrust Open-Source Cohort enriches the existing grant model with
          additional structure to make it easier for grantees to sustainably
          contribute to Bitcoin open-source development. We will iterate on this
          model as we learn, leveraging the following structure:
        </Paragraph>
      </div>
      <div className="flex flex-col justify-center gap-10 w-full">
        <div className="flex flex-col lg:flex-row justify-between w-full gap-[1.5rem]">
          <CohortStructureCard
            text="We pair each developer in the cohort with a technical mentor from their project of interest who will help them navigate its norms and become familiar with its codebase."
            heading="Mentorship"
          />
          <CohortStructureCard
            text="As is standard in engineering environments, cohort members are supported by a manager responsible for professional development and personal support."
            heading="Management"
          />
          <CohortStructureCard
            text="We actively communicate with the projects that cohort members choose to work on to ensure that cohort members positively impact the project."
            heading="Project Relations"
          />
          <CohortStructureCard
            text="Each developer in the cohort is paid monthly in BTC to work full-time on open-source projects."
            heading="Monthly Remuneration"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-[1.5rem] w-full">
          <CohortStructureCard
            text="To encourage long-term thinking and projects, new cohort members are contracted for a year, with the option to renew for a second year upon mutual agreement. Renewal terms after a successful two-year term will scale with time spent in the cohort."
            heading="Long-Term"
            full={true}
          />
          <CohortStructureCard
            text="Although cohort members are free to work on separate projects, they will operate as an engineering team with daily standups and events to build a sense of belonging and community within the cohort."
            heading="Peer Support"
            full={true}
          />
          <CohortStructureCard
            text="We provide additional support to ensure cohort members can focus on efficient contributions to Bitcoin open-source projects. This support will include stipends for hardware suitable for Bitcoin development and travel support to connect with the developer community at conferences."
            heading="Additional Support"
            full={true}
          />
        </div>
      </div>
    </div>
  );
}
