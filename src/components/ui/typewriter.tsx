"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: readonly string[];
  speed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
};

export const Typewriter = ({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[wordIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // タイピングロジック
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // 単語完了、削除前の待機
            setTimeout(() => {
              setIsDeleting(true);
            }, delayBetweenWords);
          }
        } else {
          // 削除ロジック
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // 単語削除完了、次の単語へ
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentWord, isDeleting, speed, delayBetweenWords, words]);

  // カーソル点滅エフェクト
  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <span className="inline-block">
      <span>
        {displayText}
        {cursor && (
          <span
            className="ml-1 transition-opacity duration-75"
            style={{ opacity: showCursor ? 1 : 0 }}
          >
            {cursorChar}
          </span>
        )}
      </span>
    </span>
  );
};
