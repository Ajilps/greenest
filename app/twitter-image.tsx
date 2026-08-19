import {
  createSocialImage,
  socialImageSize,
} from "@/app/_social/createSocialImage";

export const alt =
  "GreeNest Associates — Resorts and Tour Operators in Kanthalloor, Kerala";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
