import React from "react";
import Link from "next/link";
import "../styles/button.css";

type PushButtonProps = {
  text: string;
  link: string;
  fontSize?: string;
};

export const PushButton: React.FC<PushButtonProps> = ({
  text,
  link,
  fontSize = "auto",
}) => {
  return (
    <p className="cool-button cool-button-tricks">
      <Link
        href={link}
        className="highlight-secondary push-button-link"
        style={{ textDecoration: "none", fontSize }}
      >
        {text}
      </Link>
    </p>
  );
};

export default PushButton;
