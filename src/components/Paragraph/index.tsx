interface Paragraph {
  text: string;
  className: string;
}
export default function Paragraph({ text, className }: Paragraph) {
  return (
    <p
      className={`text-base font-poppins leading-[200%] text-black-2 ${className}`}
    >
      {text}
    </p>
  );
}
