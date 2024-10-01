interface LittleTextProps {
  text: string;
  className: "";
}
export default function LittleText({ text, className }: LittleTextProps) {
  return (
    <h3
      className={`text-[0.875rem] leading-[normal] lg:text-base font-poppins font-medium text-black-2 lg:leading-[200%] ${className}`}
    >
      {text}
    </h3>
  );
}
