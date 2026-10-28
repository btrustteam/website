import Image from "next/image";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import ButtonWithArrow from "../buttons/buttonWithArrow";
export default function BitDev() {
  return (
    <div className="lg:py-[6.25rem] lg:px-[6.5rem] flex flex-col lg:flex-row lg:justify-between items-center w-full lg:gap-[2.875rem] gap-12">
      <Image
        src={
          "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/bitdevs-accra-jTBPbFCwWOdWJpG3Q40TvJ0iru2mCP.png"
        }
        alt="bitdev"
        width={0}
        height={0}
        sizes={"100vw"}
        className="w-full lg:w-[40.4375rem] object-cover lg:rounded-lg"
      />
      <div className="flex flex-col justify-center items-start px-6 lg:px-0 gap-[2rem]">
        <div className="flex flex-col">
          <SectionHeader text="BitDevs In Africa" className="" />
          <div className="flex flex-col justify-center gap-[2.5rem]">
            <Paragraph className="w-full lg:w-[33.6875rem]">
              Btrust sponsors independently organized BitDevs meetups across Africa. Local organizers bring developers, researchers and technically curious participants together to discuss Bitcoin research, software and related protocols. <br />
              Explore a chapter near you or learn what it takes to start one in your city.
            </Paragraph>
            <div className="flex items-center justify-center max-w-max">
              <ButtonWithArrow text="Find a Local Meetup" url="/bitdevs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
