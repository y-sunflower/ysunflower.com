import "../../../styles/blog.css";
import { blogPostData } from "./data";
import CodeBlock from "../../../components/CodeBlock";

const BlogPost3Content = () => {
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

      <h2>PDF with data</h2>
      <p>
        When we need to create PDF reports with data inside of it (charts,
        statistics, ...), we often use tools like:
      </p>
      <ul>
        <li>RMarkdown: works mostly with the R programming language</li>
        <li>
          Quarto: a modern alternative to Rmarkdown, with support for more
          languages
        </li>
      </ul>
      <p>
        Those tools live in markdown-like documents that are then converted to
        PDF using a specific engine. For a long time, people were using LaTeX
        since it offers a solid PDF engine, but its syntax isn't very intuitive
        and it's hard to do advanced customization.
      </p>
      <p>
        Then people from the web development world started using web
        technologies (HTML & CSS) to create PDFs. The main pros of this is that
        CSS (language used to style <b>every</b> website) is a tool meant for
        styling content, from colors, to layout, shapes, etc, AND has "print"
        features. We can use Chrome in headless mode (e.g., without opening the
        Chrome Application) to take a screenshot of our pages, and we get a PDF
        from a web page!
      </p>
      <p>
        Some tools also started to appear in order to make this process simpler,
        in particular: Pagedown.
      </p>

      <h2>Pagedown and PDFs</h2>
      <p>
        Pagedown is "just" an R wrapper of paged.js, a JavaScript library which
        does the HTML/CSS to PDF conversion under the hood. It's mostly meant to
        be used within RMarkdown.
      </p>
      <p>
        <b>Pagedown works very well</b>: you'll be able to create very complex
        PDFs, automate what needs to be automate, and it feels like a robust
        tool. The thing is, you often need to write lots of CSS or even
        sometimes JavaScript, which isn't fun or easy, even with the help of AI
        since this field is quite niche.
      </p>
      <p>
        I have created Pagedown templates with hundreds, if not more, lines of
        CSS/JavaScript. It works, but fixing bug becomes complex as the codebase
        grow, and it's hella slow.
      </p>
      <p>
        Then I started hearing about Typst, a language designed just to create
        PDFs. And many people are saying it's really good, so I decided to give
        it a try.
      </p>

      <h2>Typst: a new way to create PDFs</h2>
      <p>
        Typst is amazing. It's a tool that is really modern, built for humans,
        with a great focus on syntax readability, opiniated choices and amazing
        performances.
      </p>
      <p>
        Like any other tool you need to learn how to use it, but this one really
        feels intuitive once you start using it, especially compared to CSS that
        stays hard even with hours spent using it.
      </p>
      <br />
      <h3>Typst integration</h3>
      <p>
        The simplest way to go from Pagedown to Typst is to use it with Quarto
        and specify the typst format:
      </p>
      <CodeBlock lang="quarto">{`
---
title: "Hello Typst!"
format: typst
---
      `}</CodeBlock>
      <p>
        And now your PDF engine will automatically use Typst! The default
        template isn't really good looking, but Quarto has great features for
        Typst that let you define custom and reusable templates.
      </p>
      <br />
      <h3>Typst syntax</h3>
      <p>
        Typst can feel weird at first because it's a markup language (e.g.,
        markdown, HTML, etc) with scripting features (think <code>if</code>/
        <code>else</code> statements, functions, <code>for</code> loops, etc).
      </p>
      <CodeBlock lang="typst">{`
#let my-component(lab, col) = { // function definition
  align(horizon, stack(
      dir: ltr,                // left to right
      spacing: 0.3cm,          // space between circle and text
      circle(fill: col, width: 0.7cm),
      text(fill: col, lab)
   ))
}

#my-component("Ready", green)
#my-component("Pending", yellow)
#my-component("Blocked", orange)
      `}</CodeBlock>
      <img
        src={"/blog/typst-out-1.png"}
        alt=""
        style={{ border: "1px solid #ccc", borderRadius: "8px", width: "100%" }}
      />
      <br />
      <br />
      <br />
      <h3>Typst performance</h3>
      <p>
        Typst is fast, really fast. And this becomes even more true when you
        compare it to Pagedown.
      </p>

      <h2>Typst and R without Quarto</h2>
      <p>
        Note you can also, and easily, use Typst from R without using Quarto.
        This is possible thanks to tynding, an R package that lets you create
        your PDFs from R.
      </p>
      <p>You can learn more here.</p>

      <h2>Going further</h2>
      <ul>
        <li>
          Typst in production: learn Typst, how it integrates with other tools,
          etc
        </li>
        <li>Contact us for consulting/training</li>
      </ul>
    </div>
  );
};

export const metadata = {
  title: blogPostData.title,
  description: blogPostData.description,
};

export default BlogPost3Content;
