import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

export default function Hero() {
  return (
    <div className="flex flex-col gap-12 mt-10">
      <div className="flex flex-col px-[6.5rem] gap-5">
        <div className="flex flex-col">
          <LittleHeading text="Contact Us" className="" />
          <SubHeading
            text="We’d Love to Hear from You"
            className="!leading-[normal]"
          />
        </div>
        <Paragraph className="!leading-[177.778%] w-[43.3125rem] !text-[1.125rem]">
          Whether you’re curious about our technology, need support, or just
          want to chat about the future of Bitcoin development, we’re here to
          help.
        </Paragraph>
      </div>
      <div className="w-full">
        <DynamicImage
          src="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2041%20(2)-RI2isgnVw70nd7mLffRQ6Q8COV7a8s.png"
          className="h-[46.1875rem] rounded-lg w-full"
          alt="Contact"
        />
      </div>
    </div>
  );
}
