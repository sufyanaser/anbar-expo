import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";

import { abtf2026 } from "@/data/abtf2026";

export const alt = abtf2026.titleAr;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const eventMark = await readFile(
    new URL(
      "../../../public/brand/abtf2026/event-mark-share.png",
      import.meta.url,
    ),
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#edf5f1",
        color: "#0b4a6f",
        padding: "70px 86px",
      }}
    >
      <div
        style={{
          width: "42%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#087c49",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "6px",
          }}
        >
          ABTF 2026
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            marginTop: 20,
          }}
        >
          BOOK
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 900,
            marginTop: 4,
          }}
        >
          TECHNOLOGY
        </div>
        <div
          style={{
            display: "flex",
            color: "#d09d27",
            fontSize: 28,
            fontWeight: 800,
            marginTop: 30,
          }}
        >
          16 / 09 / 2026
        </div>
      </div>

      {/* The supplied official mark is used without alteration. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`data:image/png;base64,${eventMark.toString("base64")}`}
        alt=""
        width={500}
        height={343}
        style={{ objectFit: "contain" }}
      />
    </div>,
    size,
  );
}
