import Image from "next/image";
import Paragraph from "../Paragraph";
import FooterHeading from "./footerHeading";
import FooterLink from "./footerLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex w-full pt-[6rem] pb-[2rem] px-[0.5rem] flex-col justify-center items-center gap-2 bg-[#222]">
      <div className="w-[77rem] flex flex-col items-end gap-[2.5rem]">
        <div className=" w-full flex gap-[8.0625rem]">
          <div className="flex flex-col gap-[1.5rem] w-[18.1875rem]">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={0}
              height={0}
              sizes={"100vl"}
              className="w-[8.88888rem] h-[3.75rem]"
            />
            <Paragraph className="w-[18.1875rem]">
              Locating, educating, and remunerating Bitcoin Open-Source
              Engineers in the Global South
            </Paragraph>
          </div>
          <div className="flex w-full gap-[1.5rem]">
            <div className="flex w-[11.5625rem] flex-col gap-[1.5rem]">
              <FooterHeading text="COMPANY" />
              <FooterLink
                links={[
                  { name: "About", url: "/about" },
                  { name: "Grant", url: "/grant" },
                  { name: "Blog", url: "/blog" },
                  { name: "Contact Us", url: "/contact" },
                ]}
              />
            </div>
            <div className="flex w-[11.5625rem] flex-col gap-[1.5rem]">
              <FooterHeading text="Builders" />
              <FooterLink
                links={[
                  { name: "Apply", url: "/builders/apply" },
                  { name: "Meet the builder", url: "/builders/meet" },
                ]}
              />
            </div>
            <div className="flex flex-col gap-[1.5rem] w-[23.1875rem]">
              <FooterHeading text="FOllow our activities" />
              <div className="flex gap-[1.5rem]">
                <div className="flex w-[11.625rem] flex-col gap-4">
                  <FooterHeading text="₿trust Builders" />
                  <FooterLink
                    links={[
                      { name: "X (Formerly Twitter)", url: "/" },
                      { name: "LinkedIn", url: "/" },
                    ]}
                  />
                </div>
                <div className="w-[11.5625rem] flex flex-col gap-4">
                  <FooterHeading text="₿trust" />
                  <FooterLink
                    links={[
                      { name: "X (Formerly Twitter)", url: "/" },
                      { name: "LinkedIn", url: "/" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-6 items-center">
          <div className="w-full h-[0.0625rem] bg-[#686868]"></div>
          <Paragraph className="text-text-white">
            © Btrust. {currentYear} All Rights Reserved.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
