"use client";

import ParticlesBackground from "./Particles";
import PushButton from "./Button";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <p>Automated reporting systems for research and analytics teams</p>
        <h1>
          <span className="highlight">Data</span> for{" "}
          <span className="highlight-secondary">humans</span>
        </h1>
        <div className="button-variant" style={{ marginTop: "2em" }}>
          <PushButton text="Work with us" link="/#contact" fontSize="0.9em" />
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
