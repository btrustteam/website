"use client";
import BuildersData from "../../../builders_data/data.json";
import BuildersContainer from "./buildersContainer";

export interface Builder {
  id: number;
  image: string;
  name: string;
  role: string;
  background: string;
  why_bitcoin: string;
  learning_at_qala: string;
  github: string;
  linkedin: string;
  twitter: string;
  medium: string;
  projects: BuilderProject[];
  skills: string[];
  year: number;
}

interface BuilderProject {
  name: string;
  link: string;
}
export default function CurrentBuilders() {
  const years: { [key: string]: Builder[] } = {};
  for (let i = 0; i < BuildersData.length; i++) {
    const builder = BuildersData[i];
    if (!years[builder.year]) {
      years[builder.year] = [builder];
    } else {
      years[builder.year].push(builder);
    }
  }

  return (
    <div className="flex flex-col px-[1.5rem] lg:px-[6.5rem] mt-14">
      {Object.keys(years)
        .reverse()
        .map((year, index) => (
          <BuildersContainer key={index} year={year} builders={years[year]} />
        ))}
    </div>
  );
}
