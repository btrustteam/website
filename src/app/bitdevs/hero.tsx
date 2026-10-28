import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

export default function Hero() {
  return (
    <>
      <div className="flex lg:hidden flex-col pt-[3.5rem] gap-6">
        <div className="flex flex-col gap-2 px-[1.5rem]">
          <SubHeading text="BitDevs In Africa" className="" />
        </div>
        <div className="flex items-center justify-center w-full px-[1.5rem]">
          <Paragraph className="leading-[218.75%] lg:w-[50.375rem]">
            A growing network of independent Bitcoin developer meetups sponsored by Btrust and run by local organizers. <br />
            BitDevs meetups bring together developers, researchers, and technically curious people to discuss the research and development of Bitcoin and related protocols.
          </Paragraph>
        </div>
        <h3 className="px-[1.5rem] font-poppins font-bold text-[1.5rem] lg:text-[1.75rem] text-active-white">
          Find a Local Meetup
        </h3>
      </div>
      <div className="mt-[3rem] hidden lg:flex flex-col gap-20">
        <div className="flex flex-col w-full px-[6.5rem] gap-4">
          <div className="flex flex-col gap-2">
            <SubHeading text="BitDevs In Africa" className="" />
          </div>
          <Paragraph className="leading-[218.75%] w-[50.375rem]">
            A growing network of independent Bitcoin developer meetups sponsored by Btrust and run by local organizers. <br />
            BitDevs meetups bring together developers, researchers, and technically curious people to discuss the research and development of Bitcoin and related protocols.
          </Paragraph>
          <h3 className="font-poppins font-bold text-[1.5rem] lg:text-[1.75rem] text-active-white">
            Find a Local Meetup
          </h3>
        </div>
      </div>
    </>
  );
}
