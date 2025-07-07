import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import H4 from "./mediaHeader";
import Update from "./update";
import mediaNews from "./media.json";

export interface MediaProps {
  setIsMediaResources: (value: boolean) => void;
}

export default function MainMedia({ setIsMediaResources }: MediaProps) {
  return (
    <div className="flex py-[2rem] lg:py-[5rem] px-[1.5rem] lg:px-[6.5rem] flex-col gap-8">
      <div className="flex flex-col gap-2">
        <LittleHeading text="media" className="" />
        <SubHeading text="Btrust Updates" className="" />
        <div>
          <ButtonWithArrow
            noIcon={true}
            text="Download Press Kit"
            onClick={() => setIsMediaResources(true)}
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <H4 text="Btrust in the Press" />
        <Update
          updates={mediaNews}
        />
      </div>
    </div>
  );
}
