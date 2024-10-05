import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export interface Media {
  cover_url: string;
  tags: Tag[];
  heading: string;
  text: string;
  url: string;
}

interface Tag {
  title: string;
  bg: string;
}

export default function MediaCard({
  cover_url,
  tags,
  heading,
  text,
  url,
}: Media) {
  return (
    <a href={url} target="_blank">
    <div className="flex w-full max-w-[23.875rem] lg:w-[37.8125rem] p-5 flex-col gap-4 rounded-lg backdrop-blur-[2px] border border-card-border">
      <DynamicImage
        src={cover_url}
        alt={heading}
        className="h-[14.25rem] lg:h-[22.5rem] w-full rounded-lg object-cover"
      />
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`flex py-[0.25rem] lg:py-[0.375rem] px-[0.75rem] lg:px-[0.5rem] justify-center items-center rounded border border-black-4 bg-[${tag.bg}]`}
          >
            <p className="text-white font-poppins text-[0.75rem] lg:text-[0.875rem] leading-[normal]">
              {tag.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 w-full">
        <SectionHeader
          text={heading}
          className="!text-[1.125rem] lg:!text-[1.375rem] !leading-[155.556%] lg:!leading-[163.636%]"
        />
        <Paragraph className="">
          {text}
        </Paragraph>
      </div>
    </div>
    </a>
  );
}
