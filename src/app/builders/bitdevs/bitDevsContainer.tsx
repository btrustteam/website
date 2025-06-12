import EducationEventCard from "../../grants/educationEventCard";

export default function AllBitDevs() {
    const bitDevs = [
        {
            title: "BitDevs Abuja",
            details: [
                "BitDevsAbuja is a community in Abuja, Nigeria, for those interested in discussing and participating in the research and development of Bitcoin and related protocols and software.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/bitdevs-accra-jTBPbFCwWOdWJpG3Q40TvJ0iru2mCP.png",
            link: "https://bitdevsabuja.org/",
        },
        {
          title: "BitDevs Cotonou",
          details: [
              "BitDevs Cotonou is a community in Cotonou, Benin, for those interested in discussing and participating in the research and development of Bitcoin and related protocols in Cotonou.",
          ],
          imageSrc:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/bitdevs-accra-jTBPbFCwWOdWJpG3Q40TvJ0iru2mCP.png",
          link: "https://bitdevscotonou.org/",
      },
        {
            title: "BitDevs Nairobi",
            details: [
                "BitDevsNBO is a meetup devoted to the research and development of Bitcoin.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/bitdevs-accra-jTBPbFCwWOdWJpG3Q40TvJ0iru2mCP.png",
            link: "https://bitdevsnbo.org/",
        },
        
    ];
    return (
        <div className="pt-[4.5rem] lg:pt-[8rem] lg:pb-0 px-6 lg:px-[6.5rem]">
            {bitDevs.map((bitDev, index) => (
                <EducationEventCard key={index} {...bitDev} />
            ))}
        </div>
    );
}
