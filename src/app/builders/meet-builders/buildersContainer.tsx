import SectionHeader from "@/components/sectionHeader";
import BuilderCard from "./builderCard";
import { Builder } from "./currentBuilder";

export default function BuildersContainer({
  year,
  builders,
}: {
  year: string;
  builders: Builder[];
}) {
  return (
    <div className="flex flex-col justify-center gap-10 mb-16">
      <SectionHeader
        text={`${year} Btrust Builders`}
        className={`text-[1.5rem] leading-[normal]`}
      />
      <div className="flex flex-wrap items-center lg:items-stretch justify-center lg:justify-start gap-6 lg:gap-7 w-full">
        {builders.map((builder, index) => (
          <BuilderCard key={index} {...builder} />
        ))}
      </div>
    </div>
  );
}
