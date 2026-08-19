import type { Metadata } from "next";
import HomeExperience from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "greenest — A mountain home in Kanthalloor, Kerala",
  description:
    "greenest is a nature-led mountain homestay taking shape in Kanthalloor, Kerala. Follow our planning and construction journey and join the early guest list.",
  alternates: { canonical: "https://greenestco.in" },
};

export default function HomePage() {
  return <HomeExperience />;
}
