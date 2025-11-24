import RecipientsDetailsContainer from "./recipientDetailsContainer";

export default function OpenSourceRecipient() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <RecipientsDetailsContainer
        mobileTitle="Current Members"
        title="Current Members"
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
            name: "Enigbe Ochekliye",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-jBTbGscnH4BTJiAZEw65Ban4bADAf1.png",
            github: "https://github.com/enigbe",
            linkedin:
              "https://www.linkedin.com/in/enigbe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            bio: "Enigbe has made impactful contributions to the LDK Node, including critical enhancements to API customization and logging systems. Her passion for education has led to the development of a Rust-based programming guide for Bitcoin, designed to onboard new developers. As part of the Btrust Open-Source Cohort, Enigbe will continue her contributions to LDK while expanding Bitcoin education initiatives through workshops and technical writing.",
          },
          {
            name: "Tobechi Chukwuleta",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-7lyzwEidWcaZTZ6jqwHtWiZ4a5WYcI.png",
            github: "https://github.com/TChukwuleta",
            linkedin: "https://www.linkedin.com/in/tobechichukwuleta/",
            bio: "Tobechi’s work has been pivotal in advancing BTCPay Server, including the development of plugins such as the BigCommerce Plugin and an updated Shopify Plugin to adapt to platform changes. As a community builder, Tobechi also co-leads BitDevs Lagos, fostering collaboration and growth among Bitcoin developers in Nigeria. As a cohort member, Tobechi will enhance BTCPay’s plugin ecosystem and lead the development of a robust plugin builder for the platform.",
          },
          {
            name: "Abubakar Sadiq Ismail",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-eILzWXOirxxpQnb9uAYpEVPHU16RqX.png",
            github: "https://github.com/ismaelsadeeq",
            linkedin: "https://www.linkedin.com/in/abubakharismail/",
            bio: "Sadiq Ismail is a Nigerian Bitcoin Core contributor who is actively involved in optimizing the Bitcoin protocol. He works on critical areas of Bitcoin Core such as improving fee estimation accuracy on Bitcoin core, reviewing and testing PR's.Sadiq Ismail’s work on Mempool fee estimation analysis showcases his technical abilities, which helps to reduce overpaid fee estimates,  and node users sovereignty. While a part of the cohort, he will continue this work, as he refines his abilities to contribute to the Bitcoin ecosystem.",
          },
          {
            name: "Oghenovo Usiwoma",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/image-UnAmaKTZoLk6y06r2sRBYvKT6iJKOE.png",
            github: "https://github.com/eunovo",
            linkedin: "https://linkedin.com/in/eunovo",
            bio: "A talented engineer based in Nigeria, Oghenovo has been actively contributing to Bitcoin Core and other Bitcoin projects since completing the Btrust Builders 2023 cohort. His recent work under the ₿trust Starter Grant focused on advancing Silent Payments functionality in Bitcoin Core. As part of the ₿trust Open-Source Cohort, he is working on introducing new key formats and descriptors for Silent Payments in Bitcoin Core, continuing his critical work in enhancing the scalability and privacy features of the Bitcoin protocol.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Past Members"
        mobileTitle="Past Members"
        recipients={[
          {
            name: "Duncan Dean",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-Kof8ILgzYWa4w2jXkUV7RaOUHStcfM.png",
            github: "https://github.com/dunxen",
            linkedin: "https://twitter.com/dunxen",
            bio: "A Lightning contributor from South Africa, Duncan is deeply involved in Lightning Network development, particularly focusing on the highly modular Bitcoin Lightning library, Rust-lightning. Duncan's work is further enriched by his active participation in other projects like ldk-review-club and lndk, where he has contributed to improving continuous integration (CI) actions and maintaining the robustness of the codebase. Through the cohort, Duncan aims to strengthen his contributions to the Bitcoin and Lightning open-source ecosystem.",
          },
          {
            name: "Vladimir Fomene",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-vVpeBtzWoJALiM5rV08eH0RrE7vuBq.png",
            github: "https://github.com/vladimirfomene",
            linkedin:
              "https://www.linkedin.com/in/vladimirfomene?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            bio: "I’m a seasoned software engineer with a strong technical background in computer science. As a full-stack developer, I have experience working with JavaScript, Rust, and Python. My passion for building on Bitcoin's technology drives my work, and I’m constantly seeking ways to contribute to its growth and development.",
          },
        ]}
      />
    </div>
  );
}
