import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ApplyHero() {
  const routes = useRouter();
  return (
    <>
      <div className="flex lg:hidden mt-[4rem] flex-col gap-6 w-full">
        <div className="flex flex-col justify-center gap-2 px-[1.5rem]">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => routes.push("/builders")}
          >
            <Image
              src={"/back.svg"}
              alt="back"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1rem] h-[1rem]"
            />
            <LittleHeading text="btrust builders/apply" className="" />
          </div>
          <SubHeading
            text="Kickstart Your Bitcoin Developer Career"
            className=""
          />
        </div>
        <div className="flex items-center justify-center">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-6KKpRfy7dN42oSYTCKawD369BLEF6a.png"
            alt="builder"
            className="w-full h-[18.75rem] object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 w-full px-6">
          <Paragraph className="">
            Our goal is to create a pathway for African software engineers to
            transition into a Bitcoin and Lightning open-source development
            career, building their skills and portfolio as Bitcoin developers.
          </Paragraph>
          <div className="flex items-center justify-center w-full">
            <ButtonWithArrow
              text="Apply Here"
              onClick={() => {}}
              noIcon={true}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col gap-20 mt-[3.5rem] z-30">
        <div className="flex w-full px-[6.5rem] flex-col gap-4">
          <div className="flex flex-col justify-center gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => routes.push("/builders")}
            >
              <Image
                src={"/back.svg"}
                alt="back"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[1rem] h-[1rem]"
              />
              <LittleHeading text="btrust builders/apply" className="" />
            </div>
            <SubHeading
              text="Kickstart Your Bitcoin Developer Career"
              className=""
            />
          </div>
          <div className="flex flex-col gap-4 w-[48.75rem]">
            <Paragraph className="">
              Our goal is to create a pathway for African software engineers to
              transition into a Bitcoin and Lightning open-source development
              career, building their skills and portfolio as Bitcoin developers.
            </Paragraph>
            <div>
              <ButtonWithArrow
                text="Apply Here"
                onClick={() => {}}
                noIcon={true}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-6KKpRfy7dN42oSYTCKawD369BLEF6a.png"
            alt="builder"
            className="w-full h-[46.1875rem] object-cover"
          />
        </div>
      </div>
    </>
  );
}
