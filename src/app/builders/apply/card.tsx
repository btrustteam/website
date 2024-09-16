export default function Card({
  text,
  heading,
}: {
  text: string;
  heading: string;
}) {
  return (
    <div className="w-[24.6875rem] p-8 flex flex-col justify-center gap-2 backdrop-blur-[2px] border bg-process-bg border-process-border rounded-lg ">
      <h4 className=" text-active-white text-[1.5rem] font-poppins font-bold leading-[normal]">
        {heading}
      </h4>
      <p className="w-[20.6875rem] text-black-3 font-poppins text-base leading-[181.25%]">
        {text}
      </p>
    </div>
  );
}
