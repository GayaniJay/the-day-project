import { motion } from "framer-motion";

export default function FloatingHearts() {
  return [...Array(15)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ y: "110vh", x: `${(i / 15) * 100}vw` }}
      animate={{ y: "-10vh" }}
      transition={{
        duration: 6 + (i % 5),
        repeat: Infinity,
        delay: i * 0.3,
      }}
      style={{
        position: "absolute",
        fontSize: "18px",
      }}
    >
      ❤️
    </motion.div>
  ));
}