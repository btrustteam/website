import RecipientCardDetails from "./recipientCardDetails";

export interface RecipientDetails {
  name: string;
  image_src: string;
  github: string;
  twitter: string;
  bio: string;
  noBio?: boolean;
}
export default function RecipientsDetailsContainer({
  title,
  recipients,
  mobileTitle,
}: {
  title: string;
  mobileTitle: string;
  recipients: RecipientDetails[];
}) {
  return (
    <div className="flex flex-col w-full gap-6">
      <h3 className="text-active-white font-poppins lg:text-[1.75rem] text-[1.375rem] font-bold w-[19.625rem] lg:w-full lg:block hidden">
        {title}
      </h3>
      <h3 className="text-active-white font-poppins lg:text-[1.75rem] text-[1.375rem] font-bold w-[19.625rem] lg:w-full lg:hidden block">
        {mobileTitle}
      </h3>
      <div className="flex w-full gap-6 flex-wrap justify-center lg:justify-start items-center lg:items-start ">
        {recipients.map((recipient, index) => (
          <RecipientCardDetails key={index} {...recipient} />
        ))}
      </div>
    </div>
  );
}
