interface LittleTextProps {
  text: string;
  className: "";
}
export default function LittleText({ text, className }: LittleTextProps) {
  return (
    <h3
      className={`text-base font-poppins font-medium text-black-2 leading-[200%] ${className}`}
    >
      {text}
    </h3>
  );
}
