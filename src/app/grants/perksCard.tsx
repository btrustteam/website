import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

interface PerksProps {
  heading: string;
  text: string;
}
export default function PerksCard({ heading, text }: PerksProps) {
  return (
    <div className="flex p-[1.5rem] flex-col gap-4 rounded-lg border border-black-5 w-[16.625rem]">
      <SectionHeader text={heading} className="!text-[1.5rem]" />
      <Paragraph>{text}</Paragraph>
    </div>
  );
}