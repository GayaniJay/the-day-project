const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#ffd6e0,#ffe6f0,#e0c3fc)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    background: "rgba(255,255,255,0.9)",
    padding: "25px",
    borderRadius: "20px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginTop: "10px",
    whiteSpace: "pre-line",
  },

  btn: {
    marginTop: "20px",
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "pink",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  noBtn: {
    position: "absolute",
    padding: "8px 15px",
    borderRadius: "20px",
    border: "none",
    background: "gray",
    color: "white",
    cursor: "pointer",
  },

  envelope: {
    padding: "15px",
    background: "#ffb6c1",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "15px",
    display: "inline-block",
    fontWeight: "bold",
  },

  letter: {
    background: "#fffaf0",
    borderRadius: "15px",
    padding: "15px",
    marginTop: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  scrollBox: {
    maxHeight: "60vh",
    overflowY: "auto",
    paddingRight: "10px",
  },

  bigText: {
    fontSize: "60px",
  },

  heart: {
    position: "absolute",
    fontSize: "18px",
  },

  frames: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },

  frame: {
    width: "70px",
    height: "70px",
    border: "2px dashed pink",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: "100%",
    maxWidth: "300px",
  },

  mapBox: {
    position: "relative",
    display: "inline-block",
  },

  dot: {
    position: "absolute",
    fontSize: "18px",
  },
};

export default styles;