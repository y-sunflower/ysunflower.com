import Hero from "../components/Hero";
import { ContactForm } from "../components/Form";
import Companies from "../components/Companies";
import PushButton from "../components/Button";
import DataPipeline from "../components/DataPipeline";

export default function Home() {
  return (
    <>
      <Hero />

      <div id="consulting" style={{ marginTop: "12rem" }}></div>

      <section>
        <DataPipeline />
      </section>

      <div className="button-variant consulting-cta-row">
        <PushButton
          text={"Discuss your project"}
          link={"/#contact"}
          fontSize="1.1em"
        />
      </div>

      <section style={{ marginTop: "8rem" }}>
        <div className="container">
          <div className="opensource-text consulting-focus">
            <h2>
              <span className="bottom-line">
                <span className="name">
                  <span className="highlight">trusted</span>{" "}
                  <span className="highlight-secondary">by teams</span>
                </span>
              </span>
            </h2>
            <p>
              We have collaborated with research labs, nonprofits, education
              organizations, and private companies on data communication and
              reporting workflows.
            </p>
          </div>
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
                workflow. We can help you design a reproducible pipeline and
                deliver clean PDF or web dashboards.
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
