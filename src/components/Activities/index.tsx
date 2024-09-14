import SectionHeader from "../sectionHeader";
import Image from "next/image";
import BigLinkedin from "../links/bigLinkedIn";
import BigTwitter from "../links/bigTwitter";

export default function Activities() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 h-[33.9375rem] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2041-BujkfOTaSsPXANUnWRYRfRFNNG4qeF.png')",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionHeader
          text="Follow our activities"
          className="text-[2.5rem] text-center"
        />
        <div className="flex justify-center items-center gap-[4rem]">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-active-white text-center font-poppins text-base font-semibold">
              Btrust
            </p>
            <div className="flex items-start gap-4">
              <BigTwitter url="/" />
              <BigLinkedin url="/" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-active-white text-center font-poppins text-base font-semibold">
              Btrust Builders
            </p>
            <div className="flex items-start gap-4">
              <BigTwitter url="/" />
              <BigLinkedin url="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
