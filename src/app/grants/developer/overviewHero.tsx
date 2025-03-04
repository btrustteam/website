import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";

export default function OverviewHero({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-20 my-[2rem] lg:my-[3rem]">
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
          <LittleHeading text="grants / developer" className="cursor-pointer" />
        </div>

        <SubHeading
          text="Get funding to work on Free and Open-Source Bitcoin projects"
          className="w-full lg:w-[58.375rem]"
        />
      </div>
    </div>
  );
}
