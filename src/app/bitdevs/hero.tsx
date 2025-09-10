import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

export default function Hero() {
  return (
    <>
      <div className="flex lg:hidden flex-col py-[3.5rem] gap-6">
        <div className="flex flex-col gap-2 px-[1.5rem]">
          <SubHeading text="BitDevs In Africa" className="" />
        </div>
        <div className="flex items-center justify-center w-full px-[1.5rem]">
          <Paragraph className="leading-[218.75%] lg:w-[50.375rem]">
            As Bitcoin adoption grows, so do local communities of like-minded enthusiasts 
            and builders eager to connect and learn. Below is a growing list of 13 active Meetups in Africa, 
            with more cities on the way looking to host Bitdevs Meetups to foster these connections.
          </Paragraph>
        </div>
      </div>
      <div className="mt-[3rem] hidden lg:flex flex-col gap-20">
        <div className="flex flex-col w-full px-[6.5rem] gap-4">
          <div className="flex flex-col gap-2">
            <SubHeading text="BitDevs In Africa" className="" />
          </div>
          <Paragraph className="leading-[218.75%] w-[50.375rem]">
            As Bitcoin adoption grows, so do local communities of like-minded enthusiasts 
            and builders eager to connect and learn. Below is a growing list of 13 active Meetups in Africa, 
            with more cities on the way looking to host Bitdevs Meetups to foster these connections.
          </Paragraph>
        </div>
      </div>
    </>
  );
}
