import Image from "next/image";

interface ImageProps {
  src: string;
  className: string;
  alt: string;
}
export default function DynamicImage({ src, className, alt }: ImageProps) {
  return (
    <Image
      width={0}
      height={0}
      sizes={"100vw"}
      alt={alt}
      src={src}
      className={`${className}`}
    />
  );
}
