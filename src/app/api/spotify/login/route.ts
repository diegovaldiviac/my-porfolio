import { NextResponse } from "next/server";

export function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const redirectUri = "http://127.0.0.1:3000/api/spotify/callback";
  const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
  ].join(" ");

  const url = new URL("https://accounts.spotify.com/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", scopes);
  url.searchParams.set("show_dialog", "true");

  return NextResponse.redirect(url.toString());
}
