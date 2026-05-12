import "../../styles/brand.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white", backgroundImage: "none" }}>
      <div
        style={{
          padding: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>Branding of yellow sunflower</h1>
        <h2>Colors</h2>
        <div style={{ flexDirection: "column", padding: "30px" }}>
          <span
            style={{
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#ffc300",
              fontWeight: "bold",
            }}
          >
            #ffc300
          </span>
          <span
            style={{
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#5a189a",
              fontWeight: "bold",
              color: "white",
            }}
          >
            #5a189a
          </span>
          <span
            style={{
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#f2f2f2",
              fontWeight: "bold",
            }}
          >
            #f2f2f2
          </span>
          <span
            style={{
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#c2c2c2",
              fontWeight: "bold",
            }}
          >
            #C2C2C2
          </span>
          <span
            style={{
              padding: "30px",
              borderRadius: "10px",
              backgroundColor: "#000000",
              fontWeight: "bold",
              color: "white",
            }}
          >
            #000000
          </span>
        </div>
        <h2>Name</h2>
        <p>
          Main font: <i>Cal Sans</i>
        </p>
        <p>
          Secondary font: <i>Outfit</i>
        </p>
        <span
          style={{
            display: "inline-block",
            borderBottom: "10px solid #ffc300",
          }}
        >
          <span className="name" style={{ fontSize: "4rem" }}>
            <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>
          </span>
        </span>
        <span
          style={{
            display: "inline-block",
            borderBottom: "10px solid #ffc300",
            filter: "grayscale(100%)",
            marginTop: "10px",
          }}
        >
          <span className="name" style={{ fontSize: "4rem" }}>
            <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>
          </span>
        </span>
        <h2>Logo</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="/logo.png"
            alt="Yellow Sunflower logo"
            style={{ maxWidth: "20%", height: "auto" }}
          />
          <span
            style={{
              borderBottom: "10px solid #ffc300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="name" style={{ fontSize: "5rem" }}>
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>
            </span>
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="/logo.png"
            alt="Yellow Sunflower logo in grayscale"
            style={{
              filter: "grayscale(100%)",
              maxWidth: "20%",
              height: "auto",
            }}
          />
          <span
            style={{
              borderBottom: "10px solid #ffc300",
              filter: "grayscale(100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="name" style={{ fontSize: "5rem" }}>
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>
            </span>
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="/logo.png"
            alt="Rotating Yellow Sunflower logo"
            style={{ maxWidth: "20%", height: "auto" }}
            className="rotate"
          />
          <span
            style={{
              borderBottom: "10px solid #ffc300",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="name" style={{ fontSize: "5rem" }}>
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>
            </span>
          </span>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            src="/logo.png"
            alt="Rotating Yellow Sunflower logo in grayscale"
            style={{
              filter: "grayscale(100%)",
              maxWidth: "20%",
              height: "auto",
            }}
            className="rotate"
          />
          <span
            style={{
              borderBottom: "10px solid #ffc300",
              filter: "grayscale(100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="name" style={{ fontSize: "5rem" }}>
              <span className="highlight">yellow</span>{" "}
              <span className="highlight-secondary">sunflower</span>
            </span>
          </span>
        </div>
        <hr />
        <img src="/logo.png" alt="Yellow Sunflower logo" />
        <hr />
        <img
          src="/logo.png"
          alt="Yellow Sunflower logo in grayscale"
          style={{ filter: "grayscale(100%)" }}
        />
        <hr />
        <img src="/logo.png" alt="Yellow Sunflower logo" />
        <span
          style={{
            display: "inline-block",
            borderBottom: "10px solid #ffc300",
          }}
        >
          <span className="name" style={{ fontSize: "4rem" }}>
            <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>
          </span>
        </span>
        <hr />
        <img
          src="/logo.png"
          alt="Yellow Sunflower logo in grayscale"
          style={{ filter: "grayscale(100%)" }}
        />
        <span
          style={{
            display: "inline-block",
            borderBottom: "10px solid #ffc300",
            filter: "grayscale(100%)",
          }}
        >
          <span className="name" style={{ fontSize: "4rem" }}>
            <span className="highlight">yellow</span>{" "}
            <span className="highlight-secondary">sunflower</span>
          </span>
        </span>
      </div>
    </div>
  );
}
