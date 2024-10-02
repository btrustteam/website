import Paragraph from "../Paragraph";
import { gilroyExtraBold } from "@/app/fonts/gilroy";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import Input from "../inputs";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  return (
    <div className="bg-bg-black py-[3.5rem] lg:py-[3.75rem] justify-center items-center flex w-full">
      <div
        className="py-[6.25rem] bg-bg-black bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "url('https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Frame%207421-jQpRYuCqR5cI3cfOwWKdSf2mDfugKi.png')",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-[8rem] w-full px-6 lg:px-0">
          <div className="flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4">
            <h2
              className={`w-full lg:w-[21.8125rem] text-center lg:text-left text-[1.5rem] lg:text-[2.5rem] font-extrabold ${gilroyExtraBold.className} leading-[120%] text-active-white`}
            >
              Our Weekly Bitcoin Newsletter
            </h2>
            <Paragraph className="w-full lg:w-[24.6875rem] text-center lg:text-left">
              Sign up for our weekly Bitcoin newsletter written for African
              developers. All signal, no noise.
            </Paragraph>
          </div>
          <div className="flex flex-col w-full lg:w-[44.3125rem] gap-[1.5rem]">
            <div className="flex w-full flex-col gap-[0.75rem]">
              <div className="flex justify-center items-center">
                <Input
                  type="email"
                  iconName="message"
                  placeholder="Enter your email address"
                  value={email}
                  setValue={setEmail}
                  label="Email Address *"
                />
              </div>
              <div className="flex flex-col lg:flex-row w-full gap-3 lg:gap-4">
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
            </div>
            <div className="flex w-full items-start">
              <ButtonWithArrow
                noIcon={true}
                text="Sign Up for Free"
                onClick={() => {}}
                className="w-full lg:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
