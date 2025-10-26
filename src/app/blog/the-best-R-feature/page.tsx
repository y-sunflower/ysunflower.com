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

      {/* <h2>Tidy evaluation is sooo good!</h2> */}
      <p style={{ fontSize: "3em" }}>
        Oops! You&apos;re here a little early, this blog post is not available
        yet. Try to come back later!
      </p>
    </div>
  );
};

export default BlogPost2Content;
