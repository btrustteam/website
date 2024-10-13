import { Metadata } from "next";
import GrantContainer from "./grantContainer";

export const metadata: Metadata = {
  title: "Grants",
  description: "Get funding to work on Free and Open-Source Bitcoin projects",
  openGraph: {
    type: "website",
    title: "Grants",
    description: "Get funding to work on Free and Open-Source Bitcoin projects",
    url: "https://www.btrust.tech/grants",
    images: [
      {
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-brrzAlRT8KT2clTDRTKjrimxmY3RTC.png",
      },
    ],
  },
};

export default function Grants() {
  return <GrantContainer />;
}
