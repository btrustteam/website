"use client";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import ProgramCard from "./programCard";
import { useRouter } from "next/navigation";

export default function Program() {
  const router = useRouter();
  return (
    <div className="flex flex-col pt-[6rem] lg:pt-[5rem] pb-[2.5rem] px-0 gap-16 items-center w-full">
      <div className="flex flex-col w-full gap-10 px-[1.5rem] lg:px-[6.5rem]">
        <div className="flex flex-col items-center gap-10">
          <SectionHeader
            text="What do you get from the Btrust Builders Program?"
            className="w-full lg:w-[46.6875rem] !text-[1.5rem] lg:!text-[2.5rem] lg:text-center !normal-case"
          />
        </div>
        <div className="w-full flex flex-col gap-[1.9375rem]">
          <div className="flex w-full items-center lg:items-start flex-col lg:flex-row justify-between gap-6">
            <ProgramCard
              text="Deep immersion into Bitcoin development philosophy so you understand why Bitcoin is built the way it is"
              heading="Bitcoin Philosophy"
            />
            <ProgramCard
              text="Practical introduction to Bitcoin & Lightning development methodology and open-source development"
              heading="Deep Learning"
            />
            <ProgramCard
              text="A support community of talented developer peers going through the same experience with you"
              heading="Community Support"
            />
          </div>
          <div className="flex w-full items-center lg:items-start flex-col lg:flex-row justify-between gap-6">
            <ProgramCard
              text="Support to get your technology setup (internet, video & audio, etc.) up to muster for consistent contribution"
              heading="Technology Support"
            />
            <ProgramCard
              text="In the form of concrete Bitcoin & Lightning projects that you contribute to and build"
              heading="Proof of Work"
            />
            <ProgramCard
              text="Build your persona and profile in the extended Bitcoin developer ecosystem"
              heading="Profile Building"
            />
          </div>
          <div className="flex w-full items-center lg:items-start flex-col lg:flex-row justify-between gap-6">
            <ProgramCard
              text="Experienced mentors who support you at every step of the journey"
              heading="Mentorship"
            />
            <ProgramCard
              text="Grant support to work in open-source Bitcoin development"
              heading="Grant Matching"
            />
            <ProgramCard
              text="Support from our world-class developer faculty"
              heading="World-Class Faculty"
            />
          </div>
          <div className="flex flex-col gap-6 items-center lg:grid grid-cols-1 justify-between">
            <div className="flex items-center justify-center w-full">
              <ButtonWithArrow
                text="Apply Here"
                onClick={() => {
                  router.push(
                    "https://btrust.homerun.co/btrust-builders-application/en"
                  );
                }}
                noIcon={false}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#222] px-[1.5rem] py-12 lg:py-24 items-center justify-center flex flex-col gap-4 lg:gap-2">
        <h3 className="text-active-white text-center font-poppins text-[1.75rem] lg:text-[2rem] font-semibold w-full max-w-[23.875rem] lg:w-[46.5625rem]">
          Want to learn more? Join our next developer information session.
        </h3>
        <div className="flex items-center justify-center w-full">
          <ButtonWithArrow
            onClick={() => router.push("https://forms.gle/Bxo2hQYQscaFTGwC6")}
            text="Join Here"
            className="w-full lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
