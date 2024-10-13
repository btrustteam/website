"use client";
import { useRouter } from "next/navigation";

interface BorderlessButtonProps {
  text: string;
  onClick?: () => void;
  url?: string;
}

export default function BorderlessButton({
  text,
  onClick,
  url,
}: BorderlessButtonProps) {
  const routes = useRouter();

  return (
    <button
      onClick={url ? () => routes.push(url) : onClick}
      className="flex justify-center items-center rounded text-base font-semibold font-poppins text-active-white"
    >
      {text}
    </button>
  );
}
