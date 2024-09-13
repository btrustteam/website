interface BorderlessButtonProps {
  text: string;
  onClick: () => void;
}

export default function BorderlessButton({
  text,
  onClick,
}: BorderlessButtonProps) {
  return (
    <button className="flex justify-center items-center rounded text-base font-semibold font-poppins text-active-white">
      {text}
    </button>
  );
}
