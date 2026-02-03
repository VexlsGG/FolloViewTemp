import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512
};

export const contentType = "image/png";

function IconMarkup({ textSize }: { textSize: number }) {
  return (
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
          width: "78%",
          height: "78%",
          borderRadius: 140,
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.95) 0%, rgba(16,185,129,0.9) 55%, rgba(244,114,182,0.9) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 50px 120px rgba(0,0,0,0.55)",
          border: "1px solid rgba(255,255,255,0.16)"
        }}
      >
        <div
          style={{
            fontSize: textSize,
            fontWeight: 850,
            letterSpacing: "-0.08em",
            color: "rgba(255,255,255,0.98)",
            fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Arial"
          }}
        >
          F
        </div>
      </div>
    </div>
  );
}

export default function Icon() {
  return new ImageResponse(<IconMarkup textSize={260} />, size);
}

