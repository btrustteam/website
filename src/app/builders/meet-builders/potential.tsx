import ButtonWithArrow from "@/components/buttons/buttonWithArrow";

export default function PotentialBuilder() {
  return (
    <div className="w-full bg-[#222] py-12 lg:py-24 items-center justify-center flex flex-col gap-4 lg:gap-12 px-[1.5rem] lg:px-0">
      <h3 className="text-active-white text-center font-poppins text-[1.75rem] lg:text-[2.5rem] font-bold w-full lg:w-[46.4375rem]">
        Apply to join Btrust Builders and potentially become a Fellow
      </h3>
      <div className="flex items-center justify-center w-full">
        <ButtonWithArrow
          onClick={() => {}}
          text="Apply Here"
          className="w-full lg:w-auto"
        />
      </div>
    </div>
  );
}
