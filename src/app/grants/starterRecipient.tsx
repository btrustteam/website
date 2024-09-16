import LittleHeading from "@/components/LittleHeading";
import Image from "next/image";
import GrantsHeader from "./grantsHeading";
import RecipientsDetailsContainer from "./recipientDetailsContainer";

export default function StarterRecipients() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <RecipientsDetailsContainer
        title="Current Grant Recipients - Q3, 2024 "
        recipients={[
          {
            name: "Enigbe Ochekliye",
            image_src:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020-avWH833z2gkaKrKCVcfrnrZXzhnjSJ.png",
            github: "/",
            twitter: "/",
            bio: "With over two years of experience in backend engineering and extensive work on Bitcoin projects, including Galoy's Stablesats and Easepay's PSP, Enigbe focuses on contributing to the Lightning Development Kit’s rust-lightning through this grant. She also aims to improve the onboarding process for new contributors to the Bitcoin open-source ecosystem.",
          },
          {
            name: "Tobechi Chukwuleta",
            image_src:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020-QAPhnEl5uxj5ydxMjqUj5I9qC5SAoN.png",
            github: "/",
            twitter: "/",
            bio: "A seasoned backend developer with a background in data analysis, Tobechi has been instrumental in enhancing BTCPay Server’s functionality, particularly in its multisig capabilities and plugin development. He is using the Starter Grant to continue further advancements to BTCPay's store functionality and improve the platform's modularity.",
          },
          {
            name: "Kelvin Isievwore",
            image_src:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020-WCtPg5dlWfiaufIv0J4ouOLUUh7MPG.png",
            github: "/",
            twitter: "/",
            bio: "Currently contributing to Bitcoin open-source projects like Polar and LND, Kelvin's focus under the Starter Grant is optimizing local development environments for Bitcoin Lightning applications.  His work will streamline testing and development processes for engineers building on the Lightning Network.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Past Grant Recipients - Q1 & Q2, 2024"
        recipients={[
          {
            name: "Abubakar Sadiq Ismail",
            image_src:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image-7Olo3AvxzmhD7pxy3UVT6Fs6SjEAyP.png",
            github: "/",
            twitter: "/",
            bio: "",
            noBio: true,
          },
          {
            name: "Oghenovo Usiwoma",
            image_src:
              "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image-KNDgonStQhxrCbGalynD3G0yQQIplB.png",
            github: "/",
            twitter: "/",
            bio: "",
            noBio: true,
          },
        ]}
      />
    </div>
  );
}
