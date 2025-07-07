import Image from "next/image";
import OutlineButton from "@/components/buttons/OutlineButton";
import Paragraph from "@/components/Paragraph";
import SectionHeader from "@/components/sectionHeader";

interface BitDevsCardProps {
    imageSrc: string;
    details: string;
    website: string;
    xlink: string;
    title: string;
}

export default function BitDevsCard({
    imageSrc,
    details,
    website,
    xlink,
    title,
}: BitDevsCardProps) {
    return (
        <div className="flex flex-col w-full max-w-[24.6875rem] lg:w-[24.6875rem] p-[1.25rem] gap-[1rem] rounded-lg backdrop-blur-[2px] border border-card-border">
            <Image
                src={imageSrc}
                width={0}
                height={0}
                sizes={"100vw"}
                className="h-[14.25rem] w-full rounded-lg object-cover"
                alt="blog cover"
            />
            <div className="flex flex-col gap-[0.75rem]">
                <SectionHeader
                    text={title}
                    className="!leading-[155.556%] lg:!leading-[175%] lg:!text-[1.25rem] !text-[1.125rem]"
                />
                <Paragraph className="">{details}</Paragraph>
            </div>
            <div className="flex flex-col gap-4">
                <OutlineButton
                    text="Visit Site"
                    className="w-full lg:w-auto"
                    url={website}
                    iconUrl="/link.svg"
                    newTab={true}
                />
                <OutlineButton
                    text="Follow X Page"
                    className="w-full lg:w-auto"
                    url={xlink}
                    iconUrl="/link.svg"
                    newTab={true}
                />
            </div>
        </div>
    );
}
