import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

export const alt = "الموقع قيد الإعداد";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const asalBold = await readFile(
    new URL("./fonts/Asal Arabic ITF Bold.otf", import.meta.url),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#161412",
        color: "#f4efe7",
        padding: "72px",
        border: "1px solid #332d29",
        fontFamily: "Asal Arabic",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 900 }}>
          الموقع قيد الإعداد
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Asal Arabic",
          data: asalBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
