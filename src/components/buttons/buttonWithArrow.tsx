import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ButtonWithArrow.module.css";

interface ArrowButtonProps {
  text: string;
  onClick?: () => void;
  url?: string;
  noIcon?: boolean;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}
export default function ButtonWithArrow({
  text,
  onClick,
  url,
  noIcon,
  className,
  loading,
  disabled,
}: ArrowButtonProps) {
  const routes = useRouter();

  return (
    <button
      disabled={disabled}
      className={`flex justify-center items-center px-[2rem] lg:px-[1.5rem] py-6 lg:py-[1rem] rounded-lg bg-active-white text-base font-poppins font-semibold text-black-6 gap-2 disabled:bg-[#e0e0e0] disabled:text-[#a0a0a0] disabled:pointer-events-none disabled:cursor-not-allowed ${className}`}
      onClick={url ? () => routes.push(url) : onClick}
    >
      {text}
      {loading ? (
        <div className={styles.spinner}></div>
      ) : (
        !noIcon && (
          <Image
            src={"/arrow_right.svg"}
            alt="arrow right"
            width={8}
            height={14}
          />
        )
      )}
    </button>
  );
}
