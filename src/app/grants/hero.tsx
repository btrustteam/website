import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";

export default function GrantsHero() {
  return (
    <div className="w-full flex flex-col gap-20 mt-[3rem]">
      <div className="px-[6.5rem] py-0">
        <LittleHeading text="grants" className="" />
        <SubHeading
          text="Get funding to work on Free and Open-Source Bitcoin projects"
          className="w-[58.375rem]"
        />
      </div>
      <div className="flex justify-center items-center">
        <DynamicImage
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2018-1LyGL3STi6IsVJXAXZ3SienCcHVVD1.png"
          alt=""
          className="w-full h-[46.1875rem]"
        />
      </div>
    </div>
  );
}
