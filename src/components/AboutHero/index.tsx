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
            text="A Decentralised Future for Bitcoin Software Development"
            className="w-full lg:w-[55.375rem]"
          />
        </div>
        <div className="flex flex-col gap-8 w-full lg:w-[54.4375rem]">
          <Paragraph className="">
            Btrust is a non-profit organization with a dedicated mission to
            decentralize the development of Bitcoin software. Our focus is on
            fostering developer talent in the global south and supporting the
            free and open-source Bitcoin ecosystem.
          </Paragraph>
          <Paragraph className="">
            At Btrust, we believe that decentralization enhances the resilience,
            reach, and relevance of bitcoin as a global currency. We are
            committed to operating in regions where Bitcoin development is
            uncommon, contributing to the growth and decentralization of the
            technology.
          </Paragraph>
          <Paragraph className="">
            Our journey began in 2021 with a generous 500 BTC donation from Jack
            Dorsey and Jay-Z. This initial funding has propelled us into action,
            allowing us to pursue our vision of a more decentralized and
            resilient Bitcoin ecosystem. Join us on this journey as we work
            towards a future where the development of Bitcoin is truly
            decentralized, open, and collaborative.
          </Paragraph>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:h-[46.25rem] h-[18.75rem]">
        <Image
          src={
            "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-98-I3HOF9B22YmkZ0jtyxPg0kOuRipH4w.JPG"
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
