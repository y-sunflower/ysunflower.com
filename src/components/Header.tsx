import React from "react";
import Link from "next/link";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="container header-content">
        <nav>
          <ul id="navMenu">
            <li>
              <Link href="/#">
                <span className="name">
                  <span className="highlight">yellow</span>{" "}
                  <span className="highlight-secondary">sunflower</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#opensource">open source</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
