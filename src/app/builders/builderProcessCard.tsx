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
      className={`rounded-lg flex justify-center items-center px-[1.5rem] py-[2rem] lg:py-[2.5rem] lg:px-[2rem] w-full max-w-[29.1875rem] lg:w-[29.1875rem] gap-6 backdrop-blur-[2px] border border-process-border bg-process-bg ${
        isColumn ? "lg:flex-col" : ""
      }`}
    >
      <DynamicImage
        alt="process"
        src={icon_url}
        className="w-[3.5rem] h-[3.5rem] lg:w-[5rem] lg:h-[5rem]"
      />
      <Paragraph
        className={`leading-[normal] w-full lg:w-[18.6875rem] ${
          isColumn ? "text-center" : ""
        }`}
      >
        {text}
      </Paragraph>
    </div>
  );
}
