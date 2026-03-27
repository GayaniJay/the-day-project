import { useEffect, useState } from "react";

export default function FinalSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 500);
  }, []);

  return (
    <div className="final-container">
      {show && (
        <>
          <h1 className="fadeText">I love you ❤️</h1>
        </>
      )}

      <style>{`
        .final-container {
          text-align: center;
          padding: 50px;
          color: #d71264;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        h2 {
          font-size: 22px;
        }

        .fadeText {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }

        .delay {
          animation-delay: 0.8s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}