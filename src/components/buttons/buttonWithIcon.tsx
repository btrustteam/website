"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ButtonWithArrow.module.css";

interface IconButtonProps {
  text: string;
  iconName: string;
  onClick?: () => void;
  url?: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}
export default function ButtonWithIcon({
  text,
  iconName,
  onClick,
  url,
  className,
  loading,
  disabled,
}: IconButtonProps) {
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
        <Image
            src={`/${iconName}.svg`}
            alt={`${iconName} icon`}
            width={30}
            height={50}
          />
      )}
    </button>
  );
}
