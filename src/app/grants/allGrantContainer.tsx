import UniversalGrantOverview from "./universalGrantOverview";

export default function AllGrants() {
  const grants = [
    {
      title: "Developer Grants",
      imageSrc:
        "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/2-CHXA0cTk2sJ1KVYdZOvPMWXueFfZO9.png",
      details: [
        " Btrust Developer Grants provide funding and support for open-source Bitcoin developers working to improve the Bitcoin ecosystem. We support developers working on Bitcoin protocol improvements, Layer 2 solutions, security enhancements, and other critical open-source projects.",
        "Whether you're an experienced contributor or just starting your Bitcoin development journey, our grants offer the resources, mentorship, and community support needed to make a meaningful impact.",
      ],
      section: "developer",
      isReverse: true,
    },
    {
      title: "Education Grants",
      imageSrc:
        "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/3-xcgTNTEMQWZfakMIttDJERMjDOrSu5.png",
      details: [
        "Bitcoin education is essential for a thriving open-source ecosystem. Our Education Grants support initiatives that train developers, fund research, and make Bitcoin knowledge more accessible; whether through developer programs, language translation, or research studies. By reducing barriers to learning, we empower more people in Africa and the Global South to engage with Bitcoin development.",
      ],
      section: "education",
      isReverse: false,
    },
    {
      title: "Event and Conference Grants",
      imageSrc:
        "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/4-x2FH0Z64tiUri5hfNfTpaC3D1SzUoN.png",
      details: [
        "Bitcoin grows through collaboration and knowledge-sharing. Our Event and Conference Grants support Bitcoin-only conferences, meetups, and workshops that help onboard and connect developers to the open-source ecosystem. We fund grassroots gatherings, bootcamps, and developer-focused events that create hands-on learning opportunities and strengthen Bitcoin’s global developer community.",
      ],
      section: "event",
      isReverse: true,
    },
  ];
  return (
    <div className="pt-[4.5rem] lg:pt-[8rem] lg:pb-0 px-6 lg:px-[6.5rem]">
      {grants.map((grant, index) => (
        <UniversalGrantOverview {...grant} />
      ))}
    </div>
  );
}
