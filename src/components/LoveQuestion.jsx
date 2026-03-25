import { useState } from "react";
import { motion } from "framer-motion";
import FancyButton from "./FancyButton";

export default function LoveQuestion({ onNext }) {
  const [pos, setPos] = useState({ top: "60%", left: "60%" });

  const move = () => {
    setPos({
      top: Math.random() * 70 + "%",
      left: Math.random() * 70 + "%",
    });
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      
      <h2 style={{ color: " #a689b7" }}>
        Do you love me? 😏
      </h2>

      <FancyButton onClick={onNext}>YES 💖</FancyButton>

      <motion.button
        onMouseEnter={move}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          top: pos.top,
          left: pos.left,
          padding: "10px 20px",
          borderRadius: "25px",
          border: "none",
          background: "#85a5df",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        NO 😜
      </motion.button>
    </div>
  );
}