interface HeaderProps {
  text: string;
  className: string;
}
export default function SectionHeader({ text, className }: HeaderProps) {
  return (
    <h2
      className={`text-active-white font-poppins text-[2rem] font-bold capitalize ${className}`}
    >
      {text}
    </h2>
  );
}
