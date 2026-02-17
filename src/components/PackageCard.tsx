"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/package-card.css";

interface PackageCardProps {
  packageName: string;
  packageLang: string;
  packageDescription: string;
  isBeta: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  packageName,
  packageLang,
  packageDescription,
  isBeta,
}) => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [downloadCount, setDownloadCount] = useState<string | null>(null);

  const documentationUrl = `https://y-sunflower.github.io/${packageName}/`;
  const logoUrl = `https://github.com/JosephBARBIERDARNAL/static/blob/main/python-libs/${packageName}/image.png?raw=true`;
  const altText = `${packageName} ${packageLang} package official logo`;

  useEffect(() => {
    async function fetchGitHubStars() {
      try {
        const res = await fetch(
          `/api/github-stars?user=y-sunflower&repo=${packageName}`,
        );
        const data = await res.json();
        if (data.stargazers_count !== undefined) {
          setStarCount(data.stargazers_count);
        } else {
          setStarCount(null);
        }
      } catch (err) {
        console.error("Error fetching GitHub stars:", err);
        setStarCount(null);
      }
    }

    fetchGitHubStars();
  }, [packageName]);

  useEffect(() => {
    async function fetchDownloadCount() {
      if (packageLang !== "Python") {
        setDownloadCount("N/A");
        return;
      }

      try {
        const svgUrl = `https://static.pepy.tech/badge/${packageName}`;
        const res = await fetch(svgUrl);
        if (!res.ok)
          throw new Error(`Failed to fetch PyPI badge: ${res.status}`);

        const svgString = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgString, "image/svg+xml");
        const textNodes = Array.from(doc.getElementsByTagName("text"));
        const values = textNodes
          .map((el) => el.textContent?.trim())
          .filter((t) => t && t.toLowerCase() !== "downloads");

        if (values.length) {
          setDownloadCount(values[0]!);
        } else {
          setDownloadCount("N/A");
        }
      } catch (err) {
        console.error("Error fetching PyPI downloads:", err);
        setDownloadCount("N/A");
      }
    }
    fetchDownloadCount();
  }, [packageLang, packageName]);

  return (
    <>
      <div className="package-card">
        <div className="package-header">
          <div className="package-image">
            <Image src={logoUrl} alt={altText} width="200" height="200" />
          </div>
          <div>
            <div className="package-title">{packageName}</div>
            <div className="package-meta">
              <span className="package-badge package-badge-lang">
                {packageLang}
              </span>
              <span
                className={`package-badge ${
                  isBeta ? "package-badge-beta" : "package-badge-stable"
                }`}
              >
                {isBeta ? "Beta" : "Stable"}
              </span>
            </div>
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
              <span className="star-count">
                {starCount !== null ? starCount : "..."}
              </span>
            </div>
            <div className="stat" data-pypi={packageName}>
              <Image
                src="/download.svg"
                alt="download button icon"
                height="22"
                width="22"
              />
              <span className="download-count">
                {downloadCount !== null ? downloadCount : "..."}
              </span>
            </div>
            <div className="stat-doc-link">
              <Link
                href={documentationUrl}
                className="link-btn primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
