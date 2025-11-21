import Companies from "../../components/Companies";
import Testimonials from "../../components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="about" id="about" style={{ marginTop: "10rem" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="about-content">
            <div className="joseph-image">
              <img
                src="/joseph.png"
                alt="Image of Joseph Barbier, founder of yellow sunflower"
              />
            </div>
            <div className="about-text">
              <h2 style={{ textAlign: "right" }}>
                <span
                  style={{
                    display: "inline-block",
                    borderBottom: "6px solid #ffc300",
                  }}
                >
                  <span className="name">
                    <span className="highlight">yellow</span>{" "}
                    <span className="highlight-secondary">sunflower</span>
                  </span>
                </span>
              </h2>
              <p>
                Hi! I&apos;m <span style={{ fontWeight: "600" }}>Joseph</span>,
                and{" "}
                <span className="name">
                  <span className="highlight">yellow</span>{" "}
                  <span className="highlight-secondary">sunflower</span>
                </span>{" "}
                is where I develop open source tools and provide consulting
                services. You can learn more about me on my{" "}
                <a href="https://barbierjoseph.com/" target="_blank">
                  personal website
                </a>
                .
              </p>
              <p>
                My goal is to put humans at the center of data, helping teams
                communicate, explore, and make sense of their data.
              </p>
              <p>
                There already are{" "}
                <a href="https://github.com/y-sunflower" target="_blank">
                  multiple projects
                </a>{" "}
                that you can benefit from and if you&apos;re interested in my
                consulting services, just{" "}
                <Link href="/#contact">send an email</Link>.
              </p>
              <p>
                You can find a list of all the organisations I have worked with
                here:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: "5rem" }}>
        <Companies />
      </section>

      <div
        className="container"
        style={{ marginTop: "10rem", maxWidth: "1000px" }}
      >
        <div className="about-text">
          <h2>
            <span style={{ display: "inline-block" }} className="bottom-line">
              <span className="name">
                <span className="highlight">some</span>{" "}
                <span className="highlight-secondary">testimonials</span>
              </span>
            </span>
          </h2>
        </div>

        <Testimonials />
      </div>

      <div
        className="container"
        style={{ marginTop: "10rem", maxWidth: "1000px" }}
      >
        <div className="about-text about-tools">
          <h2>
            <span style={{ display: "inline-block" }} className="bottom-line">
              <span className="name">
                <span className="highlight">about</span>{" "}
                <span className="highlight-secondary">tools</span>
              </span>
            </span>
          </h2>
          <p>
            <b>Data is not about tools</b>, nor should it be. However, choosing
            the right tools has a significant impact on a project&apos;s
            success. At <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>, we primarily
            believe in free and open-source software. For this reason, our tools
            of choice are:
          </p>
          <ul>
            <li>
              <b>Python</b> & <b>R</b> for all essential data-related tasks
            </li>
            <li>
              <b>HTML/CSS/JS</b> for web reports (often with Quarto)
            </li>
            <li>
              <b>Typst</b> for PDF reports (often with Quarto)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
