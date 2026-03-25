import { motion } from "framer-motion";

export default function Page({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "25px",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}