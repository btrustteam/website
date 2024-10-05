import Image from "next/image";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
interface NewsCardProps {
  image_url: string;
  heading: string;
  tag: string;
  tag_bg: string;
  brief: string;
  content_url: string;
}

// border: 1px solid rgba(104, 104, 104, 0.20);
export default function NewsCard({
  image_url,
  heading,
  tag,
  tag_bg,
  brief,
  content_url,
}: NewsCardProps) {
  const button_style =
    "flex py-[0.25rem] px-[0.75rem] items-center justify-center rounded border border-black-4 text-[#FFF] font-poppins text-[0.75rem]";
  return (
    <a href={content_url}>
    <div className="flex flex-col w-[24.6875rem] p-[1.25rem] gap-[1rem] rounded-lg backdrop-blur-[2px] border border-card-border">
      <Image
        src={image_url}
        width={0}
        height={0}
        sizes={"100vw"}
        className="h-[14.25rem] w-full rounded-lg object-cover"
        alt="blog cover"
      />
      <div className="flex items-center gap-[0.5rem]">
        <button className={`${button_style} bg-[${tag_bg}]`}>{tag}</button>
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        <SectionHeader
          text={heading}
          className="!leading-[155.556%] lg:!leading-[175%] lg:!text-[1.25rem] !text-[1.125rem]"
        />
        <Paragraph className="">
          {brief}
        </Paragraph>
      </div>
    </div>
    </a>
  );
}
