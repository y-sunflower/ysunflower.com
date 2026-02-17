import Link from "next/link";
import PushButton from "../../components/Button";
import PackageCard from "../../components/PackageCard";
import { packageList } from "../../lists/packages-list";
import { resourcesList } from "../../lists/resources-list";
import "../../styles/open-source.css";

export default function OpenSourcePage() {
  return (
    <>
      <section style={{ marginTop: "10rem" }}>
        <div className="container">
          <div className="opensource-text open-source-hero">
            <h2>
              <span className="bottom-line">
                <span className="name">
                  <span className="highlight">open</span>{" "}
                  <span className="highlight-secondary">source</span>
                </span>
              </span>
            </h2>
            <p>
              Open source is a core part of{" "}
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>. Our
              projects are permissively licensed and built to be practical,
              extensible, and ready for real-world reporting workflows.
            </p>
            <p>
              This page gathers core Python and R libraries and non-package
              resources like templates, guides, and websites from the{" "}
              <Link
                href="https://github.com/y-sunflower"
                target="_blank"
                rel="noopener noreferrer"
              >
                y-sunflower GitHub
              </Link>
              .
            </p>
          </div>

          <div className="open-source-stats">
            <div className="open-source-stat-card">
              <p className="open-source-stat-number">{packageList.length}+</p>
              <p className="open-source-stat-label">Core packages</p>
            </div>
            <div className="open-source-stat-card">
              <p className="open-source-stat-number">{resourcesList.length}</p>
              <p className="open-source-stat-label">Resource projects</p>
            </div>
            <div className="open-source-stat-card">
              <p className="open-source-stat-number">100%</p>
              <p className="open-source-stat-label">Public repositories</p>
            </div>
          </div>

          <div className="open-source-section-header" id="opensource-packages">
            <h3>Packages</h3>
            <p>
              Libraries designed for practical data visualization, reporting,
              and workflow quality.
            </p>
          </div>

          <div className="packages-grid">
            {packageList.map(
              ({ packageName, packageLang, packageDescription, isBeta }) => (
                <PackageCard
                  key={packageName}
                  packageName={packageName}
                  packageLang={packageLang}
                  packageDescription={packageDescription}
                  isBeta={isBeta}
                />
              ),
            )}
          </div>

          <div
            className="open-source-section-header"
            style={{ marginTop: "6rem" }}
            id="opensource-resources"
          >
            <h3>Resources</h3>
            <p>
              Templates, guides, websites, and utility projects that are not
              package-first repositories.
            </p>
          </div>

          <div className="resource-grid">
            {resourcesList.map(
              ({
                resourceName,
                resourceKind,
                resourceDescription,
                repositoryUrl,
                websiteUrl,
              }) => (
                <article className="resource-card" key={resourceName}>
                  <p className="resource-kind">{resourceKind}</p>
                  <h4>{resourceName}</h4>
                  <p>{resourceDescription}</p>
                  <div className="resource-links">
                    <Link
                      href={repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </Link>
                    {websiteUrl ? (
                      <Link
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </Link>
                    ) : null}
                  </div>
                </article>
              ),
            )}
          </div>

          <div className="button-variant" style={{ marginTop: "4rem" }}>
            <PushButton
              text="Need support?"
              link="/#contact"
              fontSize="1.05em"
            />
          </div>
        </div>
      </section>
    </>
  );
}
