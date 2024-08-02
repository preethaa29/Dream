import Container from "../../container/Container";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        padding: "20px 0",
      }}
    >
      <Container
        style={{
          padding: "0 20px", // Padding inside the container
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Centering the paragraph
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column", // Ensure the content is stacked vertically
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto', sans-serif", // Different font
              color: "#6b7280",
              fontSize: "18px",
              lineHeight: "1.6",
              margin: "0",
              maxWidth: "600px", // Adjust width to fit content
            }}
          >
            At Dream Craft Events, we are committed to making your events unforgettable. Our comprehensive Event Management System streamlines planning, booking, and execution for a flawless experience.
          </p>
        </div>
        <div
          style={{
            borderTop: "1px solid #f3f4f6",
            padding: "20px 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              margin: "0",
            }}
          >
            All rights reserved.
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginTop: "8px",
            }}
          >
            © {new Date().getFullYear()} Dream Craft Events
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
