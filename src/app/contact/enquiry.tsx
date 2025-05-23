"use client";
import { useState } from "react";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import DynamicImage from "@/components/DynamicImage";
import Input from "@/components/inputs";
import Paragraph from "@/components/Paragraph";
import SocialContainer from "./socialContainer";
import SectionHeader from "@/components/sectionHeader";
import { validateEmail } from "@/lib/validateEmail";
import toast from "react-hot-toast";

export default function Enquiry() {
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleContactUs() {
    setIsLoading(true);
    try {
      if (!validateEmail(email)) {
        toast.error("Please provide a valid email address");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: `${firstname} ${lastname}`,
          message,
          company,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setEmail("");
        setFirstname("");
        setLastname("");
        setCompany("");
        setMessage("");
      } else {
        toast.error(`${data.error}`);
      }
    } catch (error) {
      console.error("Request failed", error);
      toast.error("An error occured, please try again later");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex pt-[4rem] lg:pt-[6rem] pb-[4rem] lg:pb-[5rem] justify-center items-center w-full">
      <div
        className="py-[4.6875rem] px-[1.5rem] lg:px-[6.4375rem] bg-contact-black bg-cover bg-center w-full flex flex-col lg:flex-row justify-between gap-[6rem]"
        style={{
          backgroundImage:
            "url('https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Patter-Long-afr8ix8wgqX6lysdwU7x9JwzUMDKPR.svg')",
        }}
      >
        <div className="flex flex-col w-full lg:w-[33.5625rem] p-5 lg:p-8 gap-6 bg-[#222]">
          <div className="flex gap-4 w-full items-start">
            <div className="flex items-center justify-center">
              <DynamicImage
                src="/enquiry.svg"
                className="h-[2rem] w-[2rem]"
                alt="enquiry"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h4 className="font-poppins font-semibold text-[1.125rem] text-active-white leading-[normal]">
                  Chat with us
                </h4>
                <p className="font-poppins text-[1.125rem] text-black-2 leading-[177.778%]">
                  Our friendly team is here to help
                </p>
              </div>
              <p className="font-poppins font-medium text-[1.125rem] text-active-white leading-[177.778%]">
                info@btrust.tech
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 ml-12">
            <Paragraph className="!text-[1.125rem] !leading-[177.778%]">
              Follow and reach out to us on our social media platforms
            </Paragraph>
            <div className="flex gap-8 lg:gap-16">
              <SocialContainer
                heading="Btrust"
                socials={[
                  { icon: "twitter", link: "https://x.com/btrustteam" },
                  {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/company/btrustteam",
                  },
                  {
                    icon: "youtube",
                    link: "https://www.youtube.com/@btrust_tech",
                  },
                  {
                    icon: "nostr",
                    link: "https://primal.net/p/npub133yvyku5munsddczjqwz4w6aspwz93z22jmlzgw8xur7qu0368vq7urapg",
                  },
                ]}
              />
            </div>
            <div className="mt-8 flex gap-8 lg:gap-16">
              <SocialContainer
                heading="Btrust Builders"
                socials={[
                  { icon: "twitter", link: "https://x.com/btrust_builders" },
                  {
                    icon: "linkedin",
                    link: "https://www.linkedin.com/company/btrust-builders",
                  },
                  {
                    icon: "youtube",
                    link: "https://www.youtube.com/@btrust_tech",
                  },
                  {
                    icon: "nostr",
                    link: "https://primal.net/p/npub1353snusdats4lpgwel4frhlmm05w6md2u89gss0dcdzamlhm2yas25gajp",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-[41.0625rem]">
          <div className="flex flex-col">
            <SectionHeader
              text="Enquiry Form"
              className="!text-[1.5rem] lg:!text-[1.75rem] font-semibold"
            />
            <Paragraph className="!text-base lg:!text-[1.125rem] !leading-[200%] lg:!leading-[177.778%]">
              Want to make an inquiry or contact us?  Fill the form below and we
              will get back to you shortly.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex items-center justify-center w-full">
              <Input
                label="Email Address *"
                value={email}
                setValue={setEmail}
                iconName={"message"}
                placeholder={"Enter your email address"}
                type={"email"}
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-6">
              <Input
                type="text"
                iconName="user"
                placeholder="Enter your first name"
                value={firstname}
                setValue={setFirstname}
                label="First Name *"
              />
              <Input
                type="text"
                iconName="user"
                placeholder="Enter your last name"
                value={lastname}
                setValue={setLastname}
                label="Last Name *"
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <Input
                label="Company/Organization *"
                value={company}
                setValue={setCompany}
                iconName={"company"}
                placeholder={"Enter the name of your company/organization"}
                type={"text"}
              />
            </div>
            <div className="">
              <Input
                label="Message *"
                value={message}
                setValue={setMessage}
                iconName={"message"}
                placeholder={"Enter your message"}
                type={"text"}
                isTextArea={true}
              />
            </div>
          </div>
          <div>
            <ButtonWithArrow
              text="Submit"
              onClick={handleContactUs}
              noIcon={true}
              className="w-full lg:w-auto"
              disabled={
                !firstname ||
                !lastname ||
                !email ||
                !company ||
                !message ||
                isLoading
              }
              loading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
