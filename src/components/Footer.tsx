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
              <span className="highlight-secondary">
                <span className="name">yellow sunflower</span>
              </span>
              🌻
            </h3>
            <p>Open tools for expressive data</p>
            <Link href="https://github.com/y-sunflower" target="_blank">
              <i className="fa fa-github" style={{ fontSize: "36px" }}></i>
            </Link>
          </div>
          <div className="footer-col">
            <h3>Open source</h3>
            <Link
              href="https://github.com/JosephBARBIERDARNAL/pypalettes"
              target="_blank"
            >
              pypalettes
            </Link>
            <Link href="https://github.com/y-sunflower/pyfonts" target="_blank">
              pyfonts
            </Link>
            <Link
              href="https://github.com/JosephBARBIERDARNAL/drawarrow"
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
            <Link href="https://github.com/y-sunflower/gifing" target="_blank">
              gifing
            </Link>
          </div>
          <div className="footer-col">
            <h3>Services</h3>
            <Link href="#">Data Visualization</Link>
            <Link href="#">Reproducible analysis</Link>
            <Link href="#">Package development</Link>
            <Link href="#">Training</Link>
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
