import AboutHero from "@/components/AboutHero";
import ContactUs from "@/components/ContactUs";
import MeetTheTeam from "@/components/MeetTeam";
import Principles from "@/components/Principles";
import TeamProfile from "@/components/TeamProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "A Decentralised Future for Bitcoin Software Development",
  openGraph: {
    type: "website",
    title: "About us",
    description: "A Decentralised Future for Bitcoin Software Development",
    url: "https://www.btrust.tech/about",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2022%20(3)-6To97OR5GO9mgtyjDyQcXgtNnAQwBb.png",
      },
    ],
  },
};

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
