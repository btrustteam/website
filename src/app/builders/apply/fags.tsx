import SectionHeader from "@/components/sectionHeader";
import Line from "@/components/TeamProfile/line";
import FAQItem from "./faqItems";

export default function Faqs() {
  return (
    <div className="lg:px-[6.5rem] flex flex-col gap-6 mt-12 lg:mt-[1rem]">
      <SectionHeader
        className="text-[1.5rem] lg:!text-[2.5rem] leading-[normal] px-[1.5rem] lg:px-0"
        text="Frequently Asked Questions (FAQs)"
      />
      <div className="flex flex-col gap-8">
        <Line className="h-[0.0625rem]" />
        <FAQItem
          question="Who is eligible to join the Btrust Builders Program?"
          answer="To be eligible for the program, you must meet the following criteria:"
          lists={[
            "3+ years of experience as a software developer in a production environment.",
            "Provide proof of your experience and ability, as evidenced by an active GitHub/GitLab account.",
            "Demonstrate your ability to engage with the technical content of the program.",
            "Can commit a minimum of 20 hours per week to the program.",
            "Show a willingness to learn and grow.",
          ]}
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          answer={`You can apply for the program by filling out the application form above. Simply click on the "Apply" button, which will direct you to complete the application form." question="How can I apply for the Program?`}
          question={"How can I apply for the Program?"}
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          answer="Btrust Builders is Btrust’s program designed exclusively for Africa. Nevertheless, given our focus at Btrust is on supporting developers from the Global South, we are happy to refer any applicants outside Africa but within the Global South to relevant programs."
          question="Is the Builders Program open to international applicants or limited to African software engineers?"
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          question="Is the Builders Program strictly for engineers who want to contribute to open-source development?"
          answer="Yes. Our primary goal is to locate the best African software developers, take them through an intense learning experience to build their skills and portfolio as Bitcoin developers and have them contribute to open-source Bitcoin & Lightning projects, including Bitcoin Core and other projects that support the broader Bitcoin development ecosystem."
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          answer="Absolutely not. On the contrary, once selected into the program, you get paid a small remuneration during the training period. This ensures that you can give the program adequate focus as it is intense."
          question="Do I have to pay to participate in the program?"
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          answer="There is no deadline to apply to the program. Our applications are open all year round."
          question="Is there a deadline for applying to the Builders Program?"
        />
        <Line className="h-[0.0625rem]" />
        <FAQItem
          answer="We make sure applicants know if they are successful within two weeks of applying for the program. While this is not always possible, we are constantly working to reduce the duration of the selection process."
          question="After applying, how soon do I know if I am selected?"
        />
        <Line className="h-[0.0625rem]" />
      </div>
    </div>
  );
}
