import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { ContactForm } from "../components/Form";
import Companies from "../components/Companies";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        className="home-testimonials"
        aria-labelledby="testimonials-title"
      >
        <div className="container testimonials-container">
          <h2 id="testimonials-title">
            <span className="bottom-line">
              <span className="name">
                <span className="highlight">trusted</span>{" "}
                <span className="highlight-secondary">in practice</span>
              </span>
            </span>
          </h2>
          <div className="trusted-proof">
            <p>
              We are the developers behind open-source data tools used by people
              around the world, with <strong>800k+ downloads</strong> across our
              most-used Python/R packages. We bring that practical experience to
              every client system we build.{" "}
              <Link href="/open-source">Explore our open-source work</Link>.
            </p>
          </div>
          <Testimonials />
        </div>
        <Companies />
      </section>

      <div id="contact" style={{ marginBottom: "15rem" }}></div>

      <section>
        <div className="container">
          <div className="opensource-text get-in-touch-content">
            <div className="text-section">
              <h2>
                <span className="bottom-line">
                  <span className="name">
                    <span className="highlight">Get In</span>{" "}
                    <span className="highlight-secondary">Touch</span>
                  </span>
                </span>
              </h2>
              <p className="intro-text">
                Tell us about your data sources, reporting goals, and current
                workflow. We design reproducible reporting systems that
                transform raw data into automated dashboards, branded PDFs, and
                publication-grade documents.
              </p>
              <p>
                <a href="mailto:joseph@ysunflower.com">joseph@ysunflower.com</a>
              </p>
            </div>
            <div className="form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
