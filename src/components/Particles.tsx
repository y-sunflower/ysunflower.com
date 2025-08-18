"use client";

import { useEffect } from "react";
import "particles.js";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function ParticlesBackground() {
  useEffect(() => {
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary-color")
      .trim();

    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles", {
        particles: {
          number: { value: 100 },
          color: { value: primaryColor },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: 15, random: true },
          move: {
            enable: true,
            speed: 1,
            random: true,
            straight: false,
            out_mode: "out",
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: primaryColor,
            opacity: 0.2,
            width: 2,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div className="particles" id="particles"></div>;
}
