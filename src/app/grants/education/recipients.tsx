import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import EducationEventCard from "../educationEventCard";

export default function EducationGrantRecipients() {
  const router = useRouter();

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
            onClick={() => router.push('/grants/education')}
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
              text="grants / education"
              className="cursor-pointer"
            />
          </div>

          <SubHeading
            text="Education Grant Recipients"
            className="w-full lg:w-[54.25rem]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-12 px-6 lg:px-[6.5rem]">
        <EducationEventCard
          title="Bitshala"
          details={[
            "Bitshala is an initiative dedicated to Bitcoin education and open-source development in India. Their mission is to equip developers with the knowledge and technical skills needed to contribute to Bitcoin FOSS (Free and Open-Source Software) projects. By providing hands-on workshops, mentorship, and structured learning paths, Bitshala creates a pathway for Indian developers, and others in the Global South, to actively participate in and strengthen the global Bitcoin ecosystem.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-Vn1s7Xq00FOCIzpEOL22NcLDiPQvo4.png"
          link="https://bitshala.org/"
        />

        <EducationEventCard
          title="Libreria de Satoshi (B40S)"
          details={[
            "Librería de Satoshi (B4OS) is a program dedicated to making Bitcoin technical education accessible to Spanish-speaking individuals across Latin America, Spain, and beyond. Their mission is to empower learners to become Bitcoin developers, educators, and entrepreneurs through a structured curriculum of Socratic seminars, technical classes, and hands-on workshops.",
            "The program offers courses like Bitcoin 101, Bitcoin Bootcamp, and Mastering the Lightning Network, designed to cater to different levels of expertise. Participants also benefit from mentorship, private advisory sessions, and career support to help them integrate into the Bitcoin ecosystem.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-QsFDARjLGifEfn8Wig6CP38yYUV5RD.png"
          link="https://libreriadesatoshi.com/"
        />
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
