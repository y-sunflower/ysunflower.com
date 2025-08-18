"use client";

import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import "../styles/intro-ys.css";

export default function SunflowerAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: AnimationItem | undefined;

    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/sunflower.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
          progressiveLoad: true,
        },
      });
    }

    return () => {
      anim?.destroy();
    };
  }, []);

  return (
    <div className="intro-ys-animation">
      <div id="sunflower-animation" ref={containerRef} />
    </div>
  );
}
