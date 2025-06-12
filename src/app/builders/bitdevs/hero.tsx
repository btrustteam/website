"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="flex lg:hidden flex-col py-[3.5rem] gap-6">
        <div className="flex flex-col gap-2 px-[1.5rem]">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/builders")}
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
              text="btrust builders"
              className=""
            />
          </div>
          <SubHeading text="BitDevs In Africa" className="" />
        </div>
        <div className="flex items-center justify-center w-full px-[1.5rem]">
          <Paragraph className="leading-[218.75%] lg:w-[50.375rem]">
            As Bitcoin adoption grows, so do local communities of like-minded enthusiasts 
            and builders eager to connect and learn. More cities are now hosting Bitdevs Meetups 
            to foster these connections. Below is a growing list of these meetups in Africa.
          </Paragraph>
        </div>
      </div>
      <div className="mt-[3rem] hidden lg:flex flex-col gap-20">
        <div className="flex flex-col w-full px-[6.5rem] gap-4">
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/builders")}
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
                text="btrust builders"
                className=""
              />
            </div>
            <SubHeading text="BitDevs In Africa" className="" />
          </div>
          <Paragraph className="leading-[218.75%] w-[50.375rem]">
            As Bitcoin adoption grows, so do local communities of like-minded enthusiasts 
            and builders eager to connect and learn. More cities are now hosting Bitdevs Meetups 
            to foster these connections. Below is a growing list of these meetups in Africa.
          </Paragraph>
        </div>
      </div>
    </>
  );
}
