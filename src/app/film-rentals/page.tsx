import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks } from "@/lib/site";

const track = tracks.find((t) => t.key === "film")!;

export const metadata: Metadata = {
  title: track.name,
  description: track.blurb,
};

export default function FilmRentalPage() {
  return <TrackPage track={track} />;
}
