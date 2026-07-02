import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dynamically generated Open Graph / Twitter card. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient brand glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(240,150,40,0.55), rgba(240,150,40,0))",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#f0962a",
            }}
          />
          <span style={{ fontSize: 30, color: "#a1a1aa", letterSpacing: 2 }}>
            {SITE.name.toUpperCase()}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 40, color: "#f0962a", fontWeight: 600 }}>
            Product Engineer · Full Stack · AI · Cloud
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
              letterSpacing: -2,
            }}
          >
            {SITE.tagline}
          </span>
        </div>

        <span style={{ fontSize: 28, color: "#a1a1aa" }}>
          AWS SBG Founding Lead · Microsoft Learn Ambassador · Top 2 GDG Mentor
        </span>
      </div>
    ),
    { ...size },
  );
}
