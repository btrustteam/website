import RecipientsDetailsContainer from "./recipientDetailsContainer";

export default function StarterRecipients() {
  return (
    <div className="flex flex-col gap-20 lg:gap-14 mt-8">
      <RecipientsDetailsContainer
        title="Current Grant Recipients - Q1, 2025"
        mobileTitle="Current Grant Recipients (Q1, 2025)"
        recipients={[
          {
            name: "Itoro Ukpong",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/builders-headshots/Itoro%20Ukpong-hbd9qQVHVz98yzbX1FlVqJX2hmxHOu.jpg",
            github: "https://github.com/ItoroD",
            linkedin:
              "https://www.linkedin.com/in/itoro-ukpong-43917b177/",
            bio: "Itoro is a Btrust Builders cohort 3 alumnus, and has demonstrated outstanding contributions to Bitcoin’s open-source projects. His work on bitcoinj and BDK is making Bitcoin wallet development more accessible across several programming languages. Itoro is also an organizer for Bit Devs Accra, helping more developers get started with Bitcoin development.",
          },
          {
            name: "Brandon Odiwuor",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/b07f95ff-c5b2-4d9c-9c97-2497775334c1%20-%20Brandon%20Odiwuor-0mqggQL2ANUFTJbaMQjlkvEmo7ZKZr.JPG",
            github: "https://github.com/BrandonOdiwuor",
            linkedin:
              "https://www.linkedin.com/in/brandonodiwuor/",
            bio: "Brandon has been actively contributing to Bitcoin core, focusing on improving its testing infrastructure, build system, and developer tooling. Beyond his technical work, Brandon is driving Bitcoin education through BitDevs Nairobi, helping onboard new contributors into the ecosystem.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Current Grant Recipients - Q4, 2024"
        mobileTitle="Current Grant Recipients (Q4, 2024)"
        recipients={[
          {
            name: "Abdullahi Yunus",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/builders-headshots/Abdullahi%20Yunus-A1RvSPh1dDS8Q8XesPqOO3oZ4BKhfj.jpg",
            github: "https://github.com/Abdulkbk",
            linkedin:
              "https://www.linkedin.com/in/abdulkbk/",
            bio: "Abdullahi is a Btrust Builders cohort 3 alumnus, and has demonstrated outstanding contributions to Bitcoin’s open-source projects. His work on LND has enhanced node reliability and user experience, while his improvements to Lightning Polar simplify developer workflows. With a strong focus on Bitcoin education, Abdullahi also mentors aspiring developers, making the ecosystem more accessible.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Past Grant Recipients - Q3, 2024"
        mobileTitle="Past Grant Recipients (Q3, 2024)"
        recipients={[
          {
            name: "Enigbe Ochekliye",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-jBTbGscnH4BTJiAZEw65Ban4bADAf1.png",
            github: "https://github.com/enigbe",
            linkedin:
              "https://www.linkedin.com/in/enigbe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            bio: "With over two years of experience in backend engineering and extensive work on Bitcoin projects, including Galoy's Stablesats and Easepay's PSP, Enigbe focuses on contributing to the Lightning Development Kit’s rust-lightning through this grant. She also aims to improve the onboarding process for new contributors to the Bitcoin open-source ecosystem.",
          },
          {
            name: "Tobechi Chukwuleta",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-7lyzwEidWcaZTZ6jqwHtWiZ4a5WYcI.png",
            github: "https://github.com/TChukwuleta",
            linkedin: "https://www.linkedin.com/in/tobechichukwuleta/",
            bio: "A seasoned backend developer with a background in data analysis, Tobechi has been instrumental in enhancing BTCPay Server’s functionality, particularly in its multisig capabilities and plugin development. He is using the Starter Grant to continue further advancements to BTCPay's store functionality and improve the platform's modularity.",
          },
          {
            name: "Kelvin Isievwore",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-RRk3ZIr4taSF3toNJ484tSYBtfl7I1.png",
            github: "https://github.com/kelvinator07",
            linkedin: "https://www.linkedin.com/in/kelvinobukome/",
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
            github: "https://github.com/ismaelsadeeq",
            linkedin: "https://www.linkedin.com/in/abubakharismail/ ",
            bio: "",
            noBio: true,
          },
          {
            name: "Oghenovo Usiwoma",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-UnAmaKTZoLk6y06r2sRBYvKT6iJKOE.png",
            github: "https://github.com/eunovo",
            linkedin: "https://linkedin.com/in/eunovo",
            bio: "",
            noBio: true,
          },
        ]}
      />
    </div>
  );
}
