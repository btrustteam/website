import OutlineButton from "@/components/buttons/OutlineButton";
import MediaCard, { Media } from "./mediaCard";

export default function Blog({ updates }: { updates: Media[] }) {
  return (
    <div className="flex w-full flex-col gap-6 lg:gap-8">
      <div className="flex flex-wrap gap-8 items-center lg:items-start justify-center lg:justify-between">
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
