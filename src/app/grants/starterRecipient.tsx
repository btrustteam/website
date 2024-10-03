import RecipientsDetailsContainer from "./recipientDetailsContainer";

export default function StarterRecipients() {
  return (
    <div className="flex flex-col gap-20 lg:gap-14 mt-8">
      <RecipientsDetailsContainer
        title="Current Grant Recipients - Q3, 2024 "
        mobileTitle="Current Grant Recipients (Q3, 2024)"
        recipients={[
          {
            name: "Enigbe Ochekliye",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-jBTbGscnH4BTJiAZEw65Ban4bADAf1.png",
            github: "/",
            twitter: "/",
            bio: "With over two years of experience in backend engineering and extensive work on Bitcoin projects, including Galoy's Stablesats and Easepay's PSP, Enigbe focuses on contributing to the Lightning Development Kit’s rust-lightning through this grant. She also aims to improve the onboarding process for new contributors to the Bitcoin open-source ecosystem.",
          },
          {
            name: "Tobechi Chukwuleta",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-7lyzwEidWcaZTZ6jqwHtWiZ4a5WYcI.png",
            github: "/",
            twitter: "/",
            bio: "A seasoned backend developer with a background in data analysis, Tobechi has been instrumental in enhancing BTCPay Server’s functionality, particularly in its multisig capabilities and plugin development. He is using the Starter Grant to continue further advancements to BTCPay's store functionality and improve the platform's modularity.",
          },
          {
            name: "Kelvin Isievwore",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-RRk3ZIr4taSF3toNJ484tSYBtfl7I1.png",
            github: "/",
            twitter: "/",
            bio: "Currently contributing to Bitcoin open-source projects like Polar and LND, Kelvin's focus under the Starter Grant is optimizing local development environments for Bitcoin Lightning applications.  His work will streamline testing and development processes for engineers building on the Lightning Network.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Past Grant Recipients - Q1 & Q2, 2024"
        mobileTitle="Past Grant Recipients (Q1 & Q2, 2024)"
        recipients={[
          {
            name: "Abubakar Sadiq Ismail",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-eILzWXOirxxpQnb9uAYpEVPHU16RqX.png",
            github: "/",
            twitter: "/",
            bio: "",
            noBio: true,
          },
          {
            name: "Oghenovo Usiwoma",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-UnAmaKTZoLk6y06r2sRBYvKT6iJKOE.png",
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
