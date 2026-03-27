import { useEffect, useState } from "react";

export default function FutureSection({ onNext }) {
  const [show, setShow] = useState(false);

  const cards = [
    "We’ll take our first trip together… closing the distance between us ✈️",
    "Every birthday, every moment… together, just the way it should be 🎂",
    "Watching movies together… not through Discord, but right next to you 🎬",
    "Playing games side by side… and me winning every time 😏🎮 and MANY MORE",
  ];

  useEffect(() => {
    setTimeout(() => setShow(true), 800);

    const totalTime = cards.length * 2200 + 4000;

    const timer = setTimeout(() => {
      if (onNext) onNext();
    }, totalTime);

    return () => clearTimeout(timer);
  }, [onNext, cards.length]);

  return (
    <div className="future-container">
      <h2 className="title">One day… 💫</h2>

      <div className="cards">
        {cards.map((text, i) => (
          <div
            key={i}
            className={`card ${show ? "show" : ""}`}
            style={{ animationDelay: `${i * 2.2}s` }}
          >
            {text}
          </div>
        ))}
      </div>

      <style>{`
        .future-container {
          text-align: center;
          padding: 40px;
          color: #ff4d6d;
        }

        .title {
          font-size: 28px;
          margin-bottom: 30px;
          animation: fadeIn 2s ease;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .card {
          padding: 20px;
          border-radius: 20px;
          background: rgba(255, 182, 193, 0.2);
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(40px);
          font-size: 16px;
          line-height: 1.5;
        }

        .card.show {
          animation: floatUp 1.2s ease forwards;
        }

        @keyframes floatUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* 📱 MOBILE FIXES */
        @media (max-width: 600px) {
          .future-container {
            padding: 20px;
          }

          .title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .cards {
            grid-template-columns: 1fr; /* single column */
            gap: 15px;
          }

          .card {
            padding: 16px;
            font-size: 15px;
            border-radius: 16px;
          }
        }
      `}</style>
    </div>
  );
}