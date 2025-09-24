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
                    {
                        answer: "BitDevs meetups are technical, developer-focused discussions that follow a Socratic Seminar format. This means topics are strictly related to Bitcoin and participants engage in collaborative, high-quality technical reviews of current developments.",
                        question: "What makes a meetup a “BitDevs”?",
                    },
                    {
                        answer: "No. BitDevs is a global initiative, with groups active in cities around the world. However, Btrust sponsors and supports several BitDevs communities across Africa to help strengthen local Bitcoin developer ecosystems.",
                        question: "Are BitDevs an initiative of Btrust?",
                    },
                    {
                        answer: "We look for strong evidence of local developer interest, at least two committed organizers, a clear focus on Bitcoin and Bitcoin development, and a plan for consistent monthly meetups.",
                        question: "What does Btrust look for in a BitDevs sponsorship request?",
                    },
                    {
                        answer: "Btrust currently sponsors 12 BitDevs across 12 cities in 8 countries spanning East, Central, and West Africa.",
                        question: "Where does Btrust currently sponsor BitDevs?",
                    },
                    {
                        answer: "Please check the current list on our website before applying, as we do not sponsor duplicate BitDevs in the same city.",
                        question: "Can I apply for Btrust’s sponsorship if there’s already a BitDevs in my city?",
                    },
                    {
                        answer: "We aim to provide an initial response to applications within 2-4 weeks. Approved BitDevs usually begin with a 3-month probation period before long-term sponsorship is confirmed.",
                        question: "How long does the Btrust sponsorship review process take?",
                    },
                    {
                        answer: "If a BitDevs fails to hold consistent meetups, loses focus on Bitcoin, or does not show strong community participation, Btrust may discontinue sponsorship after the probation period.",
                        question: "What happens if my BitDevs location doesn’t meet expectations during the probation period?",
                    },
                    {
                        answer: "Btrust provides sponsorship to help cover essential costs such as venue, logistics, and operational support for running sustainable meetups. We also provide guidance to ensure events maintain the quality expected of BitDevs.",
                        question: "What support does Btrust provide if my BitDevs sponsorship request is approved?",
                    },
                    {
                        answer: "No. We require at least two reliable and committed organizers, including a Bitcoin developer to ensure the sustainability and continuity of the BitDevs location.",
                        question: "Can I apply for sponsorship if I’m a solo organizer?",
                    },
                    {
                        answer: "No. While BitDevs are developer-focused, anyone with a genuine interest in Bitcoin and a willingness to learn is welcome. That said, the discussions are often technical, so some background knowledge helps. You can come to listen, learn, and gradually get more involved.",
                        question: "Do I need to be a developer to attend a BitDevs?",
                    },
                    {
                        answer: "Most BitDevs locations hold meetups once a month. The exact schedule depends on the local organizers.",
                        question: "How often are BitDevs meetups held?",
                    },
                    {
                        answer: "Each BitDevs shares updates through its own community channels (X, Discord, website, etc.). You can also check our list of sponsored BitDevs to find one near you and connect with their community.",
                        question: "How can I find out about upcoming BitDevs in my city?",
                    },
                    {
                        answer: "No. BitDevs meetups are free to attend. The goal is to foster open and accessible Bitcoin knowledge-sharing.",
                        question: "Do I have to pay to attend a BitDevs?",
                    },
                    {
                        answer: "Meetups cover current technical developments in Bitcoin, including protocol changes, research papers, open-source projects, security issues, and developer tools.",
                        question: "What kind of topics are discussed at BitDevs meetups?",
                    },
                    {
                        answer: "Yes. Organizers often welcome contributions from community members. If you’d like to present or lead part of a discussion, reach out to the organizers of your local BitDevs.",
                        question: "Can I present at a BitDevs meetup?",
                    },
                    {
                        answer: "No. BitDevs discussions are never recorded or live-streamed. This ensures open and candid participation. Some organizers may take photos during or after the meetup, but that is entirely at their discretion.",
                        question: "Are BitDevs discussions recorded or live-streamed?",
                    },
                    {
                        answer: "The Socratic Seminar is the standard format of a BitDevs meetup. Topics are curated in the weeks leading up to the meetup by organizers and community members. They are usually drawn from open-source repositories, research papers, technical blogs, and ongoing protocol developments. These topics are then discussed in a structured, debate-style format, encouraging knowledge-sharing and critical engagement. Some events may also include presentations of open-source projects, research, or other relevant content, followed by Q&A and feedback.",
                        question: "What is a Socratic Seminar?",
                    },
                    {
                        answer: "After the seminar, participants usually have time to network and connect with one another. Most BitDevs groups also maintain active community channels (e.g., X, Telegram, Discord) where more resources, updates, and follow-up discussions are shared. This way, learning and collaboration continue beyond the meetup.",
                        question: "What happens after a Socratic Seminar?",
                    },
                    {
                        answer: "BitDevs are primarily discussion-based (Socratic Seminars), while workshops focus on hands-on coding or tool usage. Some BitDevs communities organize both, but they are separate formats.",
                        question: "What’s the difference between BitDevs and a workshop?",
                    },
                    {
                        answer: "Yes. BitDevs is strictly focused on Bitcoin and related protocols. Other cryptocurrencies and blockchain projects are not part of the discussion.",
                        question: "Is BitDevs only about Bitcoin?",
                    },
                    {
                        answer: "All BitDevs are open and free to attend, but some locations require RSVP to help organizers plan logistics. Check with your local BitDevs for details.",
                        question: "Do I need to register before attending?",
                    },
                    {
                        answer: "BitDevs events are community-driven and non-commercial. Sponsorship is usually limited to covering essential costs like venue and logistics, without turning the meetup into a promotional platform.",
                        question: "Can companies or projects sponsor a BitDevs event?",
                    },
                ]}
            />
            <ActivitiesNewsletter />
        </div>
    );
}
