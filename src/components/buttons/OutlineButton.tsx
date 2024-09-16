interface OutlineButtonProps {
  text: string;
  onClick: () => void;
}

export default function OutlineButton({ text, onClick }: OutlineButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex py-[1rem] px-[1.5rem] items-center justify-center rounded-lg border border-active-white font-poppins text-base font-semibold text-active-white"
    >
      {text}
    </button>
  );
}
