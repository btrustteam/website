import Image from "next/image";
import Paragraph from "../Paragraph";
import FooterHeading from "./footerHeading";
import FooterLink from "./footerLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex w-full pb-[4rem] pt-[4rem] lg:pt-[6rem] lg:pb-[2rem] px-[1.5rem] lg:px-[0.5rem] flex-col lg:justify-center lg:items-center gap-2 bg-[#222]">
      <div className="w-full lg:w-[77rem] flex flex-col items-end gap-[2.5rem]">
        <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-[8.0625rem]">
          <div className="flex flex-col gap-2 lg:gap-[1.5rem] w-full lg:w-[18.1875rem]">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={0}
              height={0}
              sizes={"100vl"}
              className="w-[7.125rem] h-[3rem] lg:w-[8.88888rem] lg:h-[3.75rem]"
            />
            <Paragraph className="w-full lg:w-[18.1875rem] !text-[0.875rem] lg:text-base">
              Locating, educating, and remunerating Bitcoin Open-Source
              Engineers in the Global South
            </Paragraph>
          </div>
          <div className="flex flex-col lg:flex-row w-full gap-[2.5rem] lg:gap-[1.5rem]">
            <div className="flex gap-[1.5rem]">
              <div className="flex w-[11.5625rem] flex-col gap-[1.5rem]">
                <FooterHeading text="COMPANY" />
                <FooterLink
                  links={[
                    { name: "About", url: "/about", new_tab: false },
                    { name: "Grants", url: "/grants", new_tab: false },
                    {
                      name: "Blog",
                      url: "https://blog.btrust.tech",
                      new_tab: true,
                    },
                    { name: "Contact Us", url: "/contact", new_tab: false },
                  ]}
                />
              </div>
              <div className="flex w-[11.5625rem] flex-col gap-[1.5rem]">
                <FooterHeading text="Builders" />
                <FooterLink
                  links={[
                    { name: "Apply", url: "/builders/apply", new_tab: false },
                    {
                      name: "Meet The Builders",
                      url: "/builders/meet-builders",
                      new_tab: false,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[1.5rem] w-full lg:w-[23.1875rem]">
              <FooterHeading text="Follow our activities" />
              <div className="flex gap-[1.5rem]">
                <div className="w-[11.5625rem] flex flex-col gap-4">
                  <FooterHeading text="Btrust" />
                  <FooterLink
                    links={[
                      {
                        name: "X (Formerly Twitter)",
                        url: "https://x.com/btrustteam",
                        new_tab: true,
                      },
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com/company/btrustteam",
                        new_tab: true,
                      },
                      {
                        name: "YouTube",
                        url: "https://www.youtube.com/@btrust_tech",
                        new_tab: true,
                      },
                    ]}
                  />
                </div>
                <div className="flex w-[11.625rem] flex-col gap-4">
                  <FooterHeading text="Btrust Builders" />
                  <FooterLink
                    links={[
                      {
                        name: "X (Formerly Twitter)",
                        url: "https://x.com/btrust_builders",
                        new_tab: true,
                      },
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com/company/btrust-builders",
                        new_tab: true,
                      },
                      {
                        name: "YouTube",
                        url: "https://www.youtube.com/@btrust_tech",
                        new_tab: true,
                      },
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
