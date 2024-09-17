import OutlineButton from "@/components/buttons/OutlineButton";
import MediaCard, { Media } from "./mediaCard";

export default function Update({ updates }: { updates: Media[] }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-8 justify-between">
        {updates.map((update, index) => (
          <MediaCard {...update} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <OutlineButton text="See More" onClick={() => {}} />
      </div>
    </div>
  );
}
