import { useEffect, useRef } from "react";

export default function LoveLetter() {
  const audioRef = useRef(null);

  useEffect(() => {
    // try to play music when component loads
    audioRef.current?.play().catch(() => {
      console.log("Autoplay blocked until user interaction");
    });
  }, []);

  return (
    <div style={{
      background: "#fffaf0",
      padding: "20px",
      borderRadius: "15px",
      maxHeight: "60vh",
      overflowY: "auto"
    }}>
      
      {/* 🎵 Music */}
      <audio ref={audioRef} loop>
        <source src="assets/music.mp3"/>
      </audio>

      <p>
        Happy Birthday, My Love ❤️🌏

        {"\n\n"}
        (PASTE YOUR FULL MESSAGE HERE)
      </p>
    </div>
  );
}