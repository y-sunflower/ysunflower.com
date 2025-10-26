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
        <div className="about-content">
          <div className="image-computer">
            <img
              src="/computer.jpg"
              alt="Image of Joseph Barbier, founder of yellow sunflower"
            />
            <div style={{ fontSize: "0.8em" }}>
              <p className="caption">
                My (small) office, always with a cup of coffee.
              </p>
              <p className="caption">
                <b>Bordeaux, France.</b>
              </p>
            </div>
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
                  <span className="highlight">data</span> for{" "}
                  <span className="highlight-secondary">humans</span>
                </span>
              </span>
            </h2>
            <p style={{ textAlign: "right" }}>
              <b>Data is for humans:</b> the tools we develop, the decisions we
              make, the code we write. All of it is for humans.
            </p>
            <p style={{ textAlign: "right" }}>
              Whether deciding if it makes sense to fund a project, evaluate a
              policy, or inform people, we, <b>humans</b>, want to take the
              right decisions. This starts by understanding the world, and{" "}
              <b>data</b> is here to help us.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90493.61839615446!2d-0.6684128046921557!3d44.8638098997777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sen!2sfr!4v1761507255585!5m2!1sen!2sfr"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe> */}

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
