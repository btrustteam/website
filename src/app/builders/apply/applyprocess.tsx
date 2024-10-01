import CardLeft from "./cardLeft";
import CardRight from "./cardRight";

export default function ApplySteps() {
  return (
    <div className="flex flex-col justify-center items-center relative w-full lg:w-[69.075rem] gap-6 lg:gap-0">
      <div className="hidden lg:flex justify-center items-center inset-0 top-[-14px] bottom-0 left-0 right-0 absolute w-full">
        <div className="w-[2px] bg-[#686868] h-[59.3rem]"></div>
      </div>
      <CardLeft
        text="Complete the application form to assess your eligibility and suitability for the Btrust Builders Program."
        heading="1. Application Form"
      />
      <CardRight
        text="As part of the application process, you will be required to complete a code challenge. This is so we know you have the basic technical foundation to thrive in the program."
        heading="2. Code Challenge"
      />
      <CardLeft
        text="We will assess all candidates through Git review, LinkedIn analysis, Code stack evaluation, and a review of their Proof of Work. This process will help us determine if you fit the candidate profile we seek."
        heading="3. Candidate Reviews"
      />
      <CardRight
        text="Upon successfully passing the candidate review stage, you will be shortlisted for one-on-one interviews with the team to confirm your fit for the program. "
        heading="4. Interviews"
      />
      <CardLeft
        text="Candidates who are accepted into the program will receive notification within two weeks of their application submission."
        heading="5. Selection & Notification"
      />
    </div>
  );
}
