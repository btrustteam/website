import Paragraph from "@/components/Paragraph";

export default function Eligibility() {
  return (
    <div className="flex bg-[#222] w-full py-[1.5rem] px-[1.5rem] lg:py-[3.5rem] lg:px-[6.5rem] flex-col gap-6">
      <h3 className="font-poppins font-bold text-[1.5rem] lg:text-[1.75rem] text-active-white">
        Grant Eligibility
      </h3>
      <Paragraph className=" lg:!text-[1.25rem] lg:!leading-[190%] w-full lg:w-[57.3125rem]">
        Btrust grants are open to developers across Africa, India, Latin
        America, MENA, and Southeast Asia. Although these regions are the
        primary focus, we may also consider developers from other areas in the
        Global South on a case-by-case basis, contingent on their Proof of Work.
        The priority is to ensure that talented developers from these diverse
        backgrounds have the opportunity to contribute to the Bitcoin ecosystem.
      </Paragraph>
    </div>
  );
}
