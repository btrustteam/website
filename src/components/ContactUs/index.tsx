"use client";
import { useState } from "react";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import DynamicImage from "../DynamicImage";
import Input from "../inputs";
import Paragraph from "../Paragraph";
import SubHeading from "../SubHeading";

export default function ContactUs() {
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex pt-[6rem] pb-[5rem] justify-center items-center w-full">
      <div
        className="py-[4.6875rem] px-[1.5rem] lg:px-[6.4375rem] bg-contact-black bg-cover bg-center w-full flex flex-col lg:flex-row justify-between"
        style={{
          backgroundImage:
            "url('https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Patter-Long-7An9R5qDTCVrAsEFJyaaSLoHw2LRxW.svg')",
        }}
      >
        <div className="flex flex-col gap-4 w-full lg:w-[30.1875rem]">
          <div className="flex flex-col gap-4 w-full">
            <SubHeading
              text="Contact Us"
              className="!text-[1.5rem] lg:!text-[2.5rem]"
            />
            <Paragraph className="!text-[1.125rem] leading-[177.778%]">
              Want to make an inquiry or contact us? Fill the form below and we
              will get back to you shortly.
            </Paragraph>
          </div>
          <div className="w-full flex justify-center items-center object-cover">
            <DynamicImage
              src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20-72-snupEmtPDzls9ASZOO3rE9MQnc5HDL.JPG"
              alt="contact"
              className="w-[30.1875rem] rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-[41.0625rem]">
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
              onClick={() => {}}
              noIcon={true}
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
