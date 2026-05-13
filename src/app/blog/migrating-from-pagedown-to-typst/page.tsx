import "../../../styles/blog.css";
import Link from "next/link";
import { blogPostData } from "./data";
import CodeBlock from "../../../components/CodeBlock";
import Quote from "../../../components/Quote";

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

      <p>
        Pagedown has been a go-to tool for generating PDF reports from R, but it
        comes with some friction such as slow compilation, sprawling CSS, and
        bugs that get harder to fix as templates grow. This post is about why
        Typst is a compelling alternative, and what a migration from pagedown
        looks like in practice.
      </p>

      <h2>PDFs with data</h2>
      <p>
        When we need to create PDF reports that include data (charts,
        statistics, ...), we often use tools like:
      </p>
      <ul>
        <li>
          <Link href="https://rmarkdown.rstudio.com/">R Markdown</Link>: works
          mostly with the R programming language
        </li>
        <li>
          <Link href="https://quarto.org/">Quarto</Link>: a modern alternative
          to R Markdown, with support for more languages
        </li>
      </ul>
      <p>
        Those tools work with markdown-like documents that are then converted to
        PDF using a specific engine. For a long time, people used LaTeX because
        it offers a solid PDF engine, but its syntax isn't very intuitive and
        it's hard to do advanced customization.
      </p>
      <p>
        Then people from the web development world started using web
        technologies (HTML & CSS) to create PDFs. The main benefit of this is
        that CSS (the language used to style <b>every</b> website) is a tool
        meant for styling content, from colors to layouts, shapes, etc., AND has
        "print" features. We can use Chrome in headless mode (e.g., without
        opening the Chrome application) to take a screenshot of our pages, and
        we get a PDF from a web page!
      </p>
      <p>
        Some tools also started to appear to make this process simpler, in
        particular:{" "}
        <Link href="https://github.com/rstudio/pagedown">pagedown</Link>.
      </p>

      <h2>Pagedown and PDFs</h2>
      <p>
        Pagedown is "just" an R wrapper around{" "}
        <Link href="https://pagedjs.org/">paged.js</Link>, a JavaScript library
        that does the HTML/CSS to PDF conversion under the hood. It's mostly
        meant to be used within R Markdown.
      </p>
      <p>
        <b>Pagedown works very well</b>: you can create very complex PDFs,
        automate what needs to be automated, and it feels like a robust tool.
        The catch is that you often need to write lots of CSS, or even sometimes
        JavaScript, which isn't fun or easy, even with the help of AI since this
        field is quite niche.
      </p>
      <p>
        And the more advanced the template, the more this hurts. I've built
        Pagedown templates with hundreds, if not more, lines of CSS/JavaScript:
        they work, but at that scale fixing bugs becomes complex, and
        compilation gets hella slow.
      </p>
      <p>
        Then I started hearing about{" "}
        <Link href="https://typst.app/home">Typst</Link>, a language designed
        just to create PDFs. And many people are saying it's really good, so I
        decided to give it a try.
      </p>
      <Quote
        description="I'm blown away by the compilation speed and how easy it is to work with! I wish Typst existed 3 years ago when we were building out our other reports [...] and when I was writing my PhD thesis."
        author="Ben Butler, Co-founder & CSO at Soil Benchmark"
        author_link="https://www.soilbenchmark.com/about"
      />

      <h2>
        <Link href="https://typst.app/home">Typst</Link>: a new way to create
        PDFs
      </h2>
      <p>
        Typst is amazing. It's a tool that is really modern, built for humans,
        with a great focus on syntax readability, opinionated choices and
        amazing performance.
      </p>
      <p>
        Like any other tool, you need to learn how to use it, but this one
        really feels intuitive once you start using it, especially compared to
        CSS, which stays hard even after hours spent using it.
      </p>
      <br />
      <h3>Typst integration</h3>
      <p>
        The simplest way to go from Pagedown to Typst is to use it with Quarto
        and specify the Typst format:
      </p>
      <CodeBlock lang="quarto">{`
---
title: "Hello Typst!"
format: typst
---
      `}</CodeBlock>
      <p>
        And now Quarto will automatically use Typst to create your PDF! The
        default template isn't really good-looking, but Quarto has great
        features for Typst that let you define custom, reusable templates and
        write Typst code directly.
      </p>
      <br />
      <h3>Typst syntax</h3>
      <p>
        Typst can feel weird at first because it's a markup language (e.g.,
        markdown, HTML, etc.) with scripting features (think <code>if</code>/
        <code>else</code> statements, functions, <code>for</code> loops, etc.).
        Take a moment and try to understand the following code:
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
        Typst is fast, <i>really</i> fast. When you compare it to pagedown, you
        get something between 5x and 15x faster, depending on whether you use
        Quarto with Typst or Typst directly. This adds up quickly as soon as you
        try to automate your PDF generation and/or make a lot of iterations on
        your project.
      </p>
      <img
        src={"/blog/pagedown-typst-benchmark.png"}
        alt="Bar chart comparing PDF rendering times for a 12-page document using three tools: pagedown, Quarto + Typst, and Typst alone. Two grouped comparisons are shown: mean rendering time and median rendering time, each based on 15 runs. For the mean times, pagedown takes 5.9 seconds, Quarto + Typst takes 1.2 seconds, and Typst takes 0.36 seconds. For the median times, pagedown takes 5.8 seconds, Quarto + Typst takes 1.2 seconds, and Typst takes 0.35 seconds. The chart subtitle states that Typst is on average 16.5 times faster than pagedown, while Quarto + Typst is 4.9 times faster than pagedown. It also notes that Typst skips Quarto’s pandoc step by using the bare CLI directly, while Quarto + Typst still uses the Typst engine through Quarto. Pagedown bars are dark red, Quarto + Typst bars are teal, and Typst bars are dark blue. The y-axis ranges from 0 to 6 seconds."
        style={{ border: "1px solid #ccc", borderRadius: "8px", width: "100%" }}
      />
      <p>
        You can find the code for this benchmark{" "}
        <Link href="https://github.com/JosephBARBIERDARNAL/pagedown-typst-benchmark">
          here
        </Link>
        .
      </p>

      <h2>Sooo, should you migrate to Typst?</h2>
      <p>
        The answer is probably yes, but this requires some nuance. If you like
        pagedown and if it works for you, then keep using it!{" "}
        <b>No need to fix a problem that doesn't exist</b>.
      </p>
      <p>
        On the other hand, if your PDF generation feels slow, you feel limited
        by what you're able to do, and you want to use more modern solutions,
        then it might be a good time to investigate what Typst can do for you.
        It's unlikely that you'll find something Typst <b>can't</b> do, and even
        more unlikely that you'll ever want to go back. Once you start using
        Typst, you don't want to stop.
      </p>

      <h2>How to migrate?</h2>
      <p>
        This blog post isn't meant to provide an end-to-end solution on how to
        migrate, but rather give you hints on which direction to go.
      </p>
      <ul>
        <li>
          Use Quarto instead of Rmarkdown: the first step is to rename your{" "}
          <b>.Rmd</b> files to <b>.qmd</b>.
        </li>
        <li>
          Swap the output format in your YAML header from{" "}
          <code>pagedown::html_paged()</code> to <code>format: typst</code>.
        </li>
        <li>
          Drop your CSS files: Typst handles styling natively, so most of your
          custom CSS becomes unnecessary (and what's left can be rewritten as a
          Typst template).
        </li>
        <li>
          Translate your custom components: anything you built with HTML/CSS
          (headers, footers, cards, etc.) needs to be rewritten as Typst
          functions. The good news is that it's usually much shorter.
        </li>
        <li>
          Keep your R code chunks as they are: Quarto runs them the same way,
          regardless of the output format.
        </li>
      </ul>
      <p>
        Each step here can take more or less time, and be more or less complex.
        Migrating a complex pagedown template isn't a one-hour thing!
      </p>

      <h2>
        Typst and R <i>without</i> Quarto
      </h2>
      <p>
        Note that you can also easily use Typst from R without using Quarto.
        This is possible thanks to{" "}
        <Link href="https://github.com/y-sunflower/tynding">tynding</Link>, an R
        package that lets you create your PDFs from R. This also means that
        you'll need to know Typst, and you'll lose some Quarto features. You can
        learn more{" "}
        <Link href="https://github.com/y-sunflower/tynding">here</Link>.
      </p>

      <h2>Going further</h2>
      <ul>
        <li>
          <Link href="https://typst-in-production.com/">
            Typst in production
          </Link>
          : a guide on how to use Typst, from learning the basic principles to
          more advanced concepts such as templating, automation or
          accessibility.
        </li>
        <li>
          <Link href="https://quarto.org/docs/output-formats/typst.html">
            Quarto and Typst
          </Link>
          : an introduction on how to use Typst in Quarto.
        </li>
        <li>
          <Link href="/#contact">Contact us</Link> for consulting/training.
        </li>
      </ul>
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

export default BlogPost3Content;
