/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export async function createSocialImage() {
  const logo = await readFile(
    join(
      process.cwd(),
      "public/brand/greenest-brand-footer-transparent-v2.png",
    ),
  );
  const logoSource = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          padding: "54px",
          background:
            "linear-gradient(135deg, #17311f 0%, #35513b 52%, #14291b 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "540px",
            height: "540px",
            left: "-120px",
            top: "-240px",
            borderRadius: "999px",
            background: "rgba(232, 241, 229, 0.18)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "440px",
            height: "440px",
            right: "-90px",
            bottom: "-250px",
            borderRadius: "999px",
            background: "rgba(199, 217, 191, 0.14)",
            filter: "blur(12px)",
          }}
        />

        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "34px 70px 28px",
            border: "1px solid rgba(255, 255, 255, 0.58)",
            borderRadius: "42px",
            background:
              "linear-gradient(135deg, rgba(247, 250, 244, 0.96), rgba(211, 225, 211, 0.88) 54%, rgba(240, 246, 237, 0.94))",
            boxShadow:
              "inset 0 2px rgba(255,255,255,.92), 0 28px 70px rgba(5,16,8,.3)",
          }}
        >
          <img
            src={logoSource}
            alt=""
            width={820}
            height={346}
            style={{
              width: "820px",
              height: "346px",
              objectFit: "contain",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "18px",
              color: "#28472f",
              fontSize: "27px",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            Where nature feels like home
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "13px",
              color: "#5d6f5d",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            greenestco.in · Kanthalloor, Kerala
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
