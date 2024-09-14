import Image from "next/image";
interface Link {
  url: string;
}
export default function BigTwitter({ url }: Link) {
  return (
    <a
      href={url}
      className="flex justify-center rounded-lg items-center h-[3.9375rem] w-[3.9375rem] bg-white"
    >
      <Image
        height={0}
        width={0}
        alt={"twitter"}
        src="/big_x.svg"
        sizes="100vw"
        className="w-[1.5rem] h-[1.5rem]"
      />
    </a>
  );
}
