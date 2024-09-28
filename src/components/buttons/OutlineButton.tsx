interface OutlineButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}

export default function OutlineButton({
  text,
  onClick,
  className,
}: OutlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex py-6 lg:py-[1rem] px-[1.5rem] items-center justify-center rounded-lg border border-active-white font-poppins text-base font-semibold text-active-white ${className}`}
    >
      {text}
    </button>
  );
}
