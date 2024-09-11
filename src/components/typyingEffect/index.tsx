import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["locate", "educate", "remunerate"];

export default function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = 200;

    if (isDeleting) {
      typingSpeed = 200;
    }

    const handleTyping = () => {
      setDisplayedText((prev) => {
        if (!isDeleting && prev === currentWord) {
          setIsDeleting(true);
          return currentWord.slice(0, prev.length - 1);
        } else if (isDeleting && prev === "") {
          setIsDeleting(false);
          let newCurrentWord = "";
          setWordIndex((prev) => {
            const newIndex = (prev + 1) % words.length;
            newCurrentWord = words[newIndex];
            return newIndex;
          });
          return newCurrentWord.slice(0, 1);
        }
        if (isDeleting) {
          return currentWord.slice(0, prev.length - 1);
        } else {
          return currentWord.slice(0, prev.length + 1);
        }
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  return (
    <motion.span
      animate={{ opacity: [0, 1] }}
      // transition={{ repeat: Infinity, duration: 0.5 }}
      className="text-white-9 italic"
    >
      {displayedText}_
    </motion.span>
  );
}
