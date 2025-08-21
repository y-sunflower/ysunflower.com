"use client";

import { useEffect, useRef, useState } from "react";
import ParticlesBackground from "./Particles";
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
        <h1>
          <span className="highlight">Open</span> tools for expressive{" "}
          <span className="highlight-secondary">data</span>
        </h1>
        <p>
          Cultivating data, one{" "}
          <WordChanger
            words={[
              "graphic",
              "story",
              "project",
              "discussion",
              "commit",
              "idea",
              "metric",
            ]}
          />{" "}
          at a time
        </p>
      </div>
      <ParticlesBackground
        particleColor="#FFC30040" // Yellow particles
        particleAmount={80} // Number of particles
        particleSize={30} // Size of particles
        moveSpeed={0.4} // Movement speed
        connectParticles={true} // Whether to connect particles
        connectionColor="#FFC300" // Connection line color with transparency
        connectionDistance={200} // Maximum distance for connections
        background="transparent" // Background of the canvas
      />
    </section>
  );
}
