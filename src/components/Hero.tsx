"use client";

import PushButton from "./Button";
import DataPipeline from "./DataPipeline";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="consulting">
      <div className="hero-content">
        <div className="container hero-intro">
          <p>Automated reporting systems for research and analytics teams</p>
          <h1>
            <span className="highlight">Data</span> for{" "}
            <span className="highlight-secondary">humans</span>
          </h1>
        </div>

        <DataPipeline />

        <div className="button-variant hero-cta">
          <PushButton
            text="Discuss your project"
            link="/#contact"
            fontSize="1.05em"
          />
        </div>
      </div>
    </section>
  );
}
