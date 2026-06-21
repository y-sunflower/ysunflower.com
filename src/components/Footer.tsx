import React from "react";
import Link from "next/link";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container footer-container">
        <hr />
        <br />
        <br />
        <div className="footer-content">
          <div className="footer-col" style={{ marginRight: "3em" }}>
            <h3>
              <span className="name" style={{ color: "black" }}>
                yellow sunflower
              </span>
            </h3>
            <p>Data for humans</p>
          </div>
          <div className="footer-col">
            <h3>Open source</h3>
            <Link href="/open-source">All projects</Link>
            <Link href="/open-source#opensource-packages">
              Python & R packages
            </Link>
            <Link href="/open-source#opensource-resources">Resources</Link>
          </div>
          <div className="footer-col">
            <h3>Social</h3>
            <Link href="https://github.com/y-sunflower">Github</Link>
            <Link href="https://www.linkedin.com/in/joseph-barbier-4ab531224/">
              LinkedIn
            </Link>
            <Link href="https://www.youtube.com/@ysunflower-data">YouTube</Link>
          </div>
          <div className="footer-col">
            <h3>Terms & Policies</h3>
            <Link href="/legal">Legal</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 yellow sunflower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
