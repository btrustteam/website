"use clients";
import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <>
      <div className="flex lg:hidden flex-col py-[3.5rem] gap-6">
        <div className="flex flex-col gap-2 px-[1.5rem]">
          <div className="flex items-center gap-2">
            <Image
              src={"/back.svg"}
              alt="back"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1rem] h-[1rem] cursor-pointer"
              onClick={() => router.push("/builders")}
            />
            <LittleHeading
              text="btrust builders/Meet the builders"
              className=""
            />
          </div>
          <SubHeading text="Meet The Builders" className="" />
        </div>
        <div className="w-full">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Screenshot%202023-12-28%20at%2008.44%201-ni992ux3ckchiqqnxdCdiuWhvWWqH8.png"
            className="h-[18.75rem] w-full object-cover"
            alt="builders"
          />
        </div>
        <div className="flex items-center justify-center w-full px-[1.5rem]">
          <Paragraph className="leading-[218.75%] lg:w-[50.375rem]">
            The Btrust Builders community is home to hundreds of African
            software developers transitioning to building for Bitcoin and
            Lightning. Meet the builders from our past fellowships who have
            completed this transition.
          </Paragraph>
        </div>
      </div>
      <div className="mt-[3rem] hidden lg:flex flex-col gap-20 z-50">
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
                text="btrust builders/Meet the builders"
                className=""
              />
            </div>
            <SubHeading text="Meet The Builders" className="" />
          </div>
          <Paragraph className="leading-[218.75%] w-[50.375rem]">
            The Btrust Builders community is home to hundreds of African
            software developers transitioning to building for Bitcoin and
            Lightning. Meet the builders from our past fellowships who have
            completed this transition.
          </Paragraph>
        </div>
        <div className="w-full">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Screenshot%202023-12-28%20at%2008.44%201-ni992ux3ckchiqqnxdCdiuWhvWWqH8.png"
            className="h-[46.1875rem] w-full object-cover"
            alt="builders"
          />
        </div>
      </div>
    </>
  );
}
