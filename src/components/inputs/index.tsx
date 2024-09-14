import Image from "next/image";
import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  iconName: "message" | "user" | "address";
  placeholder: string;
  value: string;
  type: string;
  setValue: (value: string) => void;
}
export default function Input({
  label,
  placeholder,
  iconName,
  value,
  setValue,
  type,
}: InputProps) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  let image_url = "/message.svg";

  if (iconName === "user") {
    image_url === "/user.svg";
  } else if (iconName === "address") {
    image_url = "/addres.svg";
  }

  return (
    <div className="flex w-full flex-col gap-1">
      <label className=" text-active-white font-poppins text-base font-normal leading-[175%]">
        {label}
      </label>
      <div className="flex p-[1rem] items-center gap-2 rounded-lg border border-white-7 backdrop-blur-[2px]">
        <Image
          src={image_url}
          width={0}
          height={0}
          sizes={"100vw"}
          alt={iconName}
          className="w-[1.5rem] h-[1.5rem]"
        />
        <input
          type={type || "text"}
          className={`border-none font-poppins leading-[175%] text-base text-black-2 placeholder:text-base placeholder:text-black-2 placeholder:font-poppins w-full bg-transparent outline-none`}
          value={value}
          onChange={(e) => handleInputChange(e)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}