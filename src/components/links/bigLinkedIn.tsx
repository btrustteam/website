import Image from "next/image";

interface LinkProps {
  url: string;
}
export default function BigLinkedin({ url }: LinkProps) {
  return (
    <a className="flex items-center justify-center" href={url}>
      <Image
        height={0}
        width={0}
        alt={"linkedin"}
        src="/big_linkedin.svg"
        sizes="100vw"
        className="w-[3.9375rem] h-[3.9375rem]"
      />
    </a>
  );
}
