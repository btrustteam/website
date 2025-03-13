import Item from "./item";

export interface GrantsFaq {
  answer: string;
  question: string;
  lists?: string[];
}

export default function FaqContainer({
  faqs,
  main,
}: {
  faqs: GrantsFaq[];
  main?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-10 pb-20 lg:pt-[4.5rem] lg:pb-[9rem] px-6">
      <div className="flex flex-col w-full lg:w-[34.4375rem] gap-4 items-center justify-center">
        <h3 className="text-base font-poppins font-medium leading-[2rem] text-[#C6C6C6] text-center">
          FAQs
        </h3>
        <h4 className="font-poppins font-bold text-[1.5rem] leading-[2.25rem] lg:text-[2rem] lg:leading-[3rem] text-center text-[#FDFDFD]">
          Have Questions about {main ? "our Grants" : "this Grant"}? We have
          answers
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center">
        {faqs.map((faq, index) => (
          <Item
            key={index}
            answer={faq.answer}
            question={faq.question}
            lists={faq.lists}
          />
        ))}
      </div>
    </div>
  );
}
