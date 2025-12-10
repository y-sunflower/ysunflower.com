import Hero from "../components/Hero";
import { ContactForm } from "../components/Form";
import Companies from "../components/Companies";
import Link from "next/link";
import PushButton from "../components/Button";
import { packageList } from "../lists/packages-list";
import PackageCard from "../components/PackageCard";

export default function Home() {
  return (
    <>
      <Hero />
      <section
        className="intro-ys"
        id="intro-ys"
        style={{ marginBottom: "15em" }}
      >
        <div className="container">
          <div className="intro-ys-content">
            <div
              style={{
                width: "25%",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                src="/logo.png"
                style={{ maxWidth: "100%", height: "auto" }}
                className="rotate landing-logo"
                alt="logo of yellow sunflower, which is a yellow sunflower with a purple center"
              />
            </div>
            <div className="intro-ys-text" style={{ textAlign: "right" }}>
              <h2>
                <span
                  className="bottom-line"
                  style={{ display: "inlineBlock" }}
                >
                  <span className="name">
                    <span className="highlight">yellow</span>{" "}
                    <span className="highlight-secondary">sunflower</span>
                  </span>
                </span>
              </h2>
              <p>
                <span className="name">
                  <span className="highlight">yellow</span>{" "}
                  <span className="highlight-secondary">sunflower</span>
                </span>{" "}
                is an <span style={{ fontWeight: "600" }}>open source</span> and{" "}
                <span style={{ fontWeight: "600" }}>consulting</span> company,
                that focuses on data visualization. To find out more, read the{" "}
                <Link href="/blog/introducing-yellow-sunflower">
                  announcement&apos;s blog post
                </Link>
                .
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <PushButton
                  text={"open source"}
                  link={"https://github.com/y-sunflower"}
                  fontSize="1em"
                />
                <PushButton
                  text={"consulting"}
                  link={"/#contact"}
                  fontSize="1em"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="opensource" style={{ marginBottom: "15rem" }}></div>

      <section>
        <div className="container">
          <div className="opensource-text">
            <h2>
              <span className="bottom-line">
                <span className="name">
                  <span className="highlight">Open</span>{" "}
                  <span className="highlight-secondary">source</span>
                </span>
              </span>
            </h2>
            <p>
              Open source is at the core of{" "}
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>. All
              projects are released under permissive licenses and designed to be{" "}
              <b>simple</b>, <b>useful</b>, and <b>easy to extend</b>.
            </p>
          </div>
          <div className="packages-grid">
            {packageList.map(
              ({ packageName, packageDescription, packageTags }) => (
                <PackageCard
                  key={packageName}
                  packageName={packageName}
                  packageDescription={packageDescription}
                  packageTags={packageTags}
                />
              )
            )}
          </div>
          <p className="caption">
            Want to contribute? <b>Great!</b> It&apos;s all happening on{" "}
            <Link href="https://github.com/y-sunflower">Github</Link>.
          </p>
          <br />
          <p className="caption">
            Need help getting started? <b>No problem</b>, just open an issue
            with your questions!
          </p>
        </div>
      </section>

      <div id="consulting" style={{ marginTop: "15rem" }}></div>

      <section>
        <div className="container">
          <div className="opensource-text">
            <h2 style={{ textAlign: "right" }}>
              <span className="bottom-line">
                <span className="name">
                  <span className="highlight">data</span>{" "}
                  <span className="highlight-secondary">consulting</span>
                </span>
              </span>
            </h2>
            <p style={{ marginBottom: "auto" }}>
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span> helps teams
              turn raw data into clear insights. We provide{" "}
              <span style={{ fontWeight: "600" }}>
                custom data visualization
              </span>
              ,{" "}
              <span style={{ fontWeight: "600" }}>
                reproducible analysis pipelines
              </span>
              , and{" "}
              <span style={{ fontWeight: "600" }}>
                open-source tool integration
              </span>{" "}
              to make your data work for you.
            </p>
            <div style={{ margin: "2em 1em" }}>
              <Companies />
            </div>
            <p>
              Whether you need dashboards for decision-making, automated
              reporting, or guidance on modern data workflows, we can support
              you{" "}
              <span style={{ fontWeight: "600" }}>
                from design to deployment
              </span>
              .{" "}
            </p>
          </div>
          <div className="button-variant">
            <PushButton
              text={"Work With Us"}
              link={"/#contact"}
              fontSize="1.2em"
            />
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
                I’d love to hear from you! Whether you have a question, want to
                collaborate, or just want to say hi, feel free to drop a message
                below.
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
