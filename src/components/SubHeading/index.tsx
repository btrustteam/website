export default function SubHeading({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <h2
      className={`text-active-white font-poppins text-[3.5rem] font-bold leading-[128.571%] ${className}`}
    >
      {text}
    </h2>
  );
}
