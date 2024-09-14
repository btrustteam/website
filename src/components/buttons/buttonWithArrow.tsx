import Image from "next/image";
interface ArrowButtonProps {
  text: string;
  onClick: () => void;
  noIcon?: boolean;
}
export default function ButtonWithArrow({
  text,
  onClick,
  noIcon,
}: ArrowButtonProps) {
  return (
    <button
      className="flex justify-center items-center px-[1.5rem] py-[1rem] rounded-lg bg-active-white text-base font-poppins font-semibold text-black-6 gap-2"
      onClick={onClick}
    >
      {text}
      {!noIcon && (
        <Image
          src={"/arrow_right.svg"}
          alt="arrow right"
          width={8}
          height={14}
        />
      )}
    </button>
  );
}
