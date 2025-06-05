import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import Image from "next/image";
import { useEffect, useRef } from "react";
import EducationEventCard from "../educationEventCard";

export default function EventGrantRecipients({
  setCurrentSection,
}: {
  setCurrentSection: (value: string) => void;
}) {
  const firstDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      firstDivRef.current.scrollIntoView({ behavior: "smooth" });
      firstDivRef.current.focus();
    }
  }, []);
  return (
    <div ref={firstDivRef} className="flex flex-col">
      <div className="w-full flex flex-col gap-6 lg:gap-20 my-[2rem] lg:my-[3rem]">
        <div className="px-[2rem] lg:px-[6.5rem] py-0">
          <div
            className="flex items-center gap-2 cursor-pointer z-50"
            onClick={() => setCurrentSection("")}
          >
            <Image
              src={"/back.svg"}
              alt="back"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[1rem] h-[1rem]"
            />
            <LittleHeading
              text="grants / event / Current & Past Recipients"
              className="cursor-pointer"
            />
          </div>

          <SubHeading
            text="Events Grant Recipients"
            className="w-full lg:w-[61.9375rem]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-6 lg:px-[6.5rem]">
        <EducationEventCard
          title="Africa Bitcoin Conference"
          details={[
            "The Africa Bitcoin Conference (ABC) is the continent’s premier gathering for Bitcoin builders, thinkers, and advocates, promoting collaboration and innovation in the space. Since its inaugural edition in 2022 in Accra, Ghana, Btrust has proudly supported ABC, recognizing its role in strengthening Bitcoin adoption and development across Africa.",
            "With three editions so far; two in Accra, Ghana (2022, 2023) and one in Nairobi, Kenya (2024), the conference has become a key platform for knowledge-sharing and ecosystem growth. Through our Conference Grants, Btrust has enabled developers, educators, and speakers from Africa and the Global South to participate, ensuring that diverse voices and talent contribute to Bitcoin’s open-source future.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/10-PMF5DpmEMizgg067AAu2DTYqyG6rtn.png"
          link="https://afrobitcoin.org/"
        />

        <EducationEventCard
          title="Adopting Bitcoin Cape Town Conference"
          details={[
            "The Adopting Bitcoin Conference is a leading annual event dedicated to advancing bitcoin adoption. Traditionally held in El Salvador, the conference expanded its reach to Africa with the inaugural Adopting Bitcoin Cape Town conference in January 2024. We have proudly supported the conference since its inception, recognizing its impact in Southern Africa.",
            "The conference has brought together leading Bitcoin developers, educators, and advocates. It has a range of activities, including keynotes, panel discussions, and workshops, all aimed at exploring Bitcoin's role in fostering financial sovereignty and the development of parallel institutions in Southern Africa.",
            "Pre-conference meetups and post-conference activities, such as visits to bitcoin-focused community projects like Bitcoin Ekasi and The Surfer Kids, also provide attendees with practical insights into grassroots bitcoin adoption.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/11-pG8LkDRd71HQUM5h2TnqFOO4ly8w0Z.png"
          link="/"
        />
        <EducationEventCard
          title="Bitcoin Lightning Development Bootcamp by Africa Free Routing"
          details={[
            "In June 2024, Africa Free Routing organized a Bitcoin Lightning Development Bootcamp in Nairobi, Kenya. We were honored to be one of the bootcamp sponsors. This free, four-day program took place from June 10th to 13th. The bootcamp was aimed to equip developers with the skills and knowledge necessary to build innovative applications on the Lightning Network. Participants engaged in hands-on workshops led by experts, exploring real-world applications of the Lightning Network.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/12-C2Xidt6oM6nYuGziXHjld6lsK1yC2C.png"
          link="/"
        />
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
