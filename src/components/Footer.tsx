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
          <div className="footer-col">
            <h3>
              <span className="name">yellow sunflower</span>
            </h3>
            <p>Open tools for expressive data</p>
          </div>
          <div className="footer-col">
            <h3>Open source</h3>
            <Link
              href="https://github.com/y-sunflower/pypalettes"
              target="_blank"
            >
              pypalettes
            </Link>
            <Link href="https://github.com/y-sunflower/pyfonts" target="_blank">
              pyfonts
            </Link>
            <Link
              href="https://github.com/y-sunflower/drawarrow"
              target="_blank"
            >
              drawarrow
            </Link>
            <Link
              href="https://github.com/y-sunflower/morethemes"
              target="_blank"
            >
              morethemes
            </Link>
            <Link href="https://github.com/y-sunflower/dayplot" target="_blank">
              dayplot
            </Link>
            <Link href="https://github.com/y-sunflower/bumplot" target="_blank">
              bumplot
            </Link>
          </div>
          <div className="footer-col">
            <h3>Socials</h3>
            <Link href="https://github.com/y-sunflower">Github</Link>
            <Link href="https://www.linkedin.com/company/yellow-sunflower/">
              LinkedIn
            </Link>
            <Link href="/about">About</Link>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <p>joseph.barbierdarnal@gmail.com</p>
            <p>Made in France</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 yellow sunflower. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
