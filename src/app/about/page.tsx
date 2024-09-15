import AboutHero from "@/components/AboutHero";
import MeetTheTeam from "@/components/MeetTeam";
import Principles from "@/components/Principles";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Principles />
      <MeetTheTeam />
    </div>
  );
}
