import "../styles/data-pipeline.css";

const dataInputs = [
  "Excel spreadsheets",
  "CSV exports",
  "Databases",
  "APIs",
  "Google Sheets",
];
const modernTools = [
  "Python and R pipelines",
  "Quarto and Typst templates",
  "Scheduled automations",
];
const reportOutputs = [
  "Production-ready PDF reports",
  "Web reports and dashboards",
  "Reliable recurring delivery",
];

export default function DataPipeline() {
  return (
    <div className="container">
      <div className="opensource-text">
        <h2>
          <span className="bottom-line">
            <span className="name">
              <span className="highlight">automated</span>{" "}
              <span className="highlight-secondary">reporting system</span>
            </span>
          </span>
        </h2>
        <p>
          From manual spreadsheets to automated reporting systems, we design
          workflows that are visual, reproducible, and easy to maintain. We help
          teams turn disconnected spreadsheets, CSV files, and operational data
          into <b>reports people can trust and act on</b>.
        </p>
      </div>

      <div className="pipeline-flow-shell" role="presentation">
        <div className="pipeline-flow-grid">
          <article className="flow-node flow-node-source">
            <p className="flow-kicker">DATA</p>
            <h3>Raw sources</h3>
            <div className="flow-chip-list">
              {dataInputs.map((source) => (
                <span className="flow-chip" key={source}>
                  {source}
                </span>
              ))}
            </div>
          </article>

          <div className="flow-connector" aria-hidden="true">
            <span className="flow-track"></span>
            <span className="flow-dot"></span>
          </div>

          <article className="flow-node flow-node-tools">
            <p className="flow-kicker">TRANSFORM</p>
            <h3>Automated workflows</h3>
            <div className="flow-chip-list">
              {modernTools.map((tool) => (
                <span className="flow-chip flow-chip-accent" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </article>

          <div className="flow-connector" aria-hidden="true">
            <span className="flow-track"></span>
            <span className="flow-dot"></span>
          </div>

          <article className="flow-node flow-node-output">
            <p className="flow-kicker">DELIVER</p>
            <h3>Reports for people</h3>
            <div className="flow-chip-list">
              {reportOutputs.map((output) => (
                <span className="flow-chip flow-chip-strong" key={output}>
                  {output}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className="flow-caption">
          <p>
            Transform fragmented data into automated, reproducible reports your
            team can trust.
          </p>
        </div>
      </div>
    </div>
  );
}
