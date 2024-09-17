import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export interface Media {
  cover_url: string;
  tags: string[];
  heading: string;
  text: string;
  url: string;
}

export default function MediaCard({
  cover_url,
  tags,
  heading,
  text,
  url,
}: Media) {
  return (
    <div className="flex w-[37.8125rem] p-5 flex-col gap-4 rounded-lg backdrop-blur-[2px] border border-card-border">
      <DynamicImage
        src={cover_url}
        alt={heading}
        className="h-[22.5rem] w-full rounded-lg object-cover"
      />
      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="flex py-[0.375rem] px-[0.5rem] justify-center items-center rounded border border-black-4 bg-tag-bg"
          >
            <p className="text-white font-poppins text-[0.875rem] leading-[normal]">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center gap-2 w-full">
        <SectionHeader
          text={heading}
          className="!text-[1.375rem] !leading-[163.636%]"
        />
        <Paragraph className="">
          {text}...{" "}
          <a className="italic underline font-bold" href={url}>
            read more
          </a>
        </Paragraph>
      </div>
    </div>
  );
}
