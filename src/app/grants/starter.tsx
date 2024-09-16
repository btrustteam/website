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
    <div className="mt-[3.5rem] flex items-center justify-between px-[6.5rem] py-[4.5rem]">
      <div className="flex flex-col gap-[2.5rem] w-[37.125rem]">
        <div className="flex flex-col gap-2">
          <SectionHeader
            text="Open-Source Starter Grant"
            className="!text-[2.5rem] !leading-[140%] !uppercase"
          />
          <Paragraph className="">
            The Btrust Starter Grant provides full-time funding to qualified
            software engineers to start contributing to open-source Bitcoin
            projects to identify a focus/niche for long-term contribution. This
            grant program sets the stage for engineers to contribute
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
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image%20(3)-uLj6e0SbBqhh9p76aUvteOJoSLhBwb.png"
          className="w-[35.125rem] h-[ 26.125rem] rounded-lg"
          alt="participants"
        />
      </div>
    </div>
  );
}
