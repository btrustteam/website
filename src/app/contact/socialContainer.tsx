import SocialLink, { SocialIcon } from "@/components/links/socials";

export default function SocialContainer({
  heading,
  socials,
}: {
  heading: string;
  socials: { icon: SocialIcon; link: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-active-white font-poppins text-[0.75rem] lg:text-base font-semibold leading-[normal]">
        {heading}
      </h4>
      <div className="flex items-center gap-4">
        {socials.map((social, index) => (
          <SocialLink icon={social.icon} key={index} url={social.link} />
        ))}
      </div>
    </div>
  );
}
