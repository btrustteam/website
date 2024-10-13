"use client";
import Footer from "@/components/Footer";
import Gradient from "@/components/gradient";
import Nav from "@/components/nav";
import Pattern from "@/components/pattern";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileActive, setMobileActive] = useState(false);

  // Apply or remove the no-scroll class based on mobileActive
  useEffect(() => {
    if (mobileActive) {
      document.querySelector("body")?.classList.add("no-scroll");
    } else {
      document.querySelector("body")?.classList.remove("no-scroll");
    }
  }, [mobileActive]);

  function handleToggle() {
    setMobileActive((prev) => !prev);
  }

  const closeNav = () => {
    setMobileActive(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} container relative bg-bg-black`}>
        <Toaster position="top-center" />
        <Pattern />
        <Gradient />
        <Nav
          mobileActive={mobileActive}
          handleToggle={handleToggle}
          closeNav={closeNav}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
