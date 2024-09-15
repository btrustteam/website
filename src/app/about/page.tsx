import AboutHero from "@/components/AboutHero";
import ContactUs from "@/components/ContactUs";
import MeetTheTeam from "@/components/MeetTeam";
import Principles from "@/components/Principles";
import TeamProfile from "@/components/TeamProfile";

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <Principles />
      <MeetTheTeam />
      <TeamProfile />
      <ContactUs />
    </div>
  );
}
