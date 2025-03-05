import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";

export default function EventConferenceHero({
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
          <LittleHeading
            text="grants / event and conference"
            className="cursor-pointer"
          />
        </div>

        <SubHeading
          text="Bringing Bitcoin Builders Together"
          className="w-full lg:w-[62.6875rem]"
        />
      </div>
    </div>
  );
}
