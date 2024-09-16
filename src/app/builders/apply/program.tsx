import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import ProgramCard from "./programCard";

export default function Program() {
  return (
    <div className="flex flex-col pt-[5rem] pb-[2.5rem] px-0 gap-16 items-center w-full">
      <div className="flex flex-col w-full gap-10">
        <div className="px-[6.5rem] flex flex-col items-center gap-10">
          <SectionHeader
            text="What do you get from the Btrust Builders Program?"
            className="w-[46.6875rem] !text-[2.5rem] text-center"
          />
        </div>
        <div className="w-full flex flex-col gap-[1.9375rem] px-[6.5rem]">
          <div className="flex w-full justify-between gap-6">
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
              heading="Bitcoin Philosophy"
            />
          </div>
          <div className="flex justify-between gap-6">
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
          <div className="flex justify-between gap-6">
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
              heading="Profile Building"
            />
          </div>
          <div className="grid grid-cols-3 justify-between">
            <ProgramCard
              text="Tied to excellent performance"
              heading="Monthly Stipend"
            />
            <div className="p-[1.5rem] flex items-center gap-4 rounded-lg border border-black-5 col-span-2 w-full">
              <h3 className="w-[47.25rem] font-poppins text-[1.5rem] font-semibold text-active-white">
                Does this sound like the kind of experience you would like to be
                a part of?{" "}
                <a href="/" className=" italic font-bold underline">
                  Apply Here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#222] py-24 items-center justify-center flex flex-col gap-2">
        <h3 className="text-active-white text-center font-poppins text-[2rem] font-semibold w-[46.5625rem]">
          Want to learn more? Join our next developer information session.
        </h3>
        <div className="flex items-center justify-center">
          <ButtonWithArrow onClick={() => {}} text="Join Here" />
        </div>
      </div>
    </div>
  );
}
