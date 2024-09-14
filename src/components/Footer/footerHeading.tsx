interface Props {
  text: string;
}
export default function FooterHeading({ text }: Props) {
  return (
    <h3 className="text-text-white font-poppins text-[0.875rem] font-semibold leading-[128.571%] uppercase">
      {text}
    </h3>
  );
}
