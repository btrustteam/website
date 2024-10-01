import DynamicImage from "@/components/DynamicImage";
import SocialLink from "@/components/links/socials";
import Paragraph from "@/components/Paragraph";
import Link from "next/link";
import { Builder } from "./currentBuilder";

export default function BuilderCard({
  image,
  id,
  name,
  role,
  github,
  medium,
}: Builder) {
  return (
    <div className="flex flex-col w-full max-w-[23.875] lg:w-[18.125rem] p-[1.25rem] gap-4 rounded-lg border border-black-5 backdrop-blur-[2px]">
      <DynamicImage
        className="h-[16.75rem] object-cover w-full rounded-lg"
        src={image}
        alt={name}
      />
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col">
          <h3 className="text-active-white font-poppins text-[1.5rem] lg:text-[1.3rem] font-bold leading-[normal]">
            {name}
          </h3>
          <Paragraph className="!leading-[175%]">{role}</Paragraph>
        </div>
        <div className="flex items-center gap-4">
          <SocialLink icon="github" className="" url={github} />
          <SocialLink icon="medium" className="" url={medium} />
          <Link
            href={`/builders/profile/${id}`}
            className="font-poppins text-[1.125rem] font-bold underline leading-[177.778%] text-black-2"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
