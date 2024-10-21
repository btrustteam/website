import DynamicImage from "@/components/DynamicImage";

interface MediaResourcesProps {
  download_link: string;
  logo: string;
  background_image: string;
  title: string;
  type: "Builders" | "Btrust";
}
export default function MediaResourceCard({
  download_link,
  logo,
  background_image,
  title,
  type,
}: MediaResourcesProps) {
  return (
    <div className="w-full max-w-[37.82rem] border flex flex-col rounded-lg p-[1.25rem] gap-4 border-black-4">
      <h4 className="font-bold text-[1.125rem] lg:text-[1.375rem] text-active-white font-poppins">
        {title}
      </h4>
      <div
        className="flex items-center justify-center rounded-lg bg-black h-[13.5625rem] lg:h-[22.5rem] bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${background_image})`,
        }}
      >
        <DynamicImage
          className={`${
            type === "Builders"
              ? "w-[9.5rem] lg:w-[15.625rem] h-full"
              : "w-[7rem] lg:w-[11.5rem] h-full"
          }`}
          src={logo}
          alt={title}
        />
      </div>
      <div className="flex">
        <a
          href={download_link}
          download={`${title}.pdf`}
          className="flex items-center justify-center gap-2 rounded-lg border border-active-white py-[1.25rem] px-[2rem] text-active-white text-base font-bold font-poppins"
        >
          <DynamicImage
            className={`h-6 w-6`}
            src="/download.svg"
            alt="download"
          />{" "}
          Download
        </a>
      </div>
    </div>
  );
}
