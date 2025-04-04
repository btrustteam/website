import Image from "next/image";
interface Link {
  url: string;
}
export default function BigNostr({ url }: Link) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex justify-center rounded-xl items-center h-[3.9375rem] w-[3.9375rem] bg-white"
    >
      <Image
        height={0}
        width={0}
        alt={"nostr"}
        src="/big_nostr.svg"
        sizes="100vw"
        className="w-[3rem] h-[3rem]"
      />
    </a>
  );
}
