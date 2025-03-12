import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import OutlineButton from "@/components/buttons/OutlineButton";
import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";
import { useRouter } from "next/navigation";
import BulletParagraph from "../bulletParagraph";

export default function WhoCanApply({
  setCurrentSection,
}: {
  setCurrentSection: (section: string) => void;
}) {
  const details = [
    "Bitcoin education programs focused on training and upskilling Bitcoin developers.",
    "Studies, white papers, and data-driven analysis exploring Bitcoin's impact, technical advancements, and adoption trends in the Global South.",
    // "Language translation & automation: Expanding access to Bitcoin knowledge through manual translation efforts, AI/LLM-assisted translations, and other automation techniques to make Bitcoin educational resources more widely available.",
  ];
  const route = useRouter();
  return (
    <div className="pt-[4.5rem] lg:pt-[8rem] lg:pb-0 px-6 lg:px-[6.5rem] flex justify-between flex-col lg:flex-row-reverse">
      <DynamicImage
        src={
          "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/8-BygK946sp20t5KumKb3ACcOog8QSEY.png"
        }
        className="w-full h-[18.75rem] lg:h-full lg:w-[35.125rem] rounded-lg object-cover"
        alt="participants"
      />
      <div className="w-full lg:w-[37.125rem] flex flex-col gap-10">
        <div className="flex flex-col gap-2 w-full mt-6 lg:mt-0">
          <SectionHeader
            text={"Who Can Apply?"}
            className="!text-[1.625rem] !leading-[normal] lg:!text-[2.5rem] lg:!leading-[140%] !uppercase"
          />
          <Paragraph className="text-black-2">We fund:</Paragraph>
          {details.map((detail, index) => (
            <BulletParagraph key={index} text={detail} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <ButtonWithArrow
            text="Apply for this grant"
            onClick={() => {
              route.push(
                "https://btrust.homerun.co/education-grant-application/en"
              );
            }}
            noIcon={true}
          />
          <OutlineButton
            text="View Current & Past Recipients"
            onClick={() => setCurrentSection("recipient")}
          />
        </div>
      </div>
    </div>
  );
}
