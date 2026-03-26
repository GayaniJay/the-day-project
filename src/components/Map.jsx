import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// 📍 Coordinates
const sriLanka = [7.8731, 80.7718];
const japan = [36.2048, 138.2529];

// 💓 Heart Icon
const heartIcon = new L.DivIcon({
  html: `<div class="heart-marker">💖</div>`,
  className: "",
  iconSize: [25, 25], // ✅ smaller for mobile
});

// ✈️ Plane Icon
const planeIcon = new L.DivIcon({
  html: `<div class="plane">✈️</div>`,
  className: "",
  iconSize: [25, 25], // ✅ smaller for mobile
});

export default function LoveMap({ onFinish }) {
  const [path, setPath] = useState([]);
  const [planePos, setPlanePos] = useState(sriLanka);
  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    let progress = 0;

    // 💬 Text storytelling timing
    setTimeout(() => setTextStep(1), 3000);
    setTimeout(() => setTextStep(2), 3000);
    setTimeout(() => setTextStep(3), 6000);

    const interval = setInterval(() => {
      progress += 0.01;

      const lat =
        sriLanka[0] + (japan[0] - sriLanka[0]) * progress;
      const lng =
        sriLanka[1] + (japan[1] - sriLanka[1]) * progress;

      setPlanePos([lat, lng]);
      setPath((prev) => [...prev, [lat, lng]]);

      if (progress >= 1) {
        clearInterval(interval);

        setTimeout(() => {
          if (onFinish) onFinish();
        }, 6000);
      }
    }, 40); // ✅ smoother animation

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        marginTop: "20px",
        textAlign: "center",
        padding: "0 10px", // ✅ mobile spacing
      }}
    >
      {/* 💬 STORY TEXT */}
      <div className="map-text">
        {textStep >= 1 && <p className="fade">Miles Apart... But Trust Me,</p>}
        {textStep >= 3 && (
          <p className="fade">This will not Last Forever ❤️</p>
        )}
      </div>

      {/* 🌍 MAP */}
      <div
        style={{
          height: "clamp(250px, 50vh, 400px)", // ✅ responsive height
          marginTop: "10px",
        }}
      >
        <MapContainer
          bounds={[sriLanka, japan]} // ✅ auto-fit both locations
          boundsOptions={{ padding: [30, 30] }}
          style={{ height: "100%", borderRadius: "15px" }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* 🌈 Animated Path */}
          {textStep >= 3 && (
            <Polyline positions={path} color="pink" weight={4} />
          )}

          {/* 💓 Sri Lanka */}
          <Marker position={sriLanka} icon={heartIcon}>
            <Popup>My Heart 💖 (Sri Lanka)</Popup>
          </Marker>

          {/* 💓 Japan */}
          <Marker position={japan} icon={heartIcon}>
            <Popup>You 💕 (Japan)</Popup>
          </Marker>

          {/* ✈️ Moving Plane */}
          <Marker position={planePos} icon={planeIcon} />
        </MapContainer>
      </div>

      {/* ✨ STYLES */}
      <style>{`
        .map-text {
          font-size: clamp(16px, 4vw, 22px);
          color: #ff85a2;
          font-weight: bold;
          animation: glow 2s infinite alternate;
        }

        .fade {
          animation: fadeIn 3s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .highlight {
          font-size: clamp(18px, 5vw, 26px);
          color: #c373aa;
          font-weight: bold;
          animation: glow 2s infinite alternate;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px #c986b0; }
          to { text-shadow: 0 0 20px #8f5586; }
        }

        /* 💓 Pulsing Heart */
        .heart-marker {
          font-size: 20px;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }

        /* ✈️ Plane */
        .plane {
          font-size: 20px;
          animation: float 2s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }

        /* 🌍 Leaflet Fix */
        .leaflet-container {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}