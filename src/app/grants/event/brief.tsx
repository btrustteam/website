import Paragraph from "@/components/Paragraph";

export default function EventBrief() {
  return (
    <div className="flex bg-[#222] w-full py-[1.5rem] px-[1.5rem] lg:py-[3.5rem] lg:px-[6.5rem] flex-col gap-6">
      <div className="flex flex-col w-full lg:w-[57.3125rem] gap-7">
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Bitcoin thrives on collaboration. Btrust offers event grants to support Bitcoin-only events designed to act
          as a wide net to find and direct those interested in commencing their Bitcoin open-source journey.
        </Paragraph>
      </div>
    </div>
  );
}
