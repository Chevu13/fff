import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "FFA — Telo se menja sistemom. Lični i online trening, Novi Beograd.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const img = async (name: string) =>
  `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public/img", name))).toString("base64")}`;

export default async function Image() {
  const [pre, posle] = await Promise.all([img("t1-pre.jpg"), img("t1-posle.jpg")]);
  const logo = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/logo-endorfin.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0c0c0c", color: "#f2f2f2" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={logo} width={124} height={110} />
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 900, lineHeight: 0.95 }}>
            <span>TELO SE MENJA</span>
            <span style={{ color: "#de2c2c" }}>SISTEMOM.</span>
          </div>
          <div style={{ fontSize: 26, color: "#8c8a86" }}>Licni i online trening · Novi Beograd</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={pre} width={210} height={630} style={{ objectFit: "cover", filter: "grayscale(1)" }} />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={posle} width={250} height={630} style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    size,
  );
}
