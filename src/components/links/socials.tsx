import Image from "next/image";

export type SocialIcon =
  | "github"
  | "twitter"
  | "medium"
  | "linkedin"
  | "youtube"
  | "nostr";

export default function SocialLink({
  url,
  icon,
  className,
}: {
  url: string;
  icon: SocialIcon;
  className?: string;
}) {
  const icon_url = `/${icon}.svg`;

  return (
    <a
      href={url}
      className={`flex items-center justify-center p-2 bg-active-white rounded-lg h-[2.5rem] w-[2.5rem] ${className}`}
      target="_blank"
    >
      <Image
        width={0}
        height={0}
        sizes={"100vw"}
        alt={icon}
        className={`${
          icon !== "twitter" ? "w-[1.5rem] h-[1.5rem]" : "w-[1rem] h-[1rem]"
        }`}
        src={icon_url}
      />
    </a>
  );
}
