"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OutlineButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  url?: string;
  iconUrl?: string;
  newTab?: boolean;
}

export default function OutlineButton({
  text,
  onClick,
  className,
  url,
  iconUrl,
  newTab,
}: OutlineButtonProps) {
  const routes = useRouter();

  return (
    <button
      onClick={url ? (newTab ? () => window.open(url, '_blank') : () => routes.push(url)) : onClick}
      className={`flex py-6 lg:py-[1rem] px-[1.5rem] gap-4 items-center justify-center rounded-lg border border-active-white font-poppins text-base font-semibold text-active-white ${className}`}
    >
      {text}
      {iconUrl && (
        <Image src={iconUrl} alt="arrow right" width={24} height={24} />
      )}
    </button>
  );
}
