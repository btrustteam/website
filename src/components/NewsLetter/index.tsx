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
    <div className="bg-bg-black py-[3.75rem] justify-center items-center flex w-full">
      <div
        className="py-[6.25rem] bg-bg-black bg-cover bg-center w-full"
        style={{
          backgroundImage:
            "url('https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Frame%207421-gEVirQcU8QPYOwRLRECqTAvPdmGmsn.png')",
        }}
      >
        <div className="flex justify-center items-center gap-[8rem]">
          <div className="flex flex-col justify-center items-start gap-4">
            <h2
              className={`w-[21.8125rem] text-[2.5rem] font-extrabold ${gilroyExtraBold.className} leading-[120%] text-active-white`}
            >
              Our Weekly Bitcoin Newsletter
            </h2>
            <Paragraph className="w-[24.6875rem]">
              Sign up for our weekly Bitcoin newsletter written for African
              developers. All signal, no noise.
            </Paragraph>
          </div>
          <div className="flex flex-col w-[44.3125rem] gap-[1.5rem]">
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
              <div className="flex w-full gap-4">
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
            <div className="flex items-start">
              <ButtonWithArrow
                noIcon={true}
                text="Sign Up for Free"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
