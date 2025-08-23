import "../../../styles/blog.css";

export const blogPostData = {
  slug: "introducing-yellow-sunflower",
  title: "Introducting yellow sunflower",
  description:
    "A new organization to promote and develop open source tools for data visualization and storytelling",
  image: "/logo.png",
  readingTime: "3 min",
};

const BlogPost1Content = () => {
  return (
    <div
      className="container blog-post-container"
      style={{ marginTop: "10rem" }}
    >
      <h1>{blogPostData.title}</h1>
      <p className="blog-description blog-header">{blogPostData.description}</p>

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
