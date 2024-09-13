import Image from "next/image";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";
import TypingEffect from "../typyingEffect";

export default function Hero() {
  function applyForFunding() {}
  return (
    <div className="flex px-[6.5rem] pt-[3.75rem] pb-[6.5rem] justify-center flex-col gap-[6.25rem]">
      <div className="gap-4 flex flex-col items-start">
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center gap-4">
            <h1 className="w-[76.6875rem] font-poppins text-[5rem] leading-[130%] font-bold text-white-6">
              We <TypingEffect />
            </h1>
          </div>
          <h1 className="w-[76.6875rem] font-poppins text-[5rem] leading-[130%] font-bold text-white-6">
            Bitcoin Open-Source Engineers in the <br />
            Global South
          </h1>
        </div>
        <ButtonWithArrow text={"Apply For Funding"} onClick={applyForFunding} />
      </div>
      <div className="flex justify-between items-center w-full">
        <Image
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2022%20(2)-rwHtrLWvFsk7dNPAQGAmo5GaAfwukp.png"
          alt="board"
          width={0}
          height={0}
          sizes={"100vw"}
          className="w-[40.75rem] h-[24.625rem] rounded-lg"
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <SectionHeader text="why Btrust?" className="" />
            <Paragraph
              text={
                "Founded in 2021 with a generous 500 BTC donation from Jack Dorsey and Jay-Z, we believe that decentralization of the people building for and on Bitcoin enhances its resilience, reach, and relevance as a global currency."
              }
              className={"w-[32.5625rem]"}
            />
          </div>
          <div className="flex items-center justify-center max-w-max">
            <ButtonWithArrow
              text="Get to know more about us"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
