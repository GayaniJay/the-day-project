import { motion } from "framer-motion";

export default function Sparkles() {
  return (
    <div style={container}>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            position: "absolute",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            width: "5px",
            height: "5px",
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 0 10px white",
          }}
        />
      ))}
    </div>
  );
}

const container = {
  position: "fixed",   // 🔥 IMPORTANT (not absolute)
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 99999,       // 🔥 VERY HIGH
};