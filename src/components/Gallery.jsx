export default function Gallery() {
  return (
    <div>
      <h2>Our Memories 🖼️</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              width: "70px",
              height: "70px",
              border: "2px dashed pink",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            💖
          </div>
        ))}
      </div>

      <p style={{ marginTop: "10px" }}>
        We will fill these soon 💞
      </p>
    </div>
  );
}