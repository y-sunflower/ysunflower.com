import Hero from "../components/Hero";
import Link from "next/link";
import SunflowerAnimation from "../components/SunflowerAnimations";
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
        style={{ marginBottom: "10rem" }}
      >
        <div className="container">
          <div className="intro-ys-content">
            <SunflowerAnimation />
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
                offers <span style={{ fontWeight: "600" }}>open source</span>{" "}
                tools and{" "}
                <span style={{ fontWeight: "600" }}>consulting services</span>,
                with a focus on data visualization.
              </p>
              <p>
                To find out more, read the{" "}
                <Link href="/blog/introducing-yellow-sunflower">
                  announcement&apos;s blog post
                </Link>
                .
              </p>
              <PushButton
                text={"open source"}
                link={"https://github.com/y-sunflower"}
              />
              <PushButton text={"consulting"} link={"/#consulting"} />
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
              projects are released under permissive licenses and designed to be
              simple, useful, and easy to extend.
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
            <p>
              Whether you need dashboards for decision-making, automated
              reporting, or guidance on modern data workflows, we can support
              you{" "}
              <span style={{ fontWeight: "600" }}>
                from design to deployment
              </span>
              .{" "}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1.4em",
              }}
            >
              <Link href="mailto:joseph.barbierdarnal@gmail.com">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
