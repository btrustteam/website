import { useRouter } from "next/navigation";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";
import Perks from "./perks";

export default function StartGrant() {
  const route = useRouter();
  return (
    <>
      <div className="flex lg:hidden w-full pt-[4.5rem] pb-[5.5rem] flex-col justify-center gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex w-full px-6">
            <SectionHeader
              text="Open-Source Starter Grant"
              className="!text-[1.5rem] !leading-[normal] !uppercase"
            />
          </div>
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20-60-5yal301PbMsXKX3VuuBiaUnlCymh0g.JPG"
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
        <div className="px-6">
          <Perks />
        </div>
        <div className="flex flex-col gap-4 w-full px-6">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() => {
              route.push("https://btrust.homerun.co/starter-grants/en");
            }}
            noIcon={true}
          />
          <OutlineButton
            text="View Current & Past Recipients"
            url={'/grants/developer/starter-recipients'}
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-col mt-[3.5rem] px-[6.5rem] py-[4.5rem]">
        <div className="flex items-center justify-between">
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
          </div>
          <div className="flex justify-center items-center">
            <DynamicImage
              src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20-60-5yal301PbMsXKX3VuuBiaUnlCymh0g.JPG"
              className="w-[35.125rem] h-auto rounded-lg object-cover"
              alt="participants"
            />
          </div>
        </div>
        <Perks />
        <div className="flex gap-4 items-center">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() => {
              route.push("https://btrust.homerun.co/starter-grants/en");
            }}
            noIcon={true}
          />
          <OutlineButton
            text="View Current & Past Recipients"
            url={'/grants/developer/starter-recipients'}
          />
        </div>
      </div>
    </>
  );
}
