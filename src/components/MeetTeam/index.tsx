import Image from "next/image";
import SubHeading from "../SubHeading";

export default function MeetTheTeam() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex px-[6.5rem] py-0 flex-col justify-center gap-2">
        <SubHeading
          text="Meet The Team"
          className="!text-[2.5rem] !leading-normal"
        />
        <p className="font-poppins text-[1.125rem] leading-[177.778%] text-black-2 w-[50.9375rem]">
          Btrust is headed up by a board of directors who are responsible for
          overseeing delivery of the organization&apos;s mission.
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-[39.375rem]">
        <Image
          src={
            "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Screenshot%202023-12-28%20at%2008.43%201-KvgYYf0VUAcYtGpWBBZpk52IBqZ8mz.png"
          }
          alt="The team"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
