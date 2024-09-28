import Paragraph from "@/components/Paragraph";

export default function CohortStructureCard({
  text,
  heading,
}: {
  text: string;
  heading: string;
}) {
  return (
    <div className="flex p-[1.5rem] flex-col gap-4 rounded-lg border border-black-5 w-full lg:w-[23.125rem]">
      <h3 className="text-active-white font-poppins text-[1.5rem] font-bold leading-[175%]">
        {heading}
      </h3>
      <Paragraph className="leading-[175%] text-black-3">{text}</Paragraph>
    </div>
  );
}
