import Image from "next/image";
import SubHeading from "../SubHeading";

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col gap-8 lg:gap-6">
      <div className="flex px-[1.5rem] lg:px-[6.5rem] py-0 flex-col justify-center lg:gap-2">
        <SubHeading
          text="Meet The Team"
          className="!text-[2.5rem] !leading-normal"
        />
      </div>
      <div className="flex items-center justify-center w-full h-[18.75rem] lg:h-[39.375rem]">
        <Image
          src={
            "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-96-WDE9Bql1GTOkDmeBJTCwvvkus5XbRe.JPG"
          }
          alt="The team"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
