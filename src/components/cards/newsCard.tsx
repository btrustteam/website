import Image from "next/image";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
interface NewsCardProps {
  image_url: string;
  heading: string;
  first_tag: string;
  second_tag: string;
  brief: string;
  content_url: string;
}

// border: 1px solid rgba(104, 104, 104, 0.20);
export default function NewsCard({
  image_url,
  heading,
  first_tag,
  brief,
  content_url,
  second_tag,
}: NewsCardProps) {
  const button_style =
    "flex py-[0.25rem] px-[0.75rem] items-center justify-center rounded border border-black-4 text-[#FFF] font-poppins text-[0.75rem]";
  return (
    <div className="flex flex-col w-[24.6875rem] p-[1.25rem] gap-[1rem] rounded-lg backdrop-blur-[2px] border border-card-border">
      <Image
        src={image_url}
        width={0}
        height={0}
        sizes={"100vw"}
        className="h-[14.25rem] w-full rounded-lg"
        alt="blog cover"
      />
      <div className="flex items-center gap-[0.5rem]">
        <button className={`${button_style} bg-[#7C2727] `}>{first_tag}</button>
        <button className={`${button_style} bg-[#2C6F75]`}>{second_tag}</button>
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        <SectionHeader
          text={heading}
          className="!leading-[155.556%] lg:!leading-[175%] lg:!text-[1.25rem] !text-[1.125rem]"
        />
        <Paragraph className="">
          {brief}
          <a
            className="text pl-2 font-poppins italic font-bold leading-[200%] underline text-active-white"
            href={content_url}
          >
            read more
          </a>
        </Paragraph>
      </div>
    </div>
  );
}
