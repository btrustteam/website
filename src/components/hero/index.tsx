import Image from "next/image";
import ButtonWithArrow from "../buttons/buttonWithArrow";

import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import TypingEffect from "../typyingEffect";

export default function Hero() {
  return (
    <div className="flex lg:px-[6.5rem] pt-[1.62rem] lg:pt-[3.75rem] pb-[4rem] lg:pb-[6.5rem] justify-center flex-col gap-[6.25rem]">
      <div className="px-[1.5rem] lg:px-0 gap-4 flex flex-col items-start">
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center gap-2 lg:gap-4">
            <h1 className="w-full lg:w-[76.6875rem] font-poppins text-[2rem] lg:text-[5rem] leading-[140%] lg:leading-[130%] font-bold text-white-6">
              We <TypingEffect />
            </h1>
          </div>
          <h1 className="text-[2rem] lg:w-[76.6875rem] font-poppins lg:text-[5rem] leading-[140%] lg:leading-[130%] font-bold text-white-6">
            Bitcoin Open-Source <br />
            Engineers in the <br />
            Global Majority
          </h1>
        </div>
        <ButtonWithArrow text={"Apply For Funding"} url="/grants" />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-12">
        <Image
          src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust-Gathering.jpg"
          alt="btrust gathering"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-full lg:w-[40.75rem] h-[18.75rem] lg:h-[24.625rem] lg:rounded-lg object-cover"
        />
        <div className="flex flex-col gap-8 px-6">
          <div className="flex flex-col gap-2">
            <SectionHeader text="why Btrust?" className="" />
            <Paragraph className={"w-full lg:w-[32.5625rem]"}>
              Bitcoin is open source. Its long-term resilience depends in part on the people who review, maintain and improve it. <br />
              Btrust was founded in 2021 through a donation of 500 BTC from Jack Dorsey and Jay-Z, with the aim of helping decentralize Bitcoin open-source development. <br />
              Our mission is to support the Bitcoin open-source ecosystem in the Global Majority. Starting in Africa and expanding into regions including India and Latin America, we help people find opportunities to learn, connect and contribute. <br />
              People in the Global Majority are not only users of Bitcoin. They help build it.
            </Paragraph>
          </div>
          <div className="flex items-center justify-center max-w-max">
            <ButtonWithArrow
              text="Know more about us"
              url="/about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
