import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";

export default function BuildersProcessCard({
  icon_url,
  text,
  isColumn,
}: {
  icon_url: string;
  text: string;
  isColumn?: boolean;
}) {
  return (
    <div
      className={`rounded-lg flex justify-center items-center py-[2.5rem] px-[2rem] w-[29.1875rem] gap-6 backdrop-blur-[2px] border border-process-border bg-process-bg ${
        isColumn ? "flex-col" : ""
      }`}
    >
      <DynamicImage
        alt="process"
        src={icon_url}
        className="w-[5rem] h-[5rem]"
      />
      <Paragraph
        className={`leading-[normal] w-[18.6875rem] ${
          isColumn ? "text-center" : ""
        }`}
      >
        {text}
      </Paragraph>
    </div>
  );
}
