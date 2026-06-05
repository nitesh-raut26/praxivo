import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px",
          background:
            "linear-gradient(135deg, #f6f7ff 0%, #ffffff 55%, #faf5ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* brand glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35), rgba(124,58,237,0) 70%)",
            display: "flex",
          }}
        />

        {/* logo lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #4f46e5, #7c3aed, #c026d3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 46,
              fontWeight: 700,
            }}
          >
            P
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#0b1120" }}>
            Praxivo
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0b1120",
              maxWidth: 980,
            }}
          >
            We build, ship &amp; scale intelligent products.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#475569",
              maxWidth: 880,
            }}
          >
            A venture studio building AI products — our own, and yours.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex" }}>praxivo.in</div>
          <div style={{ display: "flex", gap: 18 }}>
            <span>StockVision</span>
            <span>·</span>
            <span>LandAI</span>
            <span>·</span>
            <span>MantraAI</span>
            <span>·</span>
            <span>StockStump</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
