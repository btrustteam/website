import { Metadata } from "next";
import MainGrant from "./mainGrant";

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
        url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-103-UDt5Jos2fBnxEZptEr3WdJEew6d635.JPG",
      },
    ],
  },
};

export default function Grants() {
  return <MainGrant />
}
