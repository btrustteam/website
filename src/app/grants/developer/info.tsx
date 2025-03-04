import Paragraph from "@/components/Paragraph";

export default function DeveloperInfo() {
  return (
    <div className="flex bg-[#222] w-full py-[1.5rem] px-[1.5rem] lg:py-[3.5rem] lg:px-[6.5rem] flex-col gap-6">
      <div className="flex flex-col w-full lg:w-[57.3125rem] gap-7">
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Btrust Developer Grants provide funding and support for open-source
          Bitcoin developers working to improve the Bitcoin ecosystem.
        </Paragraph>
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          We support developers working on Bitcoin protocol improvements, Layer
          2 solutions, security enhancements, and other critical open-source
          projects. Whether you're an experienced contributor or just starting
          your Bitcoin development journey, our grants offer the resources,
          mentorship, and community support needed to make a meaningful impact.
        </Paragraph>
      </div>
    </div>
  );
}
