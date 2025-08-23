import Hero from "../components/Hero";
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
                </span>
                {"'"}s aim is to encourage people to use{" "}
                <span style={{ fontWeight: "600" }}>design</span> and{" "}
                <span style={{ fontWeight: "600" }}>storytelling</span> in their
                data workflow.
              </p>
              <p>
                We offer <span style={{ fontWeight: "600" }}>open source</span>{" "}
                tools, with a focus on data visualization.
              </p>
              <PushButton
                text={"Get started"}
                link={"https://github.com/y-sunflower"}
              />
              <PushButton text={"Learn more"} link={"/about"} />
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
    </>
  );
}
