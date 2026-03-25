import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

// 📍 Coordinates
const sriLanka = [7.8731, 80.7718];
const japan = [36.2048, 138.2529];

export default function LoveMap() {
  const [path, setPath] = useState([]);

  useEffect(() => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 0.02;

      const lat =
        sriLanka[0] + (japan[0] - sriLanka[0]) * progress;
      const lng =
        sriLanka[1] + (japan[1] - sriLanka[1]) * progress;

      setPath((prev) => [...prev, [lat, lng]]);

      if (progress >= 1) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "400px", marginTop: "20px" }}>
      <MapContainer
        center={[20, 110]}
        zoom={3}
        style={{ height: "100%", borderRadius: "15px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🌍 Animated Path */}
        <Polyline positions={path} color="pink" weight={4} />

        {/* 📍 Sri Lanka */}
        <Marker position={sriLanka}>
          <Popup>My Heart 💖 (Sri Lanka)</Popup>
        </Marker>

        {/* 📍 Japan */}
        <Marker position={japan}>
          <Popup>You 💕 (Japan)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}