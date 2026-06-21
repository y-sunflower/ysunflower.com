import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { ContactForm } from "../components/Form";
import Companies from "../components/Companies";

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
