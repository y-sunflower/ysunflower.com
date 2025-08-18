import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/package-card.css";

interface PackageCardProps {
  packageName: string;
  packageDescription: string;
  packageTags: string[];
}

export const PackageCard: React.FC<PackageCardProps> = ({
  packageName,
  packageDescription,
  packageTags,
}) => {
  const githubUrl = `https://github.com/y-sunflower/${packageName}`;
  const documentationUrl = `https://y-sunflower.github.io/${packageName}/`;
  const logoUrl = `https://github.com/JosephBARBIERDARNAL/static/blob/main/python-libs/${packageName}/image.png?raw=true`;
  const altText = `${packageName} Python package official logo`;

  return (
    <>
      <div className="package-card">
        <div className="package-header">
          <div className="package-image">
            <Image src={logoUrl} alt={altText} width="200" height="200" />
          </div>
          <div>
            <div className="package-title">{packageName}</div>
          </div>
        </div>
        <div className="package-description">{packageDescription}</div>
        <div className="package-bottom">
          <div className="package-stats">
            <div
              className="stat"
              data-user="y-sunflower"
              data-repo={packageName}
            >
              <svg className="stat-icon" viewBox="0 0 16 16">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              <span className="star-count">...</span>
            </div>
            <div className="stat" data-pypi={packageName}>
              <Image
                src="/download.svg"
                alt="download button icon"
                height="22"
                width="22"
              />
              <span className="download-count">...</span>
            </div>
          </div>
          <div className="package-tags">
            {packageTags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="package-links">
            <Link
              href={documentationUrl}
              className="link-btn primary"
              target="_blank"
            >
              Documentation
            </Link>
            <Link
              href={githubUrl}
              className="link-btn secondary"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
