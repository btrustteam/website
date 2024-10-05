import Image from "next/image";
import { useRouter } from "next/navigation";

interface ArrowButtonProps {
  text: string;
  onClick?: () => void;
  url?: string;
  noIcon?: boolean;
  className?: string;
}
export default function ButtonWithArrow({
  text,
  onClick,
  url,
  noIcon,
  className,
}: ArrowButtonProps) {
  const routes = useRouter();

  return (
    <button
      className={`flex justify-center items-center px-[2rem] lg:px-[1.5rem] py-6 lg:py-[1rem] rounded-lg bg-active-white text-base font-poppins font-semibold text-black-6 gap-2 ${className}`}
      onClick={url ? () => routes.push(url) : onClick}
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
