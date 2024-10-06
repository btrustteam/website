"use client";
import Image from "next/image";
import TeamCard, { TeamCardProps } from "./teamCard";
import { motion } from "framer-motion";
import { useState } from "react";

interface TeamProps {
  title: string;
  brief: string;
  isBoard: boolean;
  teamMembers: TeamCardProps[];
}
export default function TeamDetailsContainer({
  title,
  brief,
  teamMembers,
  isBoard,
}: TeamProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div
          className="flex w-full justify-between items-center gap-6 cursor-pointer"
          onClick={toggleOpen}
        >
          <h3 className="text-active-white font-poppins text-[1.5rem] font-bold ">
            {title}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            <Image src={"/caret.svg"} alt="caret" width={24} height={24} />
          </motion.div>
        </div>
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="text-black-2 font-poppins text-[1.125rem] leading-[177.778%] w-w-full lg:w-[41.75rem]"
        >
          {brief}
        </motion.p>
      </div>
      <div
        className={`flex flex-col items-center justify-center lg:flex-row gap-6 ${
          isBoard ? "lg:justify-between" : "lg:justify-start"
        }`}
      >
        {teamMembers.map((card, index) => (
          <TeamCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
