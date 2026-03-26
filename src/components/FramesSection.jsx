import { useEffect } from "react";

export default function FramesSection({ onNext }) {
  useEffect(() => {
    setTimeout(() => {
      if (onNext) onNext();
    }, 8000);
  }, [onNext]);

  return (
    <div className="frames-container">
      <h2>These are waiting, Let’s fill them together ❤️</h2>
      <p></p>

      <div className="frames">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="frame"></div>
        ))}
      </div>

      <style>{`
        .frames-container {
          text-align: center;
          padding: 40px;
          color: #ff4d6d;
        }

        .frames {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .frame {
          height: 120px;
          border: 3px dashed #ff85a2;
          border-radius: 15px;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}