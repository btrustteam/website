import Image from "next/image";

export default function SocialLink({
  url,
  icon,
  className,
}: {
  url: string;
  icon: "github" | "twitter" | "medium";
  className?: string;
}) {
  let icon_url = "/github.svg";
  if (icon === "twitter") {
    icon_url = "/twitter.svg";
  }
  if (icon === "medium") {
    icon_url = "/medium.svg";
  }
  return (
    <a
      href={url}
      className={`flex items-center justify-center p-2 bg-active-white rounded-lg h-[2.5rem] w-[2.5rem] ${className}`}
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
