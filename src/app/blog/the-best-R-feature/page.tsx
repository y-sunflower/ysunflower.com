import "../../../styles/blog.css";
import { blogPostData } from "./data";

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
    </div>
  );
};

export const metadata = {
  title: blogPostData.title,
  description: blogPostData.description,
};

export default BlogPost2Content;
