import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";
import { useRouter } from "next/navigation";

export default function Cohort({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const router = useRouter();
  return (
    <>
      <div className="flex lg:hidden pb-[5.5rem] flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex px-[1.5rem]">
            <SectionHeader
              text="Btrust Open-Source Cohort"
              className="!text-[1.5rem] !leading-[normal] !uppercase"
            />
          </div>
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20-50-gmPzhV1Wpf0mQp4YwsjGhan9OHHNHP.JPG"
            className="w-full h-[18.75rem] rounded-lg object-cover"
            alt="participants"
          />
          <div className="flex flex-col w-full gap-6 px-6">
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
        <div className="flex flex-col gap-4 px-[1.5rem] w-full">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() =>
              router.push("https://btrust.homerun.co/open-source-cohort/apply")
            }
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
      <div className="hidden lg:flex items-center py-[4.5rem] px-[6.5rem] gap-[4.75rem] justify-between">
        <div className="flex justify-center items-center">
          <DynamicImage
            src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20-50-gmPzhV1Wpf0mQp4YwsjGhan9OHHNHP.JPG"
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
                Working in open-source can be a lonely experience, especially
                for experienced software developers from regions like the Global
                South, where uncertainties about pay and career prospects can
                make it less appealing.
              </Paragraph>
              <Paragraph className="">
                Our Open-Source Cohort approach aims to change that by providing
                an opportunity to work on Bitcoin open-source projects as an
                individual contributor within a team structure and receive
                monthly payments through a grant.
              </Paragraph>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ButtonWithArrow
              text="Apply for this grant"
              onClick={() =>
                router.push(
                  "https://btrust.homerun.co/open-source-cohort/en"
                )
              }
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
    </>
  );
}
