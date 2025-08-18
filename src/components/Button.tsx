import React from "react";
import Link from "next/link";
import "../styles/button.css";

type PushButtonProps = {
  text: string;
  link: string;
};

export const PushButton: React.FC<PushButtonProps> = ({ text, link }) => {
  return (
    <>
      <Link href={link} style={{ textDecoration: "none" }}>
        <p className="cool-button cool-button-tricks">
          <b className="highlight-secondary" style={{ fontSize: "1.2em" }}>
            {text}
          </b>
        </p>
      </Link>
    </>
  );
};

export default PushButton;
