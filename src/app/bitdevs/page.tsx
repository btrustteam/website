import { Metadata } from "next";
import ActivitiesNewsletter from "@/components/ActivitiesNewsLetterFooter";
import Hero from "./hero";
import AllBitDevs from "./bitDevsContainer";
import FaqContainer from "../grants/faq";

export const metadata: Metadata = {
    title: "BitDevs In Africa",
    description: "BitDevs Locations In Africa",
    openGraph: {
        type: "website",
        title: "BitDevs In Africa",
        description: "BitDevs Locations In Africa",
        url: "https://www.btrust.tech/bitdevs",
        images: [
            {
                url: "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/abuja-BqbNZPBt6H8NI3mgOgReZGA50sZPSE.jpg",
            },
        ],
    },
};

export default function BitDevsInAfrica() {
    return (
        <div className="flex flex-col">
            <Hero />
            <AllBitDevs />
            <FaqContainer
                title="BitDevs"
                faqs={[
                    {
                        answer: "BitDevs is a community for those interested in discussing and participating in the research and development of Bitcoin and related protocols.",
                        question: "What are BitDevs?",
                    },
                ]}
            />
            <ActivitiesNewsletter />
        </div>
    );
}
