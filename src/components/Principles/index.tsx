"use client";
import CardStack from "../CardStack";
import Paragraph from "../Paragraph";
import SectionHeader from "../sectionHeader";

export default function Principles() {
  return (
    <div className="flex flex-col gap-[3rem] pl-[6.5rem] py-[3.37rem]">
      <div className="flex flex-col gap-[2rem]">
        <SectionHeader
          text="Btrust Genesis Principles"
          className="!text-[2.5rem]"
        />
        <div className="w-[50.6875rem] flex flex-col gap-[2rem]">
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
      <div className="relative">
        <CardStack />
      </div>
    </div>
  );
}
