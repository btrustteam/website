import ButtonWithArrow from "@/components/buttons/buttonWithArrow";

export default function PotentialBuilder() {
  return (
    <div className="w-full bg-[#222] py-24 items-center justify-center flex flex-col gap-12">
      <h3 className="text-active-white text-center font-poppins text-[2.5rem] font-bold w-[46.4375rem]">
        Apply to join Btrust Builders and potentially become a Fellow
      </h3>
      <div className="flex items-center justify-center">
        <ButtonWithArrow onClick={() => {}} text="Apply Here" />
      </div>
    </div>
  );
}
