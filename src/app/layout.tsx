import Footer from "@/components/Footer";
import Gradient from "@/components/gradient";
import Nav from "@/components/nav";
import Pattern from "@/components/pattern";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Btrust",
  description:
    "We locate, educate and renumerate Bitcoin Open-Source Engineers in the Global South",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} container relative bg-bg-black`}>
        <Pattern />
        <Gradient />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
