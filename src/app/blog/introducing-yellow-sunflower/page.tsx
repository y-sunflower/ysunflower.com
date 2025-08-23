import "../../../styles/blog.css";

export const blogPostData = {
  slug: "introducting-yellow-sunflower",
  title: "Introducting yellow sunflower",
  description:
    "A new organization to promote and develop open source tools for data visualization and storytelling",
  image: "/logos/ys/image.png",
  readingTime: "3 min",
  body: "R reads functions differently than many programming languages. It uses lazy-evaluation, which allows writing nice code patterns.",
};

const BlogPost1Content = () => {
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

export const BlogPost1 = {
  ...blogPostData,
  content: <BlogPost1Content />,
};

export default BlogPost1Content;
