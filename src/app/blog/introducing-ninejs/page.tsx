import "../../../styles/blog.css";
import { blogPostData } from "./data";
import CodeBlock from "../../../components/CodeBlock";

const BlogPost4Content = () => {
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

      <h2>Why another plotting package?</h2>
      <p>
        I use{" "}
        <a href="https://plotnine.org/" target="_blank">
          plotnine
        </a>{" "}
        a lot. It has a grammar that feels natural when you want to build a
        chart layer by layer, and it fits nicely into Python data workflows. But
        once a chart is rendered, it is <b>static</b>. That is often fine, until
        you want a reader to inspect a point, follow a line, or connect the same
        observation across multiple panels.
      </p>
      <p>
        <code>ninejs</code> is my attempt to keep the plotnine workflow and add
        a thin layer of browser interactivity on top of it. You build the chart
        as a normal plotnine object, add a few extra aesthetics such as{" "}
        <code>tooltip</code>, <code>hover_group</code>, <code>hover_key</code>,
        or <code>on_click</code>, then export a standalone HTML file.
      </p>
      <p>
        <code>ninejs</code> isn't a plotting library but rather a{" "}
        <code>plotnine</code> extension. There is no plotting engine and just
        adds the interactivity touch, which keeps it fairly lightweight!
      </p>

      <h2>
        Introducing: <code>ninejs</code>
      </h2>
      <p>
        The chart below is a regular plotnine chart; the only difference is that
        the data mapped in <code>aes()</code> also contains interaction
        metadata.
      </p>
      <CodeBlock lang="python">{`
from plotnine import aes, geom_point, ggplot, theme_minimal
from plotnine.data import anscombe_quartet

from ninejs import css, interactive, save

gg = (
    ggplot(
        anscombe_quartet,
        aes(
            x="x",
            y="y",
            color="dataset",
            tooltip="dataset",
            hover_group="dataset",
        ),
    )
    + geom_point(size=7, alpha=0.5)
    + theme_minimal()
)

interactive(gg, hover_nearest=True)
`}</CodeBlock>
      <iframe
        width="100%"
        height="560"
        src="/blog/ninejs-quickstart.html"
        style={{ border: "none" }}
        title="Interactive Anscombe quartet chart made with ninejs"
      />
      <p>
        The code is almost identical to the original plotnine chart. The
        interactive part is not a separate JavaScript chart specification; it is
        attached to the same variables that already define the plot.
      </p>

      <h2>Linked hover between panels</h2>
      <p>
        One feature I wanted early was linked hover. If the same row appears in
        two views, hovering it in one view should highlight it in the other.
      </p>
      <CodeBlock lang="python">{`
import plotnine as gg
from plotnine.data import mtcars

from ninejs import css, interactive, save

mtcars = mtcars.rename(columns={"name": "carname"}).copy()
mtcars["car_id"] = mtcars["carname"].str.replace(r"\\W+", "-", regex=True)
mtcars["tooltip"] = [
    f"{carname}<br>MPG: {mpg}<br>Displacement: {disp}<br>Quarter mile: {qsec}s"
    for carname, mpg, disp, qsec in zip(
        mtcars["carname"],
        mtcars["mpg"],
        mtcars["disp"],
        mtcars["qsec"],
        strict=True,
    )
]

mapping = gg.aes(tooltip="tooltip", hover_group="car_id", hover_key="car_id")

scatter_plot = (
    gg.ggplot(mtcars, gg.aes("disp", "qsec"))
    + gg.geom_point(mapping=mapping, size=3, fill="#333333", color="#333333")
    + gg.theme_minimal(base_size=10)
)

bar_plot = (
    gg.ggplot(mtcars, gg.aes("reorder(carname, mpg)", "mpg"))
    + gg.geom_col(mapping=mapping, fill="#8ecae6", color="white", size=0.35)
    + gg.coord_flip()
    + gg.theme_minimal(base_size=10)
)

plot = scatter_plot | bar_plot

(
    interactive(plot, hover_nearest=True)
    + css(from_dict={".plot-element.hovered": {"fill": "#d62828"}})
)
`}</CodeBlock>
      <iframe
        width="100%"
        height="520"
        src="/blog/ninejs-linked-panels.html"
        style={{ border: "none" }}
        title="Linked mtcars panels made with ninejs"
      />
      <p>
        The important part is <code>hover_key</code>. The scatter point and the
        bar are two different SVG elements in two different panels, but they
        carry the same key. <code>ninejs</code> uses that key in the browser to
        apply the hover state to both elements at the same time.
      </p>

      <h2>What it can do</h2>
      <p>
        The package currently supports <b>all common plotnine geoms</b> such as
        points, lines, paths, bars, histograms, areas, ribbons, and maps. Facets
        also work, and the generated output is a self-contained HTML document
        with the required JavaScript and CSS included.
      </p>
      <p>
        You can also bring your own styling and behavior. <code>css()</code>{" "}
        lets you override the tooltip or hover states, while{" "}
        <code>javascript()</code> and <code>on_click</code> let you add custom
        browser-side behavior when a chart needs something more specific.
      </p>

      <h2>Learn more</h2>
      <p>
        This is just a short overview of <code>ninejs</code>. You can read the
        documentation{" "}
        <a href="https://y-sunflower.github.io/ninejs/" target="_blank">
          here
        </a>
        , browse the gallery of examples{" "}
        <a href="https://y-sunflower.github.io/ninejs/gallery/" target="_blank">
          here
        </a>
        , and find the source code{" "}
        <a href="https://github.com/y-sunflower/ninejs" target="_blank">
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

export default BlogPost4Content;
