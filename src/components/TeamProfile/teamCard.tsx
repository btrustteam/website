import Image from "next/image";
import SocialLink from "../links/socials";
import Paragraph from "../Paragraph";

export interface TeamCardProps {
  name: string;
  description: string;
  github: string;
  linkedin: string;
  imageUrl: string;
}

export default function TeamCard({
  name,
  description,
  github,
  linkedin,
  imageUrl,
}: TeamCardProps) {
  return (
    <div className="flex w-[18.125rem] p-4 flex-col gap-4 rounded-lg backdrop-blur-[2px] border border-[#3B3B3B]">
      <Image
        src={imageUrl}
        alt="team member"
        width={0}
        height={0}
        sizes={"100vw"}
        className={`h-16.75rem] rounded-lg w-full object-cover`}
      />
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="font-poppins text-[1.5rem] font-bold text-active-white">
            {name}
          </h3>
          <Paragraph className="!leading-[125%]">{description}</Paragraph>
        </div>
        <div className="flex gap-4 items-center">
          <SocialLink url={github} icon="github" />
          <SocialLink url={linkedin} icon="twitter" />
        </div>
      </div>
    </div>
  );
}
