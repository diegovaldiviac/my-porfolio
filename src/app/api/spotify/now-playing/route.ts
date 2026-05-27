import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export async function GET() {
  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const currentRes = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { headers, cache: "no-store" }
    );

    if (currentRes.status === 200) {
      const data = await currentRes.json();
      if (data?.item) {
        return NextResponse.json({
          isPlaying: data.is_playing,
          isRecent: false,
          title: data.item.name,
          artist: data.item.artists.map((a: { name: string }) => a.name).join(", "),
          albumArt: data.item.album.images[0]?.url ?? null,
          songUrl: data.item.external_urls.spotify,
        });
      }
    }

    // Nothing playing — fall back to recently played
    const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      { headers, next: { revalidate: 60 } }
    );

    if (recentRes.ok) {
      const recentData = await recentRes.json();
      const item = recentData?.items?.[0]?.track;
      if (item) {
        return NextResponse.json({
          isPlaying: false,
          isRecent: true,
          title: item.name,
          artist: item.artists.map((a: { name: string }) => a.name).join(", "),
          albumArt: item.album.images[0]?.url ?? null,
          songUrl: item.external_urls.spotify,
        });
      }
    }

    return NextResponse.json({ isPlaying: false, isRecent: false });
  } catch {
    return NextResponse.json({ isPlaying: false, isRecent: false });
  }
}
