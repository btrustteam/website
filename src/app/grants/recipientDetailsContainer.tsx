import DynamicImage from "@/components/DynamicImage";
import SocialLink from "@/components/links/socials";
import { useState } from "react";
import RecipientCardDetails from "./recipientCardDetails";

export interface RecipientDetails {
  name: string;
  image_src: string;
  github: string;
  twitter: string;
  bio: string;
  noBio?: boolean;
}
export default function RecipientsDetailsContainer({
  title,
  recipients,
}: {
  title: string;
  recipients: RecipientDetails[];
}) {
  return (
    <div className="flex flex-col w-full gap-6">
      <h3 className=" text-active-white font-poppins text-[1.75rem] font-bold">
        {title}
      </h3>
      <div className="flex w-full gap-6 flex-wrap">
        {recipients.map((recipient, index) => (
          <RecipientCardDetails key={index} {...recipient} />
        ))}
      </div>
    </div>
  );
}
