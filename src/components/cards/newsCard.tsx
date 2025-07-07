import Image from "next/image";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";

interface NewsCardProps {
  cover_url: string;
  heading: string;
  tags: [{title: string, bg: string}];
  text: string;
  url: string;
}

// border: 1px solid rgba(104, 104, 104, 0.20);
export default function NewsCard({
  cover_url,
  heading,
  tags,
  text,
  url,
}: NewsCardProps) {
  const button_style =
    "flex py-[0.25rem] px-[0.75rem] items-center justify-center rounded border border-black-4 text-[#FFF] font-poppins text-[0.75rem]";
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col w-full max-w-[24.6875rem] lg:w-[24.6875rem] p-[1.25rem] gap-[1rem] rounded-lg backdrop-blur-[2px] border border-card-border">
        <Image
          src={cover_url}
          width={0}
          height={0}
          sizes={"100vw"}
          className="h-[14.25rem] w-full rounded-lg object-cover"
          alt="blog cover"
        />
        <div className="flex items-center gap-[0.5rem]">
          <button className={`${button_style} bg-[${tags[0].bg}]`}>{tags[0].title}</button>
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <SectionHeader
            text={heading}
            className="!leading-[155.556%] lg:!leading-[175%] lg:!text-[1.25rem] !text-[1.125rem]"
          />
          <Paragraph className="">{text}</Paragraph>
        </div>
      </div>
    </a>
  );
}
