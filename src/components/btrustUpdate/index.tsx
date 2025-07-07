"use client";
import ButtonWithArrow from "../buttons/buttonWithArrow";
import NewsCard from "../cards/newsCard";
import SectionHeader from "../sectionHeader";
import mediaNews from "../../app/media/media.json";

interface NewsItem {
  cover_url: string;
  tags: { title: string; bg: string }[];
  url: string;
  heading: string;
  text: string;
};

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
        {mediaNews.slice(0, 3).map((news: NewsItem, index: number) => (
          <NewsCard
            key={index}
            cover_url={news.cover_url}
            tags={[news.tags[0]]}
            url={news.url}
            heading={news.heading}
            text={news.text}
          />
        ))}
      </div>
    </div>
  );
}
