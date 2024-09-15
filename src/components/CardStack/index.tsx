import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gilroyExtraBold } from "@/app/fonts/gilroy";

const cards = [
  {
    id: 1,
    icon: "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/12863347xxx%201-haGuTRKiF5cNyerKOEexgsDdWaz2p5.svg",
    content:
      "Bitcoin will provide a monetary system that enhances financial sovereignty for all. Btrust will support Bitcoin exclusively. In the event of a hard fork it will follow the chain endorsed by the user majority.",
    backround: "#1F1F1F",
    title: "BITcoin-only",
  },
  {
    id: 2,
    icon: "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Icon%20(1)-eOLifeLOgel4Ns1T2NrQ5m4MZLc93y.svg",
    content:
      "Btrust will maintain the highest levels of integrity. To that end, Btrust does not exist to make a profit for itself or its representatives. The board will be mindful to prevent self-dealing within the organization, and representatives will declare conflicts of interest as they arise.",
    backround: "#252525",
    title: "Integrity",
  },
  {
    id: 3,
    icon: "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Icon-8EpZSCA2FTqRwt7hCtCIaF3aRaHHHE.svg",
    content:
      "Free and open source projects are fundamental to Bitcoin’s censorship resistance and resilience. ₿trust will focus its efforts on fostering developer talent to work on free and open source Bitcoin projects. It will prioritize projects based on how dependent the bitcoin ecosystem is on them, resource requirements and their capacity to accept new contributors.",
    backround: "#3B3B3B",
    title: "Free and Open-source",
  },
  {
    id: 4,
    icon: "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Icon%20(2)-rRbL2p4ZG2QTGJoSgdRRFNjzAWNAAW.svg",
    content:
      "Transparency is critical to building trust and ensuring external accountability. Decisions will be made public within a reasonable time frame and financial statements will be published quarterly. Information that undermines representatives’ security and privacy will be exempt. The ₿trust team will engage with feedback that is given in good faith to the best of its ability.",
    backround: "#474747",
    title: "TRANSPARENCY",
  },
  {
    id: 5,
    icon: "https://lhxkhtemz6sjrgyy.public.blob.vercel-storage.com/Icon%20(3)-xOsSVYz4d5ZWESYKuNaGoro3gpKF67.svg",
    content:
      "Decentralization of Bitcoin’s development improves its resilience, reach and relevance as global money. ₿trust will operate in regions where Bitcoin development is uncommon.",
    backround: "#515151",
    title: "DECENTRALIZATION",
  },
];

const CardStack = () => {
  const [activeCard, setActiveCard] = useState<number>(1);
  const [calculatedX, setCalculatedX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCardClick = (id: number) => {
    if (id !== activeCard) {
      setActiveCard(id);
    }
  };

  // Calculate the dynamic value for x based on parent container width
  useEffect(() => {
    const calculateX = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setCalculatedX(containerWidth);
      }
    };

    // Run the calculation on mount and when the window resizes
    calculateX();
    window.addEventListener("resize", calculateX);

    return () => window.removeEventListener("resize", calculateX);
  }, []);

  function calculatePosition(cardId: number) {
    const cardPreviewWidth = 130;
    if (activeCard === 1) {
      if (cardId === 1) {
        return 0;
      } else if (cardId === 2) {
        return calculatedX - cardPreviewWidth * 4;
      } else if (cardId === 3) {
        return calculatedX - cardPreviewWidth * 3;
      } else if (cardId === 4) {
        return calculatedX - cardPreviewWidth * 2;
      } else {
        return calculatedX - cardPreviewWidth;
      }
    } else if (activeCard === 2) {
      if (cardId === 1) {
        return 0;
      } else if (cardId === 2) {
        return cardPreviewWidth;
      } else if (cardId === 3) {
        return calculatedX - cardPreviewWidth * 3;
      } else if (cardId === 4) {
        return calculatedX - cardPreviewWidth * 2;
      } else {
        return calculatedX - cardPreviewWidth;
      }
    } else if (activeCard === 3) {
      if (cardId === 1) {
        return 0;
      } else if (cardId === 2) {
        return cardPreviewWidth;
      } else if (cardId === 3) {
        return cardPreviewWidth * 2;
      } else if (cardId === 4) {
        return calculatedX - cardPreviewWidth * 2;
      } else {
        return calculatedX - cardPreviewWidth;
      }
    } else if (activeCard === 4) {
      if (cardId === 1) {
        return 0;
      } else if (cardId === 2) {
        return cardPreviewWidth;
      } else if (cardId === 3) {
        return cardPreviewWidth * 2;
      } else if (cardId === 4) {
        return cardPreviewWidth * 3;
      } else {
        return calculatedX - cardPreviewWidth;
      }
    } else {
      if (cardId === 1) {
        return 0;
      } else if (cardId === 2) {
        return cardPreviewWidth;
      } else if (cardId === 3) {
        return cardPreviewWidth * 2;
      } else if (cardId === 4) {
        return cardPreviewWidth * 3;
      } else {
        return cardPreviewWidth * 4;
      }
    }
  }

  return (
    <div className="relative w-full h-[29.5625rem] flex" ref={containerRef}>
      {cards.map((card, index) => {
        const isActive = activeCard === card.id;
        return (
          <motion.div
            key={card.id}
            className={`absolute top-${
              index * 10
            } w-full h-full cursor-pointer rounded-tl-[2.5rem] rounded-bl-[2.5rem] flex py-[7.59375rem] pl-[2.5rem] pr-[39.9375rem] items-center`}
            onClick={() => handleCardClick(card.id)}
            initial={false}
            animate={{
              x: calculatePosition(card.id),
            }}
            transition={{ duration: 0.5 }}
            style={{ background: card.backround }}
          >
            <div className="flex flex-col gap-6">
              <Image
                src={card.icon}
                height={0}
                width={0}
                sizes={"100vw"}
                className={"h-16 w-16"}
                alt="icon"
              />

              {isActive && (
                <h3
                  className={`text-[#C6C6C6] text-[1.75rem] font-extrabold uppercase ${gilroyExtraBold.className}`}
                >
                  {card.title}
                </h3>
              )}

              {isActive && (
                <p className="font-poppins text-[#989898] text-base leading-[175%]">
                  {card.content}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CardStack;
