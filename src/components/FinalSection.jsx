import { useEffect, useState } from "react";

export default function FinalSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="final-container">
      <h1
        className={show ? "glitchText" : ""}
        data-text="OOPS… TOO LATE 🤪"
      >
        OOPS… TOO LATE 🤪
      </h1>

      <h2
        className={show ? "glitchText delay1" : ""}
        data-text="Back button? Not found 🚫"
      >
        Back button? Not found 🚫
      </h2>

      <h2
        className={show ? "glitchText delay2" : ""}
        data-text="Exit? Not found 🚫"
      >
        Exit? Not found 🚫
      </h2>

      <style>{`
        .final-container {
          text-align: center;
          padding: 50px;
          color: #600c2f;
        }

        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        /* ✨ base shadow blur look */
        .glitchText {
          position: relative;
          color: #fff;
          text-shadow:
            0 0 8px rgba(159, 65, 95, 0.8),
            0 0 20px rgba(73, 11, 34, 0.6),
            0 0 40px rgba(95, 15, 55, 0.4);
          filter: blur(1.5px);
          animation: fadeIn 1s ease forwards;
        }

        /* ⚡ glitch layers */
        .glitchText::before,
        .glitchText::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          opacity: 0.7;
        }

        .glitchText::before {
          color: #a71c2f;
          transform: translate(-2px, 0);
          animation: glitchMove 0.4s infinite;
        }

        .glitchText::after {
          color: #ff0000;
          transform: translate(2px, 0);
          animation: glitchMove 0.4s infinite reverse;
        }

        .delay1 {
          animation-delay: 0.8s;
        }

        .delay2 {
          animation-delay: 1.6s;
        }

        @keyframes glitchMove {
          0% { transform: translate(0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -2px); }
          75% { transform: translate(-1px, 1px); }
          100% { transform: translate(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}