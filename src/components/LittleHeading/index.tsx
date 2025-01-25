export default function LittleHeading({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  return (
    <h3
      className={`font-poppins text-[0.875rem] font-bold uppercase text-black-3 ${className}`}
    >
      {text}
    </h3>
  );
}
