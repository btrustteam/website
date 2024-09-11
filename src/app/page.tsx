"use client";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import Gradient from "@/components/gradient";
import Nav from "@/components/nav";
import Pattern from "@/components/pattern";
import TypingEffect from "@/components/typyingEffect";

export default function Home() {
  return (
    <div className="bg-bg-black relative pb-[10rem]">
      <Pattern />
      <Gradient />
      <Nav />
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
          <ButtonWithArrow text={"Apply For Funding"} onClick={() => {}} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
