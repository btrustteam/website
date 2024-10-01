import ButtonWithArrow from "../buttons/buttonWithArrow";
import NewsCard from "../cards/newsCard";
import SectionHeader from "../sectionHeader";

export default function BtrustUpdate() {
  return (
    <div className="flex w-full py-20 lg:py-[6.25rem] px-6 lg:px-[6.5rem] flex-col gap-[2rem]">
      <div className="flex items-center justify-between">
        <SectionHeader
          text="Btrust Updates"
          className="text-[1.5rem] lg:text-[2.5rem]"
        />
        <ButtonWithArrow text="See All" onClick={() => {}} />
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[1.5rem]">
        <NewsCard
          image_url="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2020%20(2)-DeNIWaOM8kAVYiyC1hRWCnyuZOlJQy.png"
          first_tag="Forbes"
          second_tag="Blog"
          content_url="/"
          heading="Jack Dorsey’s Btrust Acquires African Bitcoin Talent Developer Qala"
          brief="Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z..."
        />
        <NewsCard
          image_url="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image%20(2)-tMXbatUeSiMwJWULojKbUsYlZVh1j3.png"
          first_tag="Magazine"
          second_tag="Blog"
          content_url="/"
          heading="Non-Profit ₿trust Is Funding New Bitcoin Developers In Africa"
          brief="₿trust has located the founding member for its new cohort designed to locate and educate new developers in...."
        />
        <NewsCard
          image_url="https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019-aoHstiIG5nI0geS9FR7C9UFlA0IeNF.png"
          first_tag="Crypto News"
          second_tag="Press"
          content_url="/"
          heading="Jay-Z and Jack Dorsey’s firm expands to foster Bitcoin talent in Africa"
          brief="The Bitcoin non-profit, Btrust, co-founded by rapper Jay-Z and Block CEO..."
        />
      </div>
    </div>
  );
}
