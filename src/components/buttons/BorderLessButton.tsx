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
  return (
    url ?
    <a
    href={url}
    className="flex justify-center items-center rounded text-base font-semibold font-poppins text-active-white">
      {text}
    </a>
    : <button
      onClick={onClick}
      className="flex justify-center items-center rounded text-base font-semibold font-poppins text-active-white"
    >
      {text}
    </button>
  );
}
