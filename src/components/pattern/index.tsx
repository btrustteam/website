import Image from "next/image";

export default function Pattern() {
  return (
    <Image
      src={"/pattern.svg"}
      alt="Pattern"
      width={0}
      height={0}
      sizes={"100vw"}
      className="w-full h-[24.6875rem] absolute object-cover opacity-[50%] left-0 z-0"
    />
  );
}
