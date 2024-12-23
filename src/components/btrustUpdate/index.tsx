"use client";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import NewsCard from "../cards/newsCard";
import SectionHeader from "../sectionHeader";

export default function BtrustUpdate() {
  return (
    <div className="flex w-full py-20 lg:py-[6.25rem] px-6 lg:px-[6.5rem] flex-col gap-[2rem]">
      <div className="flex items-center justify-between">
        <SectionHeader
          text="Btrust Updates"
          className="text-[1.2rem] lg:text-[2.5rem]"
        />
        <a href="/media">
          <ButtonWithArrow
            text="See All"
            onClick={() => {}}
            className="px-[1.25rem] py-[0.75rem]"
          />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[1.5rem]">
        <NewsCard
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/@ABC-Day-3-fast-36-lJ3ZQsPJgUzzInB0IfeVKoVQKvCWMn.jpeg"
          tag="Btrust Blog"
          tag_bg="#F7931A"
          content_url="https://blog.btrust.tech/announcing-the-q4-2024-btrust-grant-recipients/"
          heading="Announcing the Q4 2024 Btrust Grant Recipients"
          brief="We are excited to announce the Q4 2024 recipients of Btrust grants. This quarter, ..."
        />
        <NewsCard
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/btc-mag-btc-africa-alt-ntb7yjdt6yLpdf2ixOH9fMTxv9sBqW.jpg"
          tag="Bitcoin Magazine"
          tag_bg="#F7931A"
          content_url="https://bitcoinmagazine.com/business/bitcoin-non-profit-trust-announces-q3-grants-for-open-source-developers"
          heading="Bitcoin Non-Profit ₿trust Announces Q3 Grants For Open-Source Developers"
          brief="The Jay-Z and Jack Dorsey-backed organization shares the list of recipients ..."
        />
        <NewsCard
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/btc-mag-africa-map-EV7AZVM5bsbXI9GfMLnyqyffSo6owz.jpeg"
          tag="Bitcoin Magazine"
          tag_bg="#F7931A"
          content_url="https://bitcoinmagazine.com/business/jay-z-and-jack-dorsey-backed-bitcoin-non-profit-trust-appoints-bitcoin-core-developer-as-interim-ceo"
          heading="Jay-Z and Jack Dorsey-Backed Non-Profit ₿trust Appoints Bitcoin Core Contributor As Interim CEO"
          brief="The organization, which trains Bitcoin developers in Africa, LATAM and SE Asia ..."
        />
      </div>
    </div>
  );
}
