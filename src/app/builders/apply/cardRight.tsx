import DynamicImage from "@/components/DynamicImage";
import Card from "./card";

export default function CardRight({
  text,
  heading,
}: {
  text: string;
  heading: string;
}) {
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="w-full"></div>
      <div className="flex items-center w-full gap-4">
        <div className="flex items-center w-full">
          <div className="w-full h-[2px] bg-black-4"></div>
          <div className="h-[1.25rem] w-[1.25rem]">
            <DynamicImage
              src="/pointer.svg"
              alt="point"
              className="h-[1.25rem] w-[1.25rem]"
            />
          </div>
        </div>
        <Card text={text} heading={heading} />
      </div>
    </div>
  );
}
