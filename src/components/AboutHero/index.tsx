import Image from "next/image";
import LittleHeading from "../LittleHeading";
import Paragraph from "../Paragraph";
import SubHeading from "../SubHeading";

export default function AboutHero() {
  return (
    <div className="flex flex-col gap-10 lg:gap-[6.25rem]">
      <div className="flex w-full pt-[3.75rem] px-[1.5rem] lg:px-[6.5rem] p-0 flex-col gap-[2rem]">
        <div className="flex flex-col">
          <LittleHeading text="About us" className="" />
          <SubHeading
            text="Supporting the Bitcoin open-source ecosystem in the Global Majority."
            className="w-full lg:w-[55.375rem]"
          />
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-[54.4375rem]">
          <Paragraph className="">
            Btrust is a non-profit organization supporting the Bitcoin open-source ecosystem in the Global Majority. 
            Our purpose is to decentralize Bitcoin software development by enabling more people, in more places, to help build, review and maintain it.
          </Paragraph>
          <Paragraph className="">
            Our approach places Bitcoin open source at the core, surrounded by the people, education and communities that sustain it. 
            Through developer grants, education grants and event grants, we support meaningful contributions, strengthen technical skills and create opportunities for collaboration in regions where pathways into Bitcoin development have historically been limited. 
            In addition, we support work in open-source mining, security and responsible uses of AI that strengthens the Bitcoin ecosystem.
          </Paragraph>
          <Paragraph className="">
            Our journey began in 2021 with a generous 500 BTC donation from Jack Dorsey and Jay-Z. 
            This initial funding has propelled us into action, allowing us to pursue our vision of a more decentralized and resilient Bitcoin ecosystem.
          </Paragraph>
          <Paragraph className="">
            Join us on this journey as we work towards a future where the development of Bitcoin is truly decentralized, open, and collaborative.
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:h-[46.25rem] h-[18.75rem]">
        <Image
          src={
            "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust-Board-kd3ZuY9hX0E7lst6NEhsM42ZfzJ9XU.jpg"
          }
          alt="the team"
          width={0}
          height={0}
          sizes={"100vw"}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
