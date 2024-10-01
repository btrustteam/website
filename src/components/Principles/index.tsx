"use client";
import CardStack from "../CardStack";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";

export default function Principles() {
  return (
    <div className="flex flex-col gap-8 lg:gap-[3rem] pl-[1.5rem] pr-[1.5rem] lg:pr-0 lg:pl-[6.5rem] py-[2rem] lg:py-[3.37rem]">
      <div className="flex flex-col gap-2 lg:gap-[2rem]">
        <SectionHeader
          text="Btrust Genesis Principles"
          className="!text-[1.5rem] lg:!text-[2.5rem]"
        />
        <div className="w-full lg:w-[50.6875rem] flex flex-col gap-[2rem]">
          <Paragraph className="">
            Btrust’s Genesis Principles are an immutable set of principles
            governing its operation and outlining its vision. The principles
            exist to guide the board and representatives of the trust and to act
            as an accountability safeguard against bad actors.
          </Paragraph>
          <Paragraph className="">
            Board members take ownership of this vision and act in good faith to
            protect the interests and integrity of the organization. The
            specific implementation of these principles is the prerogative of
            the board and selected representatives.
          </Paragraph>
        </div>
      </div>
      <div className="relative overflow-x-hidden">
        <CardStack />
      </div>
    </div>
  );
}
