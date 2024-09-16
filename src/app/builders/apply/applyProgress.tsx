import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import SectionHeader from "@/components/sectionHeader";
import ApplySteps from "./applyprocess";

export default function ApplyProgress() {
  return (
    <div className="py-[5rem] flex flex-col items-center justify-center gap-2">
      <SectionHeader
        text="Apply to join BTrust Builders in 5 easy steps:"
        className="!text-[2.5rem] !leading-[normal] text-center w-[36.9375rem]"
      />
      <ApplySteps />

      <ButtonWithArrow text="Apply Here" onClick={() => {}} />
    </div>
  );
}
