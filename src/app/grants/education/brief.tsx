import Paragraph from "@/components/Paragraph";

export default function EducationBrief() {
  return (
    <div className="flex bg-[#222] w-full py-[1.5rem] px-[1.5rem] lg:py-[3.5rem] lg:px-[6.5rem] flex-col gap-6">
      <div className="flex flex-col w-full lg:w-[57.3125rem] gap-7">
        <Paragraph className="lg:!text-[1.25rem] lg:!leading-[2.375rem]">
          Developer education is essential to building a strong and sustainable
          Bitcoin open-source ecosystem. We support initiatives that help
          developers learn, use, and contribute to Bitcoin, ensuring that
          knowledge is widely accessible, especially in the Global South.
        </Paragraph>
      </div>
    </div>
  );
}
