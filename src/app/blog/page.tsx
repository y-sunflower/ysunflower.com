import PushButton from "@/src/components/Button";
import { blogPosts } from "./blog-list";
import "../../styles/blog.css";

export default function Home() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Posts</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.slug} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-heading">{post.title}</h2>
              <p className="blog-description">{post.description}</p>
              <div className="blog-footer">
                <span className="blog-time">{post.readingTime} read</span>
                <div style={{ fontWeight: "100" }}>
                  <PushButton text={"Read"} link={`/blog/${post.slug}`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
