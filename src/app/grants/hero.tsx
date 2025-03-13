import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";

export default function GrantsHero() {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-20 mt-[2rem] lg:mt-[3rem]">
      <div className="px-[2rem] lg:px-[6.5rem] py-0">
        <LittleHeading text="grants" className="" />
        <SubHeading
          text="Supporting the Bitcoin Open-Source Ecosystem"
          className="w-full lg:w-[46.8125rem]"
        />
      </div>
      <div className="flex justify-center items-center">
        <DynamicImage
          src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-103-UDt5Jos2fBnxEZptEr3WdJEew6d635.JPG"
          alt=""
          className="w-full h-[18.75rem] lg:h-[46.1875rem] object-cover"
        />
      </div>
    </div>
  );
}
