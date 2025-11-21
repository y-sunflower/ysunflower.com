import "../../../styles/blog.css";
import Link from "next/link";
import { blogPostData } from "./data";

const BlogPost1Content = () => {
  return (
    <div
      className="container blog-post-container"
      style={{ marginTop: "10rem" }}
    >
      <h1>{blogPostData.title}</h1>
      <div className="blog-post-header">
        <p>{blogPostData.date}</p>
        <p>{blogPostData.readingTime}</p>
      </div>
      <p className="blog-description">{blogPostData.description}</p>

      <h2>Next step</h2>
      <p>
        After a year of freelancing and doing open source as side projects,{" "}
        <Link href="https://barbierjoseph.com/">I</Link> decided to create an
        organization named <span className="highlight">yellow</span>{" "}
        <span className="highlight-secondary">sunflower</span>. This
        organization is the direct continuation of my work, both as a freelancer
        and as an open source developer.
      </p>
      <p>
        My goal is to improve the way people do dataviz and storytelling in data
        science in <b>two</b> different ways.
      </p>
      <ul>
        <li>Developing new and contributing to existing open source tools</li>
        <li>Offering consulting services</li>
      </ul>
      <p>
        <span className="highlight">yellow</span>{" "}
        <span className="highlight-secondary">sunflower</span> is now the
        organization behind all this work. You can get more info by visiting the{" "}
        <Link href="https://github.com/y-sunflower">GitHub</Link>, the{" "}
        <Link href="https://www.linkedin.com/company/yellow-sunflower/">
          LinkedIn page
        </Link>{" "}
        or this website.
      </p>

      <h2>Open source & data visualization</h2>
      <p>
        Most of my open source work focuses on data visualization, and will
        mostly remain so. There are still <b>a lot</b> of things to create,
        improve, and of course, maintain.
      </p>
      <p>
        There are numerous tools that still don&apos;t exist that I believe
        would be very useful for practitioners (myself included), and I plan to
        contribute to that. This also means contributing to already existing
        projects in the vast ecosystem that data visualization is.
      </p>
      <p></p>
      <p>
        Some topics I&apos;m particularly interested in are <b>interactivity</b>
        ,<b> reproducibility</b>, <b>animations</b>, and{" "}
        <b>developer experience</b>.
      </p>

      <h2>Consulting</h2>
      <p>
        Most of my consulting work focuses on making data workflows simpler,
        more reproducible, and visually clean, from analysis to reports.
      </p>
      <p>
        My goal is to make sure <b>data is for humans</b>. Data is here to help
        us, humans, measure, evaluate, understand, inform and decide.
      </p>
      <p>
        By combining open source development and consulting,{" "}
        <span className="highlight">yellow</span>{" "}
        <span className="highlight-secondary">sunflower</span> aims to help
        teams and individuals get the most out of their data. The focus is
        always the same: <b>making data work for humans</b>. Whether through
        tools, guidance, or collaboration, the goal is to turn data into
        insight, understanding, and action.
      </p>
      <p>
        If you are curious, want to contribute, or are interested in working
        together, feel free to explore our{" "}
        <Link href="https://github.com/y-sunflower">GitHub</Link>, check our{" "}
        <Link href="https://www.linkedin.com/company/yellow-sunflower/">
          LinkedIn
        </Link>
        , or get in touch through this website. Let’s make data human, together.
      </p>

      <p>
        If this makes sense to you, please feel free to{" "}
        <Link href="/#contact">contact me</Link>.
      </p>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <p>
          <b>Let the journey begin!</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/logo.png"
          style={{ maxWidth: "20%", height: "auto" }}
          className="rotate"
        />
      </div>
    </div>
  );
};

export const metadata = {
  title: blogPostData.title,
  description: blogPostData.description,
};

export default BlogPost1Content;
