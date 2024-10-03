import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export default function StartGrant({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <>
      <div className="flex lg:hidden w-full pt-[4.5rem] pb-[5.5rem] flex-col justify-center gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-center px-6">
            <SectionHeader
              text="Open-Source Starter Grant"
              className="!text-[1.5rem] !leading-[normal] !uppercase"
            />
          </div>
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image%20(3)-LN5oSIKG1INKVpt6fAEItBrH3C91LW.png"
            className="w-full h-[18.75rem] rounded-lg object-cover"
            alt="participants"
          />
          <div className="w-full flex px-6 justify-center items-center">
            <Paragraph className="text-black-2">
              The Btrust Starter Grant provides full-time funding to qualified
              software engineers to start contributing to open-source Bitcoin
              projects to identify a focus/niche for long-term contribution.
              This grant program sets the stage for engineers to contribute
              meaningfully, build credibility, and find direction through
              sustained contributions to open-source projects without worrying
              about livelihood.
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full px-6">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() => {}}
            noIcon={true}
          />
          <OutlineButton
            text="View Current & Past Recipients"
            onClick={() => setPage("starter")}
          />
        </div>
      </div>
      <div className="hidden lg:flex mt-[3.5rem] items-center justify-between px-[6.5rem] py-[4.5rem]">
        <div className="flex flex-col gap-[2.5rem] w-[37.125rem]">
          <div className="flex flex-col gap-2">
            <SectionHeader
              text="Open-Source Starter Grant"
              className="!text-[2.5rem] !leading-[140%] !uppercase"
            />
            <Paragraph className="">
              The Btrust Starter Grant provides full-time funding to qualified
              software engineers to start contributing to open-source Bitcoin
              projects to identify a focus/niche for long-term contribution.
              This grant program sets the stage for engineers to contribute
              meaningfully, build credibility, and find direction through
              sustained contributions to open-source projects without worrying
              about livelihood.
            </Paragraph>
          </div>
          <div className="flex gap-4 items-center">
            <ButtonWithArrow
              text="Apply for this grant"
              onClick={() => {}}
              noIcon={true}
            />
            <OutlineButton
              text="View Current & Past Recipients"
              onClick={() => setPage("starter")}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image%20(3)-LN5oSIKG1INKVpt6fAEItBrH3C91LW.png"
            className="w-[35.125rem] h-[ 26.125rem] rounded-lg"
            alt="participants"
          />
        </div>
      </div>
    </>
  );
}
