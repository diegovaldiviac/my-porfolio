"use client";

import { useEffect, useState } from "react";
import SpotifyAuth from "../spotifyauth";
import SpotifyCurrentlyPlaying from "./Spotify"


export default function AboutMeSection() {
    const [token, setToken] = useState('');

    useEffect(() => {
      const storedToken = window.localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    }, []);

    return (
        <div>
        {!token ? (
          <SpotifyAuth />
        ) : (
          <SpotifyCurrentlyPlaying token={token} />
        )}
        </div>
    )
}