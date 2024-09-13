interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}
export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={`text-base font-poppins leading-[200%] text-black-2 ${className}`}
    >
      {children}
    </p>
  );
}
