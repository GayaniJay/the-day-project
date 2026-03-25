import { motion } from "framer-motion";

export default function Sparkles() {
  return [...Array(30)].map((_, i) => (
    <motion.div
      key={i}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      style={{
        position: "absolute",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        width: "3px",
        height: "3px",
        background: "white",
        borderRadius: "50%",
      }}
    />
  ));
}