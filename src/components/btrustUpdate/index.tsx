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
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/q1-pJDwiZqSSnQSxx6wLrcuVUqxKeBNNB.png"
          tag="Btrust Blog"
          tag_bg="#F7931A"
          content_url="https://blog.btrust.tech/announcing-q1-2025-btrust-grants/"
          heading="Announcing Q1 2025 Btrust Grants Recipients"
          brief="This quarter, Brandon Odiwuor and Itoro Ukpong have been awarded the Btrust Starter Grant ..."
        />
        <NewsCard
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/BTrust%20Gathering%20Day%202%20-89-auS9DlGEkFBxPdgk99MalH74lvvrNh.JPG"
          tag="Btrust Blog"
          tag_bg="#F7931A"
          content_url="https://blog.btrust.tech/btrust-2024-in-review/"
          heading="Btrust 2024 In Review"
          brief="A recap of Btrust's 2024 milestones in decentralizing Bitcoin development in Africa and the Global South ..."
        />
        <NewsCard
          image_url="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/@ABC-Day-3-fast-36-lJ3ZQsPJgUzzInB0IfeVKoVQKvCWMn.jpeg"
          tag="Btrust Blog"
          tag_bg="#F7931A"
          content_url="https://blog.btrust.tech/announcing-the-q4-2024-btrust-grant-recipients/"
          heading="Announcing the Q4 2024 Btrust Grant Recipients"
          brief="We are excited to announce the Q4 2024 recipients of Btrust grants. This quarter, ..."
        />
      </div>
    </div>
  );
}
