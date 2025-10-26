"use client";

import { useEffect, useRef, useState } from "react";
import ParticlesBackground from "./Particles";
import PushButton from "./Button";
import "../styles/hero.css";

interface WordChangerProps {
  words: string[];
  interval?: number;
  fadeDuration?: number;
}

const WordChanger: React.FC<WordChangerProps> = ({
  words,
  interval = 2200,
  fadeDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const wordRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!wordRef.current || !wrapperRef.current) return;

    const updateWord = () => {
      setFading(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);

        // adjust wrapper width dynamically
        if (wordRef.current && wrapperRef.current) {
          wrapperRef.current.style.width = `${wordRef.current.offsetWidth}px`;
        }

        setFading(false);
      }, fadeDuration);
    };

    const id = setInterval(updateWord, interval);
    return () => clearInterval(id);
  }, [words, interval, fadeDuration]);

  useEffect(() => {
    // adjust wrapper width on first render + every word change
    if (wordRef.current && wrapperRef.current) {
      wrapperRef.current.style.width = `${wordRef.current.offsetWidth}px`;
    }
  }, [currentIndex]);

  return (
    <span ref={wrapperRef} className="word-wrapper">
      <span
        ref={wordRef}
        className={`changing-word ${fading ? "fade-out" : ""}`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p>
          Open-source tools and consulting to help teams{" "}
          <WordChanger
            words={["visualize", "communicate", "understand", "trust"]}
            interval={2500}
            fadeDuration={400}
          />{" "}
          their data.
        </p>
        <h1>
          <span className="highlight">Data</span> for{" "}
          <span className="highlight-secondary">humans</span>
        </h1>
        <p className="hero-description">
          <b>Dozens</b> of successful projects, <b>hundreds of thousands</b>{" "}
          downloads, and <b>thousands</b> of people helped. Because{" "}
          <span className="highlight">data</span> <b>is for</b>{" "}
          <span className="highlight-secondary">humans</span>.
        </p>
        <div className="button-variant" style={{ marginTop: "2em" }}>
          <PushButton text="Work With Us" link="/#contact" fontSize="0.9em" />
        </div>
      </div>
      <ParticlesBackground
        particleColor="#FFC30040"
        particleAmount={40}
        particleSize={30}
        moveSpeed={0.3}
        connectParticles
        connectionColor="#FFC300"
        connectionDistance={200}
        background="transparent"
      />
    </section>
  );
}
