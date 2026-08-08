import { ImageResponse } from "next/og";

export const alt = "ANBAR EXPO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f8f5ef",
        color: "#2f221d",
        padding: "72px",
        border: "20px solid #2f221d",
      }}
    >
      <div style={{ display: "flex", fontSize: 26, color: "#9b5236" }}>
        THE OFFICIAL EXHIBITION PLATFORM
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 900,
            letterSpacing: "-5px",
          }}
        >
          ANBAR EXPO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 18,
            color: "#9b5236",
          }}
        >
          ANBAR INTERNATIONAL FAIR
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#71635d" }}>
        anbarexpo.com
      </div>
    </div>,
    size,
  );
}
