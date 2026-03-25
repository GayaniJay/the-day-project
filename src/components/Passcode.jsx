import { useState } from "react";
import FancyButton from "./FancyButton";
import "../passcode.css"; // 👈 make sure this file exists

export default function Passcode({ onSuccess }) {
  const [code, setCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState("");

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const check = () => {
    if (code === "0222") {
      setMessage("Correct 💖 Unlocking...");
      setTimeout(() => {
        onSuccess();
      }, 1000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      triggerShake();

      if (newAttempts >= 5) {
        setMessage("You’re too cute to fail 💕 unlocking...");
        setTimeout(() => {
          onSuccess(); // 🔓 auto unlock after delay
        }, 2000);
      } else {
        setMessage(`Wrong 😏 Try again (${newAttempts}/5)`);
      }
    }
  };

  return (
    <div className="passcode-container">
      <h2 className="passcode-title">Enter Passcode 🔐</h2>

      <p className="passcode-hint">
        The day we became us 💕 
      </p>

      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter code"
        className={`passcode-input ${shake ? "shake" : ""}`}
      />

      <div style={{ marginTop: "15px" }}>
        <FancyButton onClick={check}>Unlock 💖</FancyButton>
      </div>

      <p className="passcode-attempts">
        
      </p>

      {message && (
        <p className="passcode-message">{message}</p>
      )}
    </div>
  );
}