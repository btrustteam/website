import RecipientsDetailsContainer from "./recipientDetailsContainer";

export default function StarterRecipients() {
  return (
    <div className="flex flex-col gap-20 lg:gap-14 mt-8">

      <RecipientsDetailsContainer
        title="Current Starter Grant Recipients - 2026"
        mobileTitle="Current Starter Grant Recipients (2026)"
        recipients={[
          {
            name: "Simon Njeru",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Simon.jpg",
            github: "https://github.com/xyephy",
            linkedin: "",
            bio: "Simon is the co‑founder of BitDevs Nairobi, a Btrust Builders faculty member, and a committed Bitcoin educator who has facilitated developer bootcamps both within and outside Kenya, helping nurture the next generation of open‑source contributors. His work lies at the intersection of Bitcoin Core internals and mining decentralizatio via contributions to sv2‑tp (Stratum V2 Template Provider) and sv2‑apps, the reference implementation of Stratum V2.",
          },
          {
            name: "Ifeanyichukwu Amajuoyi",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/ifeanyichukwu.jpeg",
            github: "https://github.com/Anyitechs",
            linkedin: "https://www.linkedin.com/in/ifeanyichukwu-amajuoyi-8b6229153/",
            bio: "Ifeanyichukwu is a graduate of the 2024 Btrust Builders fellowship, he has since become a consistent open‑source contributor within the Lightning Development Kit (LDK) ecosystem, making meaningful contributions across rust‑lightning, ldk‑node, and ldk‑server.",
          },
          {
            name: "Mohamed Emad",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/mohamed.jpeg",
            github: "https://github.com/hulxv",
            linkedin: "https://www.linkedin.com/in/hulxv",
            bio: "Mohamed is a 2nd-year Computer Engineering student at Zagazig University with a focus on systems programming and low-level systems. He spends his time building innovative projects and contributing to major open-source projects such as the LLVM project. He also has extensive experience with Rust and have built several projects with it.",
          },
          {
            name: "Shammah Agwor",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Shammah.JPG",
            github: "https://github.com/zealsham",
            linkedin: "https://www.linkedin.com/in/zealsham/",
            bio: "Shammah have been a software engineer since 2017, with a strong focus on backend systems, security engineering, and Bitcoin open-source development. His journey began at Accelera (Feb–Nov 2017), where he built out the web presence of the company on linode and an employee management platform using Node.js. He also handled security responsibilities for internal applications.",
          },
          {
            name: "Abiodun Awoyemi",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Abiodun.jpg",
            github: "https://github.com/aagbotemi",
            linkedin: "https://www.linkedin.com/in/abiodun-awoyemi-1ab8b3165/",
            bio: "Abiodun is a software engineer with 5 years of experience building and scaling systems in finance, real estate, and blockchain. He has worked across the stacks, from frontend (ReactJS, Next.js) to backend services powering real-time transactions.",
          },
          {
            name: "Ojok Emmanuel Nsubuga",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Ojok%20Emmanuel%20Nsubuga.jpg",
            github: "https://github.com/ojokne",
            linkedin: "https://www.linkedin.com/in/ojok-emmanuel-nsubuga-144541247/",
            bio: "Emmanuel is a software engineer with 2.5+ years of experience building web and mobile applications using JavaScript, TypeScript, React, React Native and Nodejs.",
          },
          {
            name: "Rita Anene",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rita_Anene_Headshot.jpeg",
            github: "https://github.com/Camillarhi",
            linkedin: "https://www.linkedin.com/in/rita-anene-13a28b14b",
            bio: "Rita is a software developer with over 3 years of experience building and improving software solutions.",
          },
          {
            name: "Chuks Agbakuru",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/chuks.jpeg",
            github: "https://www.github.com/chuksys",
            linkedin: "https://www.linkedin.com/in/chuks-agbakuru/",
            bio: "Chuks is a software engineer with over 8 years of experience in building and maintaining software solutions. His career started with a focus on developing web solutions for start-ups, where he gained foundational expertise in PHP and JavaScript.",
          },
          {
            name: "Jamal Errakibi",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Jamal%20ERRAKIBI-O6XJ86b5zvvvvkz38lkQCozQu7TUJ9.JPG",
            github: "https://github.com/jrakibi",
            linkedin: "https://www.linkedin.com/in/jamal-e-118069130/",
            bio: "Jamal is an accomplished software engineer and a 2024 Btrust Builders fellow, and Bitcoin open-source contributor. With seven years of professional experience, Jamal has developed deep expertise in Java development and AWS cloud services. In recent years, he has transitioned his focus to Bitcoin, making significant contributions as an independent contractor for Chaincode Labs and, most notably, as an active contributor to the rust-bitcoin project.",
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
        title="Past Starter Grant Recipients - 2025"
        mobileTitle="Past Starter Grant Recipients (2025)"
        recipients={[
          {
            name: "Itoro Ukpong",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/builders-headshots/Itoro%20Ukpong-hbd9qQVHVz98yzbX1FlVqJX2hmxHOu.jpg",
            github: "https://github.com/ItoroD",
            linkedin:
              "https://www.linkedin.com/in/itoro-ukpong-43917b177/",
            bio: "",
            noBio: true,          
          },
          {
            name: "Abdullahi Yunus",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/builders-headshots/Abdullahi%20Yunus-A1RvSPh1dDS8Q8XesPqOO3oZ4BKhfj.jpg",
            github: "https://github.com/Abdulkbk",
            linkedin:
              "https://www.linkedin.com/in/abdulkbk/",
            bio: "Abdullahi is a Btrust Builders cohort 3 alumnus, and has demonstrated outstanding contributions to Bitcoin’s open-source projects. His work on LND has enhanced node reliability and user experience, while his improvements to Lightning Polar simplify developer workflows. With a strong focus on Bitcoin education, Abdullahi also mentors aspiring developers, making the ecosystem more accessible.",
          },
          {
            name: "Sulaiman Aminu Barkindo",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Sulaiman%20Aminu%20Barkindo-F7TRI6oTS2fyG55P4w4tmqJp2cxfig.jpg",
            github: "https://github.com/SulaimanAminuBarkindo",
            linkedin: "https://www.linkedin.com/in/sulaiman-aminu-barkindo",
            bio: "Sulaiman is a seasoned software engineer and Engineering Manager based in Nigeria, and a Btrust Builders 2024 fellow. With over four years of experience in backend and full-stack engineering, Sulaiman has become an integral contributor to the Validating Lightning Signer (VLS) project, a Rust-based initiative focused on enhancing security and self-custody in the Bitcoin Lightning Network.",
          },
          {
            name: "Peter Tyonum",
            image_src: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Peter%20Tyonum-RHakLsv8qmdFtHQggGjiGImZnvjzE7.JPG",
            github: "https://github.com/tvpeter",
            linkedin: "https://www.linkedin.com/in/peter-tyonum-a8a16310b/",
            bio: "Peter is a skilled software engineer based in Nigeria and a fellow of the Qala (now Btrust Builders) genesis cohort. With over five years of experience working with JavaScript, PHP, and Rust, Peter has made extensive contributions to the Bitcoin Dev Kit (BDK) ecosystem, developing features for bdk-cli, enhancing wallet APIs, improving documentation, and actively reviewing and testing code to raise the quality and reliability of BDK libraries.",
          },
        ]}
      />

      <RecipientsDetailsContainer
        title="Past Starter Grant Recipients - 2024"
        mobileTitle="Past Starter Grant Recipients (2024)"
        recipients={[
          {
            name: "Enigbe Ochekliye",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-jBTbGscnH4BTJiAZEw65Ban4bADAf1.png",
            github: "https://github.com/enigbe",
            linkedin:
              "https://www.linkedin.com/in/enigbe?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            bio: "",
            noBio: true,          },
          {
            name: "Tobechi Chukwuleta",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-7lyzwEidWcaZTZ6jqwHtWiZ4a5WYcI.png",
            github: "https://github.com/TChukwuleta",
            linkedin: "https://www.linkedin.com/in/tobechichukwuleta/",
            bio: "",
            noBio: true,          },
          {
            name: "Kelvin Isievwore",
            image_src:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2020-RRk3ZIr4taSF3toNJ484tSYBtfl7I1.png",
            github: "https://github.com/kelvinator07",
            linkedin: "https://www.linkedin.com/in/kelvinobukome/",
            bio: "",
            noBio: true,          },
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
