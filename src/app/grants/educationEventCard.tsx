import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export default function EducationEventCard({
  imageSrc,
  details,
  link,
  title,
}: {
  imageSrc: string;
  details: string[];
  link: string;
  title: string;
}) {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row justify-between mb-12 lg:mb-24`}
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

        <div className="flex items-center">
          <OutlineButton
            text="Visit Site"
            className="w-full lg:w-auto"
            url={link}
            iconUrl="/link.svg"
            newTab={true}
          />
        </div>
      </div>
    </div>
  );
}
