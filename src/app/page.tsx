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
        <div className="container">
          <div className="opensource-text consulting-focus">
            <h2 style={{ textAlign: "right" }}>
              <span className="bottom-line">
                <span className="name">
                  <span className="highlight">data</span>{" "}
                  <span className="highlight-secondary">consulting</span>
                </span>
              </span>
            </h2>
            <p>
              We help teams turn disconnected spreadsheets, CSV files, and
              operational data into reports people can trust and act on.
            </p>
            <div className="consulting-pillar-grid">
              <div className="consulting-pillar">
                <h3>Build clarity</h3>
                <p>
                  Transform raw files into decision-ready dashboards and
                  narrative reports.
                </p>
              </div>
              <div className="consulting-pillar">
                <h3>Make it reproducible</h3>
                <p>
                  Replace manual copy-paste steps with versioned workflows and
                  reliable report generation.
                </p>
              </div>
              <div className="consulting-pillar">
                <h3>Automate delivery</h3>
                <p>
                  Schedule output generation and publishing so teams always have
                  up-to-date PDF or web reports.
                </p>
              </div>
            </div>
            <p>
              Whether you need faster reporting, stronger data storytelling, or
              guidance on modern data tooling, we support your project{" "}
              <b>from design to deployment</b>.
            </p>
          </div>
          <div className="button-variant consulting-cta-row">
            <PushButton
              text={"Discuss your project"}
              link={"/#contact"}
              fontSize="1.1em"
            />
            <PushButton
              text={"Explore open source"}
              link={"/open-source"}
              fontSize="1.1em"
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "8rem" }}>
        <DataPipeline />
      </section>

      <section style={{ marginTop: "8rem" }}>
        <div className="container">
          <div className="opensource-text consulting-focus">
            <h2 style={{ textAlign: "right" }}>
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
          <div style={{ margin: "2em 1em" }}>
            <Companies />
          </div>
        </div>
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
                deliver clean PDF or web outputs.
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
