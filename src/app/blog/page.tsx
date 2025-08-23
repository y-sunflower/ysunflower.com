import { blogPosts } from "./blog-list";
import "../../styles/blog.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Posts</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-heading">{post.title}</h2>
                <p className="blog-description">{post.description}</p>
                <div className="blog-footer">
                  <span className="blog-item-footer">
                    {post.readingTime} read
                  </span>
                  <span className="blog-item-footer">{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
