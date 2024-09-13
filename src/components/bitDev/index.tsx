import Image from "next/image";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
export default function BitDev() {
  return (
    <div className="py-[6.25rem] px-[6.5rem] flex justify-between items-centern w-full gap-[2.875rem]">
      <Image
        src={
          "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2021-KBA3ENWJRNsvBCdivRfX3gi5NejE1Q.png"
        }
        alt="bitdev"
        width={0}
        height={0}
        sizes={"100vw"}
        className="w-[40.4375rem] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center items-start gap-[2rem]">
        <div className="flex flex-col">
          <SectionHeader text="BitDevs Across Africa" className="" />
          <div className="flex flex-col justify-center gap-[2.5rem]">
            <Paragraph className="w-[33.6875rem]">
              Our builders run BitDev meetups across five African cities—
              <a className="font-bold underline" href="/">
                Nairobi
              </a>
              ,{" "}
              <a className="font-bold underline" href="/">
                Lagos
              </a>
              ,{" "}
              <a className="font-bold underline" href="/">
                Abuja
              </a>
              ,{" "}
              <a className="font-bold underline" href="">
                Kampala
              </a>
              , and{" "}
              <a className="font-bold underline" href="">
                Accra
              </a>{" "}
              —with support from Btrust in administration, communication, and
              funding. The goal is to expand these meetups to more African
              cities, growing the pipeline.
            </Paragraph>
            <Paragraph className="w-[33.6875rem]">
              These monthly meetups follow the established BitDevs format and
              are highly localized. They offer a high-signal environment to
              deepen understanding of Bitcoin development and communicate
              opportunities within the technical community.
            </Paragraph>
          </div>
        </div>
        <div>
          <ButtonWithArrow text="Join a Local Meetup" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
