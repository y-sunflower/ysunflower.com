import React from "react";
import type { NextPage } from "next";

const CONTACT_EMAIL = "joseph@ysunflower.com";

const company = {
  brand: "yellow sunflower",
  legalName: "Joseph Barbier",
  status: "Auto-entrepreneur (French sole-proprietor)",
  siret: "978 038 776 00016",
  address: "75 rue Kléber, 33800 Bordeaux, France",
};

const host = {
  name: "Vercel Inc.",
  address: "340 S Lemon Ave #4133, Walnut, CA 91789, United States",
  website: "https://vercel.com",
};

const Legal: NextPage = () => {
  return (
    <main style={styles.container}>
      <article style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Legal Notice & Terms</h1>
          <p style={styles.lead}>
            Legal, privacy and cookie information for{" "}
            <strong>{company.brand}</strong>
          </p>
        </header>

        <section style={styles.section}>
          <h2>1. Legal information</h2>
          <p>
            Operator / Legal name: <strong>{company.legalName}</strong> (
            {company.status})<br />
            SIRET: <strong>{company.siret}</strong>
            <br />
            Registered address: <strong>{company.address}</strong>
            <br />
            Brand: <strong>{company.brand}</strong>
          </p>
          <p>
            Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>2. Publishing director</h2>
          <p>
            Publishing Director: <strong>{company.legalName}</strong>
          </p>
        </section>

        <section style={styles.section}>
          <h2>3. Hosting</h2>
          <p>
            Hosting provider: <strong>{host.name}</strong>
            <br />
            Address: {host.address}
            <br />
            Website:{" "}
            <a
              href={host.website}
              style={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {host.website}
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2>4. Terms of Service</h2>
          <p>
            These Terms govern your use of the {company.brand} website and
            services. By using the site you agree to these Terms. If you do not
            agree, do not use the site.
          </p>

          <h3>Permitted use</h3>
          <p>
            You may browse and use the site for lawful, personal, non-commercial
            purposes. You agree not to take actions that interfere with the
            operation of the site, attempt unauthorized access, reverse-engineer
            code, or otherwise act in a way that harms the service.
          </p>

          <h3>Availability & updates</h3>
          <p>
            The site is provided “as is.” The operator may suspend, modify, or
            discontinue the site or services at any time. The operator does not
            guarantee continuous availability.
          </p>

          <h3>Intellectual property</h3>
          <p>
            All content (text, images, logos, code, designs, and media) on the
            site is protected by copyright and belongs to
            {` `}
            <strong>{company.legalName}</strong>
            {` `}or its licensors, unless explicitly stated otherwise.
            Reproduction, distribution, modification or re-use requires prior
            written permission.
          </p>
        </section>

        <section style={styles.section}>
          <h2>5. Privacy & Personal Data (GDPR compliance)</h2>

          <h3>Data controller</h3>
          <p>
            Data controller: <strong>{company.legalName}</strong>
            <br />
            Registered address: {company.address}
            <br />
            Contact:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
              {CONTACT_EMAIL}
            </a>
          </p>

          <h3>What we collect</h3>
          <p>
            We may collect personal data you provide voluntarily (name, email,
            messages), and technical data collected automatically (IP address,
            device and browser details, page visits, cookies and analytics
            identifiers).
          </p>

          <h3>Purpose & legal bases</h3>
          <ul>
            <li>
              To respond to your requests and communicate with you — legal
              basis: performance of a contract / legitimate interest.
            </li>
            <li>
              To operate, secure and improve the website — legal basis:
              legitimate interest.
            </li>
            <li>
              To comply with legal obligations — legal basis: legal compliance.
            </li>
          </ul>

          <h3>Recipients</h3>
          <p>
            Personal data may be processed by the operator and subprocessors
            (hosting provider, analytics providers, email services). Where data
            is transferred outside the EU, appropriate safeguards (standard
            contractual clauses or equivalent) are used by subprocessors when
            required.
          </p>

          <h3>Retention</h3>
          <p>
            Personal data is retained only as long as necessary for the purpose
            collected or to comply with legal obligations. Specific retention
            periods depend on the type of data and purpose; contact the
            controller (see Contact) for details.
          </p>

          <h3>Your rights</h3>
          <p>
            Under GDPR you have the right to: access, rectify, erase, restrict
            processing, portability, and object to processing. To exercise your
            rights, email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
              {CONTACT_EMAIL}
            </a>
            . You also have the right to lodge a complaint with a supervisory
            authority (e.g., CNIL in France).
          </p>
        </section>

        <section style={styles.section}>
          <h2>6. Cookies & Tracking</h2>
          <p>
            The site may use cookies and similar technologies for essential
            operation, analytics, and to improve user experience. You can manage
            or disable cookies via your browser settings. Disabling certain
            cookies may affect site functionality.
          </p>

          <h3>Types of cookies</h3>
          <ul>
            <li>
              <strong>Essential:</strong> required for site operation (no
              consent required).
            </li>
            <li>
              <strong>Analytics:</strong> used to measure and improve site
              performance (may require consent).
            </li>
            <li>
              <strong>Functional/Optional:</strong> used to remember preferences
              (may require consent).
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>7. Third-party links & services</h2>
          <p>
            The site may include links to third-party websites and services
            (e.g., payment providers, social networks, analytics). The operator
            is not responsible for the privacy practices, terms, or content of
            those third parties.
          </p>
        </section>

        <section style={styles.section}>
          <h2>8. Limitation of liability</h2>
          <p>
            To the extent permitted by law, {company.legalName} will not be
            liable for indirect, incidental, special, or consequential damages
            arising from the use or inability to use the site, or from reliance
            on site content.
          </p>
        </section>

        <section style={styles.section}>
          <h2>9. Governing law & jurisdiction</h2>
          <p>
            These Terms and all disputes related to the site are governed by
            French law. Competent courts in France shall have jurisdiction,
            unless mandatory rules provide otherwise.
          </p>
        </section>

        <section style={styles.section}>
          <h2>10. Updates to these documents</h2>
          <p>
            The operator may update this page at any time. The current version
            displayed on the site is effective immediately upon publication. We
            recommend checking this page periodically.
          </p>
        </section>

        <section style={styles.section}>
          <h2>11. Data breach & security</h2>
          <p>
            Reasonable technical and organizational measures are taken to
            protect personal data. In case of a personal data breach that poses
            a risk to your rights and freedoms, we will notify the competent
            supervisory authority and, where required, the affected individuals,
            in accordance with applicable law.
          </p>
        </section>

        <section style={styles.section}>
          <h2>12. Contact</h2>
          <p>
            For any questions, requests, or to exercise your data subject
            rights, contact:
          </p>
          <p>
            <strong>{company.legalName}</strong>
            <br />
            {company.address}
            <br />
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={styles.link}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </article>
    </main>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "48px 16px",
    minHeight: "100vh",
    marginTop: "10rem",
  },
  card: {
    maxWidth: 900,
    width: "100%",
    background: "#fff",
    padding: "32px",
    borderRadius: 10,
    boxShadow: "0 6px 22px rgba(16,24,40,0.08)",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    margin: 0,
    fontSize: 28,
  },
  lead: {
    marginTop: 8,
    color: "#444",
  },
  section: {
    marginTop: 20,
  },
  link: {
    color: "#0066cc",
    textDecoration: "underline",
  },
  footer: {
    marginTop: 28,
    borderTop: "1px solid #eee",
    paddingTop: 12,
    textAlign: "center",
    color: "#666",
  },
};

export default Legal;
