import { MediaProps } from "./mainMedia";
import Image from "next/image";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import MediaResourceCard from "./mediaResourceCard";

export default function MediaResources({ setIsMediaResources }: MediaProps) {
  return (
    <div className="flex flex-col gap-10 py-[2rem] lg:py-[4rem] px-[1.5rem] lg:px-[6.5rem]">
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-2 cursor-pointer z-50"
          onClick={() => setIsMediaResources(false)}
        >
          <Image
            src={"/back.svg"}
            alt="back"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[1rem] h-[1rem]"
          />
          <LittleHeading text="MEDIA/DOWNLOAD RESOURCES" className={""} />
        </div>
        <SubHeading text="Media Resources" className="" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <MediaResourceCard
          download_link="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust%20Logos.zip"
          title="Btrust Logo & Fonts"
          background_image="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Pattern-wdAeilJQWrQk7inxGdiTEJWHMoqqic.png"
          logo="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust%20logo%20(white)%202%20(1)-LM3hiJfudq6UEU70ZPlBlGDP3WUBsI.svg"
          type="Btrust"
        />
        <MediaResourceCard
          download_link="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Btrust%20Builders%20Logos-VseB1FDlt1XGcF86ZuoOR4dqA8Dca3.zip"
          title="Btrust Builders Logo & Fonts"
          background_image="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Pattern-wdAeilJQWrQk7inxGdiTEJWHMoqqic.png"
          logo="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/hd_transparent_logo_white%201-zookmiFVlamf3nQZN3m1WCpPLHmJsz.svg"
          type="Builders"
        />
      </div>
    </div>
  );
}
