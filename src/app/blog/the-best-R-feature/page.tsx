import "../../../styles/blog.css";

export const blogPostData = {
  slug: "the-best-R-feature",
  title: "The best R feature",
  description: "The most underrated R feature that should know (and use!)",
  image: "/blog/the-best-R-feature.png",
  readingTime: "3 min",
  body: "R reads functions differently than many programming languages. It uses lazy-evaluation, which allows writing nice code patterns.",
};

const BlogPost2Content = () => {
  return (
    <div
      className="container blog-post-container"
      style={{ marginTop: "10rem" }}
    >
      <h1>{blogPostData.title}</h1>
      <p className="blog-description blog-header">{blogPostData.body}</p>

      <h2>title</h2>
      <p>Hell</p>
    </div>
  );
};

export const BlogPost2 = {
  ...blogPostData,
  content: <BlogPost2Content />,
};

export default BlogPost2Content;
