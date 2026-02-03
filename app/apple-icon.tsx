import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#070a16"
      }}
    >
      <div
        style={{
          width: "84%",
          height: "84%",
          borderRadius: 46,
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.95) 0%, rgba(16,185,129,0.9) 55%, rgba(244,114,182,0.9) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.16)"
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 850,
            letterSpacing: "-0.08em",
            color: "rgba(255,255,255,0.98)",
            fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Arial"
          }}
        >
          F
        </div>
      </div>
    </div>,
    size
  );
}

