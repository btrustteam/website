import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

interface Props {
  title: string;
  details: string[];
  imageSrc: string;
  section?: string;
  isReverse: boolean;
  noMarginBottom?: boolean;
  url: string;
}
export default function UniversalGrantOverview({
  title,
  details,
  imageSrc,
  section,
  isReverse,
  noMarginBottom,
  url,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between ${noMarginBottom ? "" : "mb-12 lg:mb-24"}`}
    >
      <div className="lg:hidden flex w-full">
        <SectionHeader
          text={title}
          className="!text-[1.625rem] !leading-[normal] !uppercase"
        />
      </div>
      <DynamicImage
        src={imageSrc}
        className="w-full h-[18.75rem] lg:h-full lg:w-[35.125rem] rounded-lg object-cover"
        alt="participants"
      />
      <div className="w-full lg:w-[37.125rem] flex flex-col gap-10">
        <div className="w-full flex flex-col gap-4">
          <SectionHeader
            text={title}
            className="!text-[2.5rem] !leading-[140%] !uppercase hidden lg:flex"
          />
          <div className="flex flex-col w-full gap-6">
            {details.map((text, index) => (
              <Paragraph key={index} className="text-black-2">
                {text}
              </Paragraph>
            ))}
          </div>
        </div>
        {section && (
          <div className="flex items-center">
            <ButtonWithArrow
              text="Learn More"
              className="w-full lg:w-auto"
              noIcon={true}
              url={url}
            />
          </div>
        )}
      </div>
    </div>
  );
}
