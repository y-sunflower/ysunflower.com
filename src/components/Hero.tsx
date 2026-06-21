"use client";

import PushButton from "./Button";
import DataPipeline from "./DataPipeline";
import Link from "next/link";
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

        <div className="container hero-proof">
          <p>
            We are the developers behind open-source data tools used by people
            around the world, with <strong>800k+ downloads</strong> across our
            most-used Python/R packages. We bring that practical experience to
            every client system we build.
          </p>
          <Link href="/open-source">Explore our open-source work</Link>
        </div>

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
