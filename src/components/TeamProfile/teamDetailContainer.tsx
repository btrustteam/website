import Image from "next/image";
import TeamCard, { TeamCardProps } from "./teamCard";

interface TeamProps {
  title: string;
  brief: string;
  isBoard: boolean;
  teanMembers: TeamCardProps[];
}
export default function TeamDetailsContainer({
  title,
  brief,
  teanMembers,
  isBoard,
}: TeamProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center gap-6">
          <h3 className="text-active-white font-poppins text-[1.5rem] font-bold ">
            {title}
          </h3>
          <Image src={"/caret.svg"} alt="caret" width={24} height={24} />
        </div>
        <p className="text-black-2 font-poppins text-[1.125rem] leading-[177.778%] w-[41.75rem]">
          {brief}
        </p>
      </div>
      <div className={`flex gap-6 ${isBoard ? "justify-between" : ""}`}>
        {teanMembers.map((card, index) => (
          <TeamCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
