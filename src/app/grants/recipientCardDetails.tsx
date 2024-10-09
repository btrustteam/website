"use client";
import SocialLink from "@/components/links/socials";
import React, { useEffect, useRef, useState } from "react";
import { RecipientDetails } from "./recipientDetailsContainer";
import { motion } from "framer-motion";

export default function RecipientCardDetails(recipient: RecipientDetails) {
  const [bioActive, setBioActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageHeight, setImageHeight] = useState(435);

  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const [bioHeight, setBioHeight] = useState<number>(0);

  useEffect(() => {
    const getBioHeight = () => {
      const bioParagraph = bioRef.current;
      if (bioParagraph) {
        // Measure the height, even when it's hidden
        bioParagraph.style.visibility = "hidden";
        bioParagraph.style.position = "absolute";
        bioParagraph.style.display = "block";

        const height = bioParagraph.offsetHeight;
        setBioHeight(height);

        bioParagraph.style.visibility = "";
        bioParagraph.style.position = "";
        bioParagraph.style.display = "";
      }
    };

    if (bioActive) {
      getBioHeight();
    }
  }, [bioActive]);

  const checkMobileScreen = () => {
    return window.matchMedia("(max-width: 768px)").matches;
  };

  useEffect(() => {
    setIsMobile(checkMobileScreen());

    const handleResize = () => {
      setIsMobile(checkMobileScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setImageHeight(400);
    }
  }, [isMobile]);

  return (
    <div
      className="flex pb-[1.5rem] flex-col gap-4 rounded-lg border border-black-5 backdrop-blur-[2px] w-full max-w-[24.9rem] lg:w-[24.9rem] h-[32.6875rem] lg:h-[35.4375rem] relative"
      onMouseLeave={() => setBioActive(false)}
    >
      <div className="flex justify-center items-center">
        <motion.img
          src={recipient.image_src}
          alt={recipient.name}
          className={`w-full object-cover rounded-t-lg`}
          animate={{
            height: bioActive ? imageHeight - bioHeight : imageHeight, // Adjust image height on hover
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <motion.div className="flex flex-col gap-4 py-0 px-[1.25rem] relative h-auto w-full">
        <h3 className="text-white-6 font-poppins text-[1.125rem] lg:text-[1.5rem] font-bold">
          {recipient.name}
        </h3>
        {!bioActive && (
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: bioActive ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <SocialLink url={recipient.github} icon={"github"} />
            <SocialLink url={recipient.linkedin} icon={"linkedin"} />
            {!recipient.noBio && (
              <button
                onClick={() => setBioActive(true)}
                className="border-none font-poppins leading-[200%] lg:leading-[177.778%] underline font-bold text-base lg:text-[1.125rem] text-black-2"
              >
                View Bio
              </button>
            )}
          </motion.div>
        )}
        {bioActive && (
          <motion.p
            ref={bioRef}
            className={`text-base font-poppins leading-[1.75rem] text-black-2 w-full`}
          >
            {recipient.bio}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
