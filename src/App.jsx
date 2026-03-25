import { useState } from "react";
import Page from "./components/Page";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";
import FancyButton from "./components/FancyButton";
import LoveQuestion from "./components/LoveQuestion";
import Passcode from "./components/Passcode";
import LoveLetter from "./components/LoveLetter";
import MapView from "./components/Map"
import Gallery from "./components/Gallery";
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

  // Debug (remove later if not needed)
  console.log("Current step:", step);

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
          <FancyButton onClick={() => setStep(5)}>Next 🌍</FancyButton>
        </Page>
      )}

      {step === 5 && (
        <Page>
          <MapView />
          <p>
            {"\n\n"}

          </p>
          <FancyButton onClick={() => setStep(6)}>Next 🖼️</FancyButton>
        </Page>
      )}

      {step === 6 && (
        <Page>
          <Gallery />
        </Page>
      )}
    </div>
  );
}