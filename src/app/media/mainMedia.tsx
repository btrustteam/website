import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import H4 from "./mediaHeader";
import Update from "./update";

export interface MediaProps {
  setIsMediaResources: (value: boolean) => void;
}

export default function MainMedia({ setIsMediaResources }: MediaProps) {
  return (
    <div className="flex py-[2rem] lg:py-[5rem] px-[1.5rem] lg:px-[6.5rem] flex-col gap-8">
      <div className="flex flex-col gap-2">
        <LittleHeading text="media" className="" />
        <SubHeading text="Btrust Updates" className="" />
        <div>
          <ButtonWithArrow
            noIcon={true}
            text="Download Press Kit"
            onClick={() => setIsMediaResources(true)}
          />
        </div>
      </div>
      <div className="flex gap-4 flex-col">
        <H4 text="Btrust in the Press" />
        <Update
          updates={[
            {
              url: "https://blog.btrust.tech/announcing-the-q4-2024-btrust-grant-recipients/",
              cover_url:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/@ABC-Day-3-fast-36-lJ3ZQsPJgUzzInB0IfeVKoVQKvCWMn.jpeg",
              heading:
                "Announcing the Q4 2024 Btrust Grant Recipients",
              tags: [{ title: "Btrust Blog", bg: "#000000" }],
              text: "We are excited to announce the Q4 2024 recipients of Btrust grants. This quarter, Abdullahi Yunus has been awarded the Starter Grant, while Enigbe Ochekliye and Tobechi Chukwuleta will transition to the Btrust Open-Source Cohort.",
            },
            {
              url: "https://bitcoinmagazine.com/business/bitcoin-non-profit-trust-announces-q3-grants-for-open-source-developers",
              cover_url:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/btc-mag-btc-africa-alt-ntb7yjdt6yLpdf2ixOH9fMTxv9sBqW.jpg",
              heading:
                "Bitcoin Non-Profit ₿trust Announces Q3 Grants For Open-Source Developers",
              tags: [{ title: "Bitcoin Magazine", bg: "#F7931A" }],
              text: "The Jay-Z and Jack Dorsey-backed organization shares the list of recipients for its latest round of Starter Grants as well as the newest members of its Open-Source Cohort.",
            },
            {
              url: "https://bitcoinmagazine.com/business/jay-z-and-jack-dorsey-backed-bitcoin-non-profit-trust-appoints-bitcoin-core-developer-as-interim-ceo",
              cover_url:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/btc-mag-africa-map-EV7AZVM5bsbXI9GfMLnyqyffSo6owz.jpeg",
              heading:
                "Jay-Z and Jack Dorsey-Backed Non-Profit ₿trust Appoints Bitcoin Core Contributor As Interim CEO",
              tags: [{ title: "Bitcoin Magazine", bg: "#F7931A" }],
              text: "The organization, which trains Bitcoin developers in Africa, LATAM and SE Asia, appoints one of its inaugural board members, Abubakar Nur Khalil, as its temporary leader.",
            },
            {
              url: "https://www.forbes.com/sites/digital-assets/2023/09/05/jay-z-and-jack-dorsey-funded-btrust-acquires-african-bitcoin-talent-firm-qala/",
              cover_url:
                "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2019%20(4)-zos0xeHGt8lljM8qPFjwBRe4dviqyf.png",
              heading:
                "Jay-Z And Jack Dorsey-Funded Btrust Acquires African Bitcoin Talent Firm Qala",
              tags: [{ title: "Forbes", bg: "#000000" }],
              text: "Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z formed",
            },
          ]}
        />
      </div>
    </div>
  );
}
