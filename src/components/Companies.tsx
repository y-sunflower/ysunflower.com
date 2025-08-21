export default function Companies() {
  const companies = [
    {
      href: "https://www.cnrs.fr/fr",
      src: "/logos/cnrs.png",
      alt: "CNRS logo",
      maxWidth: 100,
    },
    {
      href: "https://kantiles.com/",
      src: "/logos/kantiles.png",
      alt: "Kantiles logo",
      maxWidth: 140,
    },
    {
      href: "https://www.omni.org/",
      src: "/logos/omni.png",
      alt: "Omni institute logo",
      maxWidth: 140,
    },
    {
      href: "https://rfortherestofus.com/",
      src: "/logos/rfortherestofus.png",
      alt: "R for the rest of us logo",
      maxWidth: 100,
    },
    {
      href: "https://www.tfff.org/",
      src: "/logos/tfff.png",
      alt: "TFFF logo",
      maxWidth: 140,
    },
    {
      href: "https://www.aicrowd.com/",
      src: "/logos/aicrowd.svg",
      alt: "AIcrowd logo",
      maxWidth: 220,
    },
    {
      href: "https://www.westvalley.edu/",
      src: "/logos/wvc.png",
      alt: "West valley college logo",
      maxWidth: 240,
    },
    {
      href: "https://python-graph-gallery.com/",
      src: "/logos/gallery.png",
      alt: "Python graph gallery logo",
      maxWidth: 80,
    },
    {
      href: "https://www.apec.fr/",
      src: "/logos/apec.svg",
      alt: "APEC logo",
      maxWidth: 180,
    },
    {
      href: "https://claritydatastudio.com/",
      src: "/logos/cds.svg",
      alt: "Clarity data studio logo",
      maxWidth: 180,
    },
  ];

  return (
    <div className="container logo-container">
      <div className="logo-grid">
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: company.maxWidth }}
          >
            <img src={company.src} alt={company.alt} width={company.maxWidth} />
          </a>
        ))}
      </div>
    </div>
  );
}
