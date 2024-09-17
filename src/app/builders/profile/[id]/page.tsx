"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import DynamicImage from "@/components/DynamicImage";
import SocialLink from "@/components/links/socials";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BuilderData from "../../../../builders_data/data.json";
import { Builder } from "../../meet-builders/currentBuilder";

export default function BuilderProfile() {
  const [builder, setBuilder] = useState<Builder | null>(null);

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const builder = findBuilder(Number(params.id));
    setBuilder(builder);
  }, [params.id]);

  function findBuilder(id: number): Builder | null {
    for (let i = 0; i < BuilderData.length; i++) {
      const builder = BuilderData[i];
      if (builder.id === id) {
        return builder;
      }
    }

    return null;
  }

  return (
    <div className="flex flex-col z-20">
      <div className="flex flex-col px-[6.5rem] gap-[4.6rem] mt-[3rem] z-50">
        <div className="flex items-center gap-2">
          <Image
            src={"/back.svg"}
            alt="back"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[1rem] h-[1rem] cursor-pointer"
            onClick={() => router.push("/builders/meet-builders")}
          />
          <LittleHeading
            text="btrust builders/builders Profile"
            className="leading-[normal]"
          />
        </div>
        {builder && (
          <div className="flex justify-between gap-20">
            <div className="flex flex-col gap-6 w-[31.1875rem]">
              <DynamicImage
                src={builder.image}
                alt={builder.name}
                className="h-[33.375rem] rounded-lg w-full"
              />
              <div className="flex items-center gap-4">
                <SocialLink icon="github" url={builder.github} />
                <SocialLink icon="linkedin" url={builder.linkedin} />
                <SocialLink icon="medium" url={builder.medium} />
              </div>
            </div>
            <div className="flex flex-col w-[40.8125rem] gap-8">
              <div className="flex flex-col w-full">
                <SectionHeader
                  text={`${builder.name}`}
                  className="!text-[2.5rem] !leading-[normal]"
                />
                <Paragraph className="!leading-[175%]">
                  {builder.role}
                </Paragraph>
              </div>
              <div className="flex flex-col gap-4">
                <SectionHeader
                  text={`Technical Background`}
                  className={`!text-[1.5rem] !font-semibold !leading-[135%]`}
                />

                <div className="flex gap-[0.4375rem]">
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