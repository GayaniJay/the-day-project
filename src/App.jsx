import { useState } from "react";
import Page from "./components/Page";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";
import FancyButton from "./components/FancyButton";
import LoveQuestion from "./components/LoveQuestion";
import Passcode from "./components/Passcode";
import LoveLetter from "./components/LoveLetter";
import MapView from "./components/Map";
import FutureSection from "./components/FutureSection";
import FramesSection from "./components/FramesSection";
import FinalSection from "./components/FinalSection";
import "leaflet/dist/leaflet.css";

export default function App() {
  const [step, setStep] = useState(1);

  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      overflow: "hidden",
    },
  };

  return (
    <div style={styles.container}>
      <FloatingHearts />
      <Sparkles />

      {step === 1 && (
        <Page>
          <h1
            style={{
              background: "linear-gradient(45deg, #6171a9, #f9abd2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hi Babs! I made this for you 💖
          </h1>
          <FancyButton onClick={() => setStep(2)}>Start</FancyButton>
        </Page>
      )}

      {step === 2 && (
        <Page>
          <LoveQuestion onNext={() => setStep(3)} />
        </Page>
      )}

      {step === 3 && (
        <Page>
          <Passcode onSuccess={() => setStep(4)} />
        </Page>
      )}

      {step === 4 && (
        <Page>
          <LoveLetter />
          <FancyButton onClick={() => setStep(5)}>I Promise 💕</FancyButton>
        </Page>
      )}

      {/* 🌍 STEP 5 — MAP (AUTO TRANSITION) */}
      {step === 5 && (
        <Page>
          <MapView onFinish={() => setStep(6)} />
        </Page>
      )}

      {/* ✨ STEP 6 — FUTURE */}
      {step === 6 && (
        <Page>
          <FutureSection onNext={() => setStep(7)} />
        </Page>
      )}

      {/* 🖼️ STEP 7 — FRAMES */}
      {step === 7 && (
        <Page>
          <FramesSection onNext={() => setStep(8)} />
        </Page>
      )}

      {/* 💞 STEP 8 — FINAL */}
      {step === 8 && (
        <Page>
          <FinalSection />
        </Page>
      )}
    </div>
  );
}