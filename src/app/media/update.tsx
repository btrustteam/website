import MediaCard, { Media } from "./mediaCard";

export default function Update({ updates }: { updates: Media[] }) {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8">
      <div className="flex w-full flex-wrap gap-6 lg:gap-0 items-center lg:items-start justify-center lg:justify-between">
        {updates.map((update, index) => (
          <MediaCard {...update} key={index} />
        ))}
      </div>
    </div>
  );
}
