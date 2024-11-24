import Image from "next/image";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
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
          <SectionHeader text="BitDevs Across Africa" className="" />
          <div className="flex flex-col justify-center gap-[2.5rem]">
            <Paragraph className="w-full lg:w-[33.6875rem]">
              Our builders run BitDev meetups across four African cities—
              <a className="font-bold underline" href="https://x.com/BitDevsNBO" target="_blank">
                Nairobi
              </a>
              ,{" "}
              <a className="font-bold underline" href="https://x.com/BitDevsLagos" target="_blank">
                Lagos
              </a>
              ,{" "}
              <a className="font-bold underline" href="https://x.com/BitDevsAbuja" target="_blank">
                Abuja
              </a>
              ,{" "}
              <a className="font-bold underline" href="https://x.com/BitDevsKaduna" target="_blank">
                Kaduna
              </a>
              , and{" "}
              <a className="font-bold underline" href="https://x.com/bitdevsAccra" target="_blank">
                Accra
              </a>{" "}
              —with support from Btrust in administration, communication, and
              funding. The goal is to expand these meetups to more African
              cities, growing the pipeline.
            </Paragraph>
            <Paragraph className="w-full lg:w-[33.6875rem]">
              These monthly meetups follow the established BitDevs format and
              are highly localized. They offer a high-signal environment to
              deepen understanding of Bitcoin development and communicate
              opportunities within the technical community.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}
