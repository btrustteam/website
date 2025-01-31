"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonWithArrow from "@/components/buttons/buttonWithArrow";
import ButtonWithIcon from "@/components/buttons/buttonWithIcon";
import DynamicImage from "@/components/DynamicImage";
import LittleHeading from "@/components/LittleHeading";
import Paragraph from "@/components/Paragraph";
import SubHeading from "@/components/SubHeading";

interface BackButtonProps {
    onClick: () => void;
}

interface LayoutProps {
    routes: ReturnType<typeof useRouter>;
    navigateToDiscord: () => void;
}

export default function ApplyHero() {
    const routes = useRouter();
    function navigateToDiscord() {
        window.open("https://discord.gg/wFt6puhmwk", "_blank");
    }

    const GoalParagraph = () => (
        <Paragraph>
            Our goal is to create a pathway for African software engineers to
            transition into a Bitcoin and Lightning open-source development
            career, building their skills and portfolio as Bitcoin developers.
        </Paragraph>
    );

    const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
        <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={onClick}
            aria-label="Go back to builders page"
        >
            <Image
                src={"/back.svg"}
                alt="Back"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[1rem] h-[1rem]"
            />
            <LittleHeading text="btrust builders/apply" />
        </div>
    );

    const MobileLayout: React.FC<LayoutProps> = ({
        routes,
        navigateToDiscord,
    }) => (
        <div className="flex lg:hidden mt-[4rem] flex-col gap-6 w-full">
            {/* Header Section */}
            <div className="flex flex-col justify-center gap-2 px-[1.5rem]">
                <BackButton onClick={() => routes.push("/builders")} />
                <SubHeading text="Kickstart Your Bitcoin Developer Career" />
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
                <DynamicImage
                    src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-6KKpRfy7dN42oSYTCKawD369BLEF6a.png"
                    alt="builder"
                    className="w-full h-[18.75rem] object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-6 w-full px-6">
                <GoalParagraph />
                <div className="flex flex-col gap-[1.5rem] items-center justify-center w-full">
                    <ButtonWithArrow
                        text="Apply Here"
                        onClick={() =>
                            routes.push(
                                "https://btrust.homerun.co/btrust-builders-2025-oss-cohort-application/en"
                            )
                        }
                        noIcon={true}
                        className="w-full"
                    />
                    <ButtonWithIcon
                        text="Join Our Community"
                        onClick={navigateToDiscord}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );

    const DesktopLayout: React.FC<LayoutProps> = ({
        routes,
        navigateToDiscord,
    }) => (
        <div className="hidden lg:flex flex-col gap-20 mt-[3.5rem]">
            {/* Header Section */}
            <div className="flex w-full px-[6.5rem] flex-col gap-4">
                <div className="flex flex-col justify-center gap-2">
                    <BackButton onClick={() => routes.push("/builders")} />
                    <SubHeading text="Kickstart Your Bitcoin Developer Career" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 w-[48.75rem]">
                    <GoalParagraph />
                    <div className="flex gap-8">
                        <ButtonWithArrow
                            text="Apply Here"
                            onClick={() =>
                                routes.push(
                                    "https://btrust.homerun.co/btrust-builders-2025-oss-cohort-application/en"
                                )
                            }
                            noIcon={true}
                        />
                        <ButtonWithIcon
                            text="Join Our Community"
                            onClick={navigateToDiscord}
                        />
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center">
                <DynamicImage
                    src="https://8aqkfzpsopxwkjhh.public.blob.vercel-storage.com/Rectangle%2018-6KKpRfy7dN42oSYTCKawD369BLEF6a.png"
                    alt="builder"
                    className="w-full h-[46.1875rem] object-cover"
                />
            </div>
        </div>
    );

    return (
        <>
            <MobileLayout
                routes={routes}
                navigateToDiscord={navigateToDiscord}
            />
            <DesktopLayout
                routes={routes}
                navigateToDiscord={navigateToDiscord}
            />
        </>
    );
}
