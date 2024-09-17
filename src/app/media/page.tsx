"use client";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import LittleHeading from "@/components/LittleHeading";
import SubHeading from "@/components/SubHeading";
import Blog from "./blog";
import H4 from "./mediaHeader";
import Update from "./update";

export default function Media() {
  return (
    <div className="flex flex-col">
      <div className="flex py-[5rem] px-[6.5rem] flex-col gap-8">
        <div className="flex flex-col gap-2">
          <LittleHeading text="media" className="" />
          <SubHeading text="Btrust Updates" className="" />
        </div>
        <div className="flex gap-4 flex-col">
          <H4 text="Btrust in the Press" />
          <Update
            updates={[
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(1)-mQN5QXIvn9ksqoelwbgJwfJwwbQ74r.png",
                heading:
                  "Jay-Z And Jack Dorsey-Funded Btrust Acquires African Bitcoin Talent Firm Qala",
                tags: ["Forbes", "Blog"],
                text: "Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z formed",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(2)-CDEFoyFHjvkKA3j1eXgNT51g6I0QZy.png",
                heading:
                  "Jay-Z and Jack Dorsey’s firm expands to foster Bitcoin talent in Africa",
                tags: ["Crypto News"],
                text: "The Bitcoin non-profit, Btrust, co-founded by rapper Jay-Z and Block CEO Jack Dorsey",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image%20(4)-LsedQNqFpnTZoUauDkB8P2vMaA5niX.png",
                heading:
                  "Non-Profit ₿trust Is Funding New Bitcoin Developers In Africa",
                tags: ["Bitcoin Magazine"],
                text: "As part of the acquisition, Qala is rebranding as the ₿trust Builders Programme",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(1)-mQN5QXIvn9ksqoelwbgJwfJwwbQ74r.png",
                heading:
                  "Jack Dorsey’s Btrust Acquires African Bitcoin Talent Developer Qala",
                tags: ["Crypto News BTC"],
                text: "Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z shaped",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(3)-7iMZvHsXVXJfQw5JIsG2s3JCW8l4IJ.png",
                heading:
                  "Btrust, cofounded by Jack Dorsey and Jay Z, acquires African Bitcoin talent development firm Qala",
                tags: ["Mariblock"],
                text: "Btrust, a non-profit committed to decentralizing Bitcoin software development",
              },
            ]}
          />
        </div>
        <div className="flex gap-4 flex-col">
          <H4 text="Btrust Blog" />
          <Blog
            updates={[
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(1)-mQN5QXIvn9ksqoelwbgJwfJwwbQ74r.png",
                heading:
                  "Jay-Z And Jack Dorsey-Funded Btrust Acquires African Bitcoin Talent Firm Qala",
                tags: ["Forbes", "Blog"],
                text: "Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z formed",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(2)-CDEFoyFHjvkKA3j1eXgNT51g6I0QZy.png",
                heading:
                  "Jay-Z and Jack Dorsey’s firm expands to foster Bitcoin talent in Africa",
                tags: ["Crypto News"],
                text: "The Bitcoin non-profit, Btrust, co-founded by rapper Jay-Z and Block CEO Jack Dorsey",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/image%20(4)-LsedQNqFpnTZoUauDkB8P2vMaA5niX.png",
                heading:
                  "Non-Profit ₿trust Is Funding New Bitcoin Developers In Africa",
                tags: ["Bitcoin Magazine"],
                text: "As part of the acquisition, Qala is rebranding as the ₿trust Builders Programme",
              },
              {
                url: "/",
                cover_url:
                  "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Rectangle%2019%20(1)-mQN5QXIvn9ksqoelwbgJwfJwwbQ74r.png",
                heading:
                  "Jack Dorsey’s Btrust Acquires African Bitcoin Talent Developer Qala",
                tags: ["Crypto News BTC"],
                text: "Btrust, the bitcoin non-profit that Block CEO Jack Dorsey and rapper Jay-Z shaped",
              },
            ]}
          />
        </div>
      </div>
      <ActivitiesNewsletter />
    </div>
  );
}
