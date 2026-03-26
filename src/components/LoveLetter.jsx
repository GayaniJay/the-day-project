import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function LoveLetter() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current?.play();
      document.removeEventListener("click", playMusic);
    };

    // try autoplay first
    audioRef.current?.play().catch(() => {
      document.addEventListener("click", playMusic);
    });
  }, []);

  return (
    <div className="letter-container">
      
      {/* ✨ Sparkles */}
      <div className="sparkles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            style={{
              "--x": Math.random(),
              "--y": Math.random(),
              animationDelay: `${Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="letter-box">
        <p>
          Happy Birthday, My Love ❤️🌏🎂<br></br><br></br>

          {"\n\n"}
          Today is all about you!<br></br>

From the moment you came into my life, everything changed in the most beautiful way. You didn’t just love me, you brought out the best, most feminine version of me. (even going beyond limits🤪)<br></br><br></br>

You introduced me to so many new things, new experiences, new ways of thinking, new movies, new knowledge, and a whole new way of seeing the world. Because of you, I am growing every single day.<br></br><br></br>

You take care of me in ways I never imagined someone would. You notice the smallest changes in my mood, you calm my storms, and you never ever let me feel alone. No matter the distance, you are always right there with me. You always feels like home Babs❤️<br></br><br></br>

I am so lucky to have you and So lucky to be loved by you. I just want to remind you that you are my safe place, my happiness, my peace, my everything. There is no world for me without you in it.<br></br><br></br>

Happy Birthday once again to my ONE and ONLY 💕<br></br><br></br>

Okay, enough of the clingy yet lovely talk 😜 just promise me we’re forever like this ❤️<br></br><br></br>
        </p>
      </div>

      <style>{`
      .letter-container {
        position: relative;
        background: #fffaf0;
        padding: 20px;
        border-radius: 15px;
        max-height: 60vh;
        overflow: hidden;
      }

      /* 📱 Responsive text container */
      .letter-box {
        position: relative;
        z-index: 2;
        max-height: 60vh;
        overflow-y: auto;

        padding-right: 12px;
        margin-right: -12px;

        /* smooth scroll on mobile */
        -webkit-overflow-scrolling: touch;
      }

      /* ✨ Scrollbar styling (desktop) */
      .letter-box::-webkit-scrollbar {
        width: 6px;
      }

      .letter-box::-webkit-scrollbar-track {
        background: transparent;
      }

      .letter-box::-webkit-scrollbar-thumb {
        background: #67455e;
        border-radius: 10px;
      }

      /* Firefox */
      .letter-box {
        scrollbar-width: thin;
        scrollbar-color: #a57c95 transparent;
      }

      /* 💖 MOBILE FIXES */
      @media (max-width: 600px) {
        .letter-container {
          padding: 15px;
          border-radius: 12px;
          max-height: 70vh;   /* more space on mobile */
        }

        .letter-box {
          max-height: 70vh;
          padding-right: 8px;
          margin-right: -8px;
          font-size: 15px;   /* better readability */
          line-height: 1.6;
        }
      }
      `}</style>
    </div>
  );
}