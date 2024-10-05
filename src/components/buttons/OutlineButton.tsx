interface OutlineButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  url?: string;
}

export default function OutlineButton({
  text,
  onClick,
  className,
  url,
}: OutlineButtonProps) {
  return (
    url ? 
      <a href={url} className={`flex py-6 lg:py-[1rem] px-[1.5rem] items-center justify-center rounded-lg border border-active-white font-poppins text-base font-semibold text-active-white ${className}`}>{text}</a>
      : <button
      onClick={onClick}
      className={`flex py-6 lg:py-[1rem] px-[1.5rem] items-center justify-center rounded-lg border border-active-white font-poppins text-base font-semibold text-active-white ${className}`}
    >
      {text}
    </button>
  );
}
