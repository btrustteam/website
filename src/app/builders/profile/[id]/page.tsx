import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import DynamicImage from "@/components/DynamicImage";
import SocialLink from "@/components/links/socials";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";
import { Metadata } from "next";
import BuilderData from "../../../../builders_data/data.json";
import { Builder } from "../../meet-builders/currentBuilder";
import BackComponent from "./backComponent";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const builder: Builder | undefined = BuilderData.find(
    (b) => b.id === Number(params.id)
  );

  if (!builder) {
    return {
      title: "Invalid user",
      description: "Seems you are searching for Satoshi",
    };
  }

  return {
    title: `${builder.name}'s Profile`,
    description: `Details and information about ${builder.name}.`,
    openGraph: {
      title: `${builder.name}'s Profile`,
      description: `Learn more about ${builder.name}.`,
      images: [{ url: builder.image }],
    },
  };
}

export default function BuilderProfile({ params }: { params: { id: string } }) {
  const builder = BuilderData.find((b) => b.id === Number(params.id));

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:px-[6.5rem] gap-4 lg:gap-[4.6rem] mt-[3rem] z-50">
        <BackComponent />
        {builder && (
          <div className="flex w-full flex-col lg:flex-row justify-between gap-8 lg:gap-20">
            <div className="flex lg:hidden flex-col w-full px-[1.5rem]">
              <SectionHeader
                text={`${builder.name}`}
                className="!text-[1.5rem] !leading-[normal] lg:hidden block"
              />
              <Paragraph className="!leading-[175%] lg:hidden block">
                {builder.role}
              </Paragraph>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-[31.1875rem]">
              <DynamicImage
                src={builder.image}
                alt={builder.name}
                className="h-[27.5625rem] lg:h-[33.375rem] object-cover rounded-lg w-full"
              />
              <div className="flex items-center gap-4 px-[1.5rem] lg:px-0">
                <SocialLink icon="github" url={builder.github} />
                <SocialLink icon="linkedin" url={builder.linkedin} />
                <SocialLink icon="medium" url={builder.medium} />
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[40.8125rem] gap-8 px-6 lg:px-0">
              <div className="flex flex-col w-full">
                <SectionHeader
                  text={`${builder.name}`}
                  className="!text-[2.5rem] !leading-[normal] hidden lg:block"
                />
                <Paragraph className="!leading-[175%] hidden lg:block">
                  {builder.role}
                </Paragraph>
              </div>
              <div className="flex flex-col gap-4">
                <SectionHeader
                  text={`Technical Background`}
                  className={`!text-[1.5rem] !font-semibold !leading-[135%]`}
                />

                <div className="flex flex-wrap gap-[0.4375rem]">
                  {builder.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap px-[1.125rem] h-[2rem] justify-center items-center gap-2 rounded border border-[#F6F7FC]"
                    >
                      <Paragraph className="!text-[#F6F7FC] !leading-[150%]">
                        {skill}
                      </Paragraph>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <SectionHeader
                    text={`About Me`}
                    className={`!text-[1.5rem] !font-semibold !leading-[135%]`}
                  />
                  <Paragraph className="!leading-[175%]">
                    {builder.background}
                  </Paragraph>
                </div>
                <div className="flex flex-col gap-4">
                  <SectionHeader
                    text={`My Bitcoin and Lightning Building Achievements`}
                    className={`!text-[1.5rem] !font-semibold !leading-[135%]`}
                  />
                  <Paragraph className="!leading-[175%]">
                    {builder.why_bitcoin}
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        )}
        {!builder && (
          <div className="flex items-center justify-center w-full">
            <SectionHeader
              text="You are trying to access an Anonymous Builders!! Winks!"
              className=""
            />
          </div>
        )}
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
