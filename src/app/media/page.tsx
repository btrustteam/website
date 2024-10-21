import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import { Metadata } from "next";
import MediaContainer from "./mediaContainer";

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
