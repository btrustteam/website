import SectionHeader from "../sectionHeader";
import BigLinkedin from "../links/bigLinkedIn";
import BigTwitter from "../links/bigTwitter";

export default function Activities() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 h-[24.4375rem] lg:h-[33.9375rem] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2041-VTtl8E7lkH8eElUrmBexwqeg99bSlv.png')",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionHeader
          text="Follow our activities"
          className="!text-[1.5rem] lg:!text-[2.5rem] text-center"
        />
        <div className="flex justify-center items-center gap-[4rem]">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-active-white text-center font-poppins text-[0.875rem] lg:text-base font-semibold">
              Btrust
            </p>
            <div className="flex items-start gap-4">
              <BigTwitter url="/" />
              <BigLinkedin url="/" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-active-white text-center font-poppins text-[0.875rem] lg:text-base font-semibold">
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
