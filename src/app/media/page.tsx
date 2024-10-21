import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import { Metadata } from "next";
import MediaContainer from "./mediaContainer";
import H4 from "./mediaHeader";
import Update from "./update";

export const metadata: Metadata = {
  title: "Media",
  description: "Btrust Updates",
  openGraph: {
    type: "website",
    title: "Media",
    description: "Btrust Updates",
    url: "https://www.btrust.tech/media",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/site-NzkG02zso9ZCRsswQ5hC1xFpgEp75r.png",
      },
    ],
  },
};

export default function Media() {
  return (
    <div className="flex flex-col">
      <MediaContainer />
      <ActivitiesNewsletter />
    </div>
  );
}
