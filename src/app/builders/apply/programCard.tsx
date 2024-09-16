import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export default function ProgramCard({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <div
      className={`rounded-lg gap-4 justify-center flex flex-col p-[1.5rem] border border-black-5 w-[24.625rem]`}
    >
      <SectionHeader text={heading} className="!text-[1.5rem] leading-[175%]" />
      <Paragraph className="!leading-[175%]">{text}</Paragraph>
    </div>
  );
}
