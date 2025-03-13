import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";

export default function HeroSection({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-20 mt-[2rem] lg:mt-[3rem]">
      <div className="px-[2rem] lg:px-[6.5rem] py-0">
        <div
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => setPage("")}
        >
          <Image
            src={"/back.svg"}
            alt="back"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[1rem] h-[1rem]"
          />
          <LittleHeading text="grants / education" className="cursor-pointer" />
        </div>

        <SubHeading
          text="Empowering Bitcoin Developer Education"
          className="w-full lg:w-[48.25rem]"
        />
      </div>
      <div className="flex justify-center items-center bg-red-300">
        <DynamicImage
          src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/3-xcgTNTEMQWZfakMIttDJERMjDOrSu5.png"
          alt=""
          className="w-full h-[18.75rem] lg:h-[46.1875rem] object-cover"
        />
      </div>
    </div>
  );
}
