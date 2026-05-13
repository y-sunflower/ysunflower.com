import "../../../styles/blog.css";
import { blogPostData } from "./data";
import CodeBlock from "../../../components/CodeBlock";

const BlogPost2Content = () => {
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

      <h2>Data and PDFs</h2>
      <p>
        When people want to create PDFs containing data (charts, statistics,
        figures, etc.), they often need to:
      </p>
      <ul>
        <li>Fetch, clean, and visualize their data</li>
        <li>Then put everything into a document</li>
      </ul>
      <p>
        Fortunately, tools like{" "}
        <a href="https://quarto.org/" target="_blank">
          Quarto
        </a>{" "}
        let us keep those two steps in the same document. However, many people
        want to export to a single specific format (PDF, HTML, etc.), and Quarto
        then becomes mainly useful because of its unified interface, especially
        with Typst.
      </p>
      <p>
        But working with Typst inside a Quarto document is not a great
        experience: there is no language server and no auto-completion. So you
        often need to create a separate Typst file and call that file from
        Quarto, which <b>works well</b>, but also reduces the benefit of having
        everything in a single document.
      </p>
      <p>
        Instead, we could have a separate R file and a Typst file: one controls
        the data logic while the other controls the styling of the document.
      </p>

      <h2>
        Introducing: <code>tynding</code>
      </h2>
      <p>
        The aim of tynding is to make creating PDFs with R and Typst as simple
        as possible. In your R script(s), you can write as much as you want:
        fetch, clean, and visualize your data, then send all of that information
        to a Typst document.
      </p>
      <CodeBlock lang="R">{`
library(tynding)

typst_compile(
  "file.typ",
  title = "Quarterly report",
  author = "Joseph",
  persons = list(
    list(name = "Joseph", age = 25),
    list(name = "Justine", age = 24),
    list(name = "Isaac", age = 2)
  )
)
`}</CodeBlock>
      <p>On the Typst side (file.typ):</p>
      <CodeBlock lang="typst">{`
#set page(width: 10cm, height: 4cm, fill: rgb("#fca311"))

#let title = sys.inputs.at("title")
#let author = sys.inputs.at("author")
#let persons = json.decode(sys.inputs.at("persons"))

= #title
*Author:* #author

#for person in persons [
  #strong(person.name) is *#person.age* years old. \
]
`}</CodeBlock>
      <img
        src={
          "https://raw.githubusercontent.com/y-sunflower/tynding/main/example1.png"
        }
        alt=""
      />
      <p>
        Tynding automatically sends your inputs to the Typst document and
        JSON-encodes objects with a length greater than 1. This means that{" "}
        <b>you can send many kinds of R objects to Typst</b>: vectors, data
        frames, strings, numbers, etc.
      </p>

      <h2>Native Typst experience</h2>
      <p>You can use Typst in two ways:</p>
      <ul>
        <li>
          Using the{" "}
          <a href="https://typst.app/play/" target="_blank">
            official web app
          </a>
        </li>
        <li>Using the Typst compiler locally</li>
      </ul>
      <p>
        In the latter case, you need to install it. But once it is installed,
        you can only use it from the terminal (CLI), not directly from R. The{" "}
        <a href="https://christophertkenny.com/typr/" target="_blank">
          <code>typr</code>
        </a>{" "}
        package wraps the Typst CLI to let you use it from R, which is a
        convenient way to build on top of CLIs in general.
      </p>
      <p>
        But <code>tynding</code> uses a more &quot;native&quot; approach by
        using the actual Typst compiler under the hood. Thanks to Typst being
        built in Rust and to{" "}
        <a href="https://extendr.rs/" target="_blank">
          <code>extendr</code>
        </a>
        , building Rust-based R packages has become much simpler, much like
        using C++ in many other R packages.
      </p>
      <p>
        This means that once <code>tynding</code> is installed, you&apos;re
        ready to compile Typst documents. No need to install anything else
        separately.
      </p>

      <h2>Learn more</h2>
      <p>
        This is just a short overview of tynding, but you can learn more and
        find more examples{" "}
        <a href="https://github.com/y-sunflower/tynding" target="_blank">
          here
        </a>
        .
      </p>
    </div>
  );
};

export const metadata = {
  title: blogPostData.title,
  description: blogPostData.description,
  openGraph: {
    title: blogPostData.title,
    description: blogPostData.description,
    images: [blogPostData.image],
  },
  twitter: {
    card: "summary_large_image",
    title: blogPostData.title,
    description: blogPostData.description,
    images: [blogPostData.image],
  },
};

export default BlogPost2Content;
