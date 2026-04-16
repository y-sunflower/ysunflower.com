"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="header">
      <div className="container header-content">
        <Link href="/#" onClick={closeMenu}>
          <span className="name" style={{ fontSize: "1.5em" }}>
            <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>
          </span>
        </Link>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMenuOpen ? "active" : ""}>
          <ul id="navMenu">
            <li>
              <Link href="/#consulting" onClick={closeMenu}>
                consulting
              </Link>
            </li>
            <li>
              <Link href="/open-source" onClick={closeMenu}>
                open source
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                blog
              </Link>
            </li>
            <li>
              <a href="/about" onClick={closeMenu}>
                about
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
