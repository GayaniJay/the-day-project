import { motion } from "framer-motion";

export default function FancyButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      style={{
        marginTop: "20px",
        padding: "12px 25px",
        borderRadius: "25px",
        border: "none",
        background: "pink",
        color: "white",
        cursor: "pointer",
      }}
    >
      {children}
    </motion.button>
  );
}