import DynamicImage from "@/components/DynamicImage";
import Paragraph from "@/components/Paragraph";

export default function BulletParagraph({ text }: { text: string }) {
  return (
    <div className="flex justify-between w-full gap-4">
      <DynamicImage
        src={
          "https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Frame%201000003216-Oh4mxTjX1hneEs0FZPWr6ERC8VTnmF.png"
        }
        className="h-[2rem] w-[2rem] rounded object-cover"
        alt="bullet"
      />
      <Paragraph className="text-black-2">{text}</Paragraph>
    </div>
  );
}
