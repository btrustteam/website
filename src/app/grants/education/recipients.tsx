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
          title="Hack4Freedom"
          details={[
            "Hack4Freedom trains female developers in the Global South to build next-gen open-source freedom software.",
            "Hack4Freedom is a two-week, women-only hybrid hackathon where developers in the Global South learn, build, and ship open-source freedom tools using Bitcoin, Lightning, Nostr, and eCash. It combines hands-on workshops, global mentorship, and project-based building so participants leave with real prototypes, repos, contributors, and a community of female builders."
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Hack4Freedom.webp"
          link="https://www.hack4freedom.com/"
        />

        <EducationEventCard
          title="Vinteum"
          details={[
            "A Bitcoin R&D Center in Brazil that trains, mentors, and fund open-source Bitcoin developers and researchers.",
            "Vinteum exists to train, support, and fund the people building Bitcoin's open-source infrastructure. To fulfill its potential as a tool for freedom and financial sovereignty, Bitcoin needs a diverse, global community of contributors. Bitcoin depends on people who choose to build it. Vinteum exists to help grow that community. We support developers and researchers across their journey — from first contact to active contribution and beyond — through education, mentorship, and funding. Our work is grounded in real collaboration: meetups, seminars, in-person programs, and residencies, alongside fellowships and grants that enable sustained open-source work. We focus on enabling contributions to Bitcoin Core, the Lightning Network, and other critical infrastructure that keeps Bitcoin secure, decentralized, and usable."
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/vintuem.jpeg"
          link="https://www.vinteum.org/"
        />

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

        <EducationEventCard
          title="Bitcoin Lightning Development Bootcamp by Africa Free Routing"
          details={[
            "In June 2024, Africa Free Routing organized a Bitcoin Lightning Development Bootcamp in Nairobi, Kenya. We were honored to be one of the bootcamp sponsors. This free, four-day program took place from June 10th to 13th. The bootcamp was aimed to equip developers with the skills and knowledge necessary to build innovative applications on the Lightning Network. Participants engaged in hands-on workshops led by experts, exploring real-world applications of the Lightning Network.",
          ]}
          imageSrc="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/12-C2Xidt6oM6nYuGziXHjld6lsK1yC2C.png"
          link="https://freerouting.africa/bootcamps/?ref=www.btrust.tech"
        />
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
