// components/WordChanger.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface WordChangerProps {
  words: string[];
  interval?: number; // Time between changes (ms)
  fadeDuration?: number; // Fade animation duration (ms)
  className?: string;
}

export default function WordChanger({
  words,
  interval = 2200,
  fadeDuration = 500,
  className = "",
}: WordChangerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const wordRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wordRef.current || !wrapperRef.current) return;

    // Set initial width
    wrapperRef.current.style.width = `${wordRef.current.offsetWidth}px`;

    const changeWord = () => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);

        // Update wrapper width after DOM updates
        requestAnimationFrame(() => {
          if (wordRef.current && wrapperRef.current) {
            wrapperRef.current.style.width = `${wordRef.current.offsetWidth}px`;
          }
        });

        setIsFading(false);
      }, fadeDuration);
    };

    const intervalId = setInterval(changeWord, interval);
    return () => clearInterval(intervalId);
  }, [words, interval, fadeDuration]);

  return (
    <div ref={wrapperRef} className="inline-block overflow-hidden align-bottom">
      <span
        ref={wordRef}
        className={`${className} transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
}
