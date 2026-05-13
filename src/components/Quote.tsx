import "../styles/quote.css";
import Link from "next/link";

type QuoteProps = {
  description: string;
  author?: string;
  author_link?: string;
};

export default function Quote({
  description,
  author,
  author_link,
}: QuoteProps) {
  return (
    <blockquote className="quote">
      <p className="quote-description">{description}</p>
      {author &&
        (author_link ? (
          <Link href={author_link} target="_blank">
            <div className="quote-author">— {author}</div>
          </Link>
        ) : (
          <div className="quote-author">— {author}</div>
        ))}
    </blockquote>
  );
}
