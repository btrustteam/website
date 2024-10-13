"use client";
import LittleHeading from "@/components/LittleHeading";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BackComponent() {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 px-[1.5rem] lg:px-0 cursor-pointer"
      onClick={() => router.push("/builders/meet-builders")}
    >
      <Image
        src={"/back.svg"}
        alt="back"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[1rem] h-[1rem]"
      />
      <LittleHeading
        text="btrust builders/builders Profile"
        className="leading-[normal]"
      />
    </div>
  );
}
