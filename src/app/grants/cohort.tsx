import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

export default function Cohort({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <div className="flex items-center py-[4.5rem] px-[6.5rem] gap-[4.75rem] justify-between">
      <div className="flex justify-center items-center">
        <DynamicImage
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2018%20(1)-wvstlo7ckqpDdkbgVpHVA0btN6S7uq.png"
          className="w-[35.125rem] h-full rounded-lg object-cover"
          alt="participants"
        />
      </div>
      <div className="flex flex-col gap-[1.4rem] w-[37.125rem]">
        <div className="flex flex-col gap-2">
          <SectionHeader
            text="Btrust Open-Source Cohort"
            className="!text-[2.5rem] !leading-[140%] !uppercase"
          />
          <div className="flex flex-col gap-6 w-[33.625rem]">
            <Paragraph className="">
              Working in open-source can be a lonely experience, especially for
              experienced software developers from regions like the Global
              South, where uncertainties about pay and career prospects can make
              it less appealing.
            </Paragraph>
            <Paragraph className="">
              Our Open-Source Cohort approach aims to change that by providing
              an opportunity to work on Bitcoin open-source projects as an
              individual contributor within a team structure and receive monthly
              payments through a grant.
            </Paragraph>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() => {}}
            noIcon={true}
          />
          <OutlineButton
            text="View Current & Past Recipients"
            onClick={() => {
              setPage("open_source");
            }}
          />
        </div>
      </div>
    </div>
  );
}
