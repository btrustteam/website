import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import ApplySteps from "./applyprocess";

export default function ApplyProgress() {
  return (
    <div className="py-10 lg:py-[5rem] px-[1.5rem] lg:px-0 flex flex-col items-center justify-center gap-8 lg:gap-2">
      <SectionHeader
        text="Apply to join BTrust Builders in 5 easy steps:"
        className="text-[1.5rem] lg:!text-[2.5rem] !leading-[normal] lg:text-center w-full lg:w-[36.9375rem]"
      />
      <ApplySteps />

      <ButtonWithArrow
        text="Apply Here"
        onClick={() => {}}
        className="w-full lg:w-auto"
      />
    </div>
  );
}
