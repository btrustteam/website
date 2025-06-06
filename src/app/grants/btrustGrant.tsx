import Paragraph from "@/components/Paragraph";

export default function BtrustGrant() {
  return (
    <div className="flex bg-[#222] w-full py-[1.5rem] px-[1.5rem] lg:py-[3.5rem] lg:px-[6.5rem] flex-col gap-6">
      <h3 className="font-poppins font-bold text-[1.5rem] lg:text-[1.75rem] text-active-white">
        Btrust Grants
      </h3>
      <div className="flex flex-col w-full lg:w-[57.3125rem] gap-7">
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Btrust Grants support individuals and organizations working to
          strengthen the Bitcoin open-source ecosystem.
        </Paragraph>
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Our grants are open to developers, educators, researchers, and event
          organizers across Africa, India, Latin America, MENA, and Southeast
          Asia. While these regions are our primary focus, we may also consider
          applicants from other areas in the Global South, contingent on their
          Proof of Work.
        </Paragraph>
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Our mission is to empower contributors by removing financial barriers
          and providing the resources needed to make a meaningful impact.
          Whether you&apos;re building Bitcoin open-source software, creating
          educational programs, or organizing events and workshops, our
          grants are designed to help you focus on strengthening the Bitcoin
          ecosystem.
        </Paragraph>
      </div>
    </div>
  );
}
