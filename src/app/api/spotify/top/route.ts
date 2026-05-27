import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify";

export async function GET() {
  try {
    const token = await getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };

    const [tracksRes, artistsRes] = await Promise.all([
      fetch("https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=medium_term", { headers, next: { revalidate: 86400 } }),
      fetch("https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term", { headers, next: { revalidate: 86400 } }),
    ]);

    const [tracksData, artistsData] = await Promise.all([tracksRes.json(), artistsRes.json()]);

const tracks = (tracksData.items ?? []).map((t: {
      name: string;
      artists: { name: string }[];
      album: { images: { url: string }[] };
      external_urls: { spotify: string };
    }) => ({
      name: t.name,
      artist: t.artists.map((a) => a.name).join(", "),
      image: t.album.images[2]?.url ?? null,
      url: t.external_urls.spotify,
    }));

    const artists = (artistsData.items ?? []).map((a: {
      name: string;
      images: { url: string }[];
      external_urls: { spotify: string };
    }) => ({
      name: a.name,
      image: a.images[2]?.url ?? null,
      url: a.external_urls.spotify,
    }));

    return NextResponse.json({ tracks, artists });
  } catch {
    return NextResponse.json({ tracks: [], artists: [] });
  }
}
