import BitDevsCard from "./bitDevsCard";

export default function AllBitDevs() {
    const bitDevs = [
        {
            title: "BitDevs Abuja",
            details: [
                "BitDevsAbuja is a community in Abuja, Nigeria, for those interested in discussing and participating in the research and development of Bitcoin and related protocols and software.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/abuja-BqbNZPBt6H8NI3mgOgReZGA50sZPSE.jpg",
            website: "https://bitdevsabuja.org/",
            xlink: "https://x.com/BitDevsAbuja",
        },
        {
            title: "BitDevs Accra",
            details: [
                "BitDevsAccra is a community in Ghana for those interested in discussing and participating in the research and development of Bitcoin and related pr.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/accra-BcbkbuABNXJAqnAuGPn2i6lBCRQrM6.jpeg",
            website: "https://bitdevsaccra.org/",
            xlink: "https://x.com/bitdevsAccra",
        },
        {
          title: "BitDevs Cotonou",
          details: [
              "BitDevs Cotonou is a community in Cotonou, Benin, for those interested in discussing and participating in the research and development of Bitcoin and related protocols in Cotonou.",
          ],
          imageSrc:
              "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/cotonou-DyjxNcNb5SxXbnykZWbb3HmoZZHvlV.jpg",
          website: "https://bitdevscotonou.org/",
          xlink: "https://x.com/BitdevsCotonou",
      },
      {
            title: "BitDevs Duoala",
            details: [
                "Douala Bitcoin Development community",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/douala-1llcW9xC9rzx3fPbHn0Jl2JWpoTF11.jpg",
            website: "https://bitdevsdla.org/",
            xlink: "https://x.com/BitDevsDLA",
        },
        {
            title: "BitDevs Gitega",
            details: [
                "BitDevs Gitega is a community of Bitcoin developers, educators, builders, and technically curious enthusiasts based in Gitega.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/gitega-xLKta0cDBaz1IHV7gWy9my6cTboO1c.jpg",
            website: "https://bitdevsgtga.org/",
            xlink: "https://x.com/bitdevsgtga",
        },
        {
            title: "BitDevs Goma",
            details: [
                "BitDevsGoma est un meetup (rencontre) consacré à la recherche et au développement de Bitcoin.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/goma-XmBwmBT6C57d6i5SP3sfd7EmZdhde2.jpg",
            website: "https://bitdevsgoma.org/",
            xlink: "https://x.com/BitdevsGoma",
        },
        {
            title: "BitDevs Joburg",
            details: [
                "A Johannesburg BitDevs community meet-up with socratic style seminars diving into new developments in #Bitcoin",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/joburg-nYFPoJObQ7JRMlyV1ZSFJR9wrhDVzL.jpg",
            website: "https://bitdevs.joburg",
            xlink: "https://x.com/BitDevsJHB",
        },
        {
            title: "BitDevs Kaduna",
            details: [
                "BitDevs Kaduna is a community where Bitcoin developers and enthusiasts gather to engage in technical discussions and collaborate on Bitcoin development #bitcoin",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/kaduna-XLlenw4sWDhzoJCYeeIP38qTwyFW5M.avif",
            website: "https://bitdevskaduna.org/",
            xlink: "https://x.com/BitDevsKaduna",
        },
        {
            title: "BitDevs Kampala",
            details: [
                "Kampala Bitcoin Developers Community.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/kampala-nKItRU1arxVZPaGcYhLEiFR4AHgqM6.jpg",
            website: "https://bitdevskla.org/",
            xlink: "https://x.com/BitDevsKLA",
        },
        {
            title: "BitDevs Kano",
            details: [
                "A place for free and open #Bitcoin education in #Kano. Join the community and #LearnBitcoinTogether!",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/abuja-BqbNZPBt6H8NI3mgOgReZGA50sZPSE.jpg",
            website: "https://bitdevskano.org/",
            xlink: "https://x.com/bitdevskano",
        },
        {
            title: "BitDevs Lagos",
            details: [
                "Bitdev Lagos is a community of Bitcoin developers working together to foster innovation and collaboration in Nigeria. Join us. #Bitcoin #Nigeria.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/abuja-BqbNZPBt6H8NI3mgOgReZGA50sZPSE.jpg",
            website: "https://bitdevslagos.org/",
            xlink: "https://x.com/BitDevsLagos",
        },
        {
            title: "BitDevs Nairobi",
            details: [
                "BitDevsNBO is a meetup devoted to the research and development of Bitcoin.",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/nairobi-qwGoJis4txjl9Ts4pyWr7zJhSiwnKI.png",
            website: "https://bitdevsnbo.org/",
            xlink: "https://x.com/BitDevsNBO",
        },
        {
            title: "BitDevs Uyo",
            details: [
                "A community of Bitcoin developers in Uyo. Learning, building, and exploring Bitcoin together. #BitDevsUyo #Bitcoin",
            ],
            imageSrc:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/uyo-4Vq7l1b59oWJWEt93Nl25oPWRqXbp8.png",
            website: "https://bitdevsuyo.org/",
            xlink: "https://x.com/BitDevsUyo",
        },
        
    ];
    return (
        <div className="pt-[4.5rem] lg:pt-[8rem] lg:pb-0 px-6 lg:px-[6.5rem]">
            {bitDevs.map((bitDev, index) => (
                <BitDevsCard key={index} {...bitDev} />
            ))}
        </div>
    );
}
