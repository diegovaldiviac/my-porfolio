import React, { useEffect, useState } from 'react';

const SpotifyLastPlayed = ({ token }) => {
  const [lastPlayed, setLastPlayed] = useState(null);

  useEffect(() => {
    const fetchLastPlayed = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 403) {
          console.error("Insufficient client scope. Please reauthorize.");
          window.localStorage.removeItem('token');
          window.location.reload();
          return;
        }

        if (response.status === 200) {
          const data = await response.json();
          setLastPlayed(data.items[0]);
        } else {
          setLastPlayed(null);
        }
      } catch (error) {
        console.error("Error fetching last played track:", error);
      }
    };

    fetchLastPlayed();
  }, [token]);

  if (!lastPlayed) {
    return <div>No recently played tracks found...</div>;
  }

  const { track } = lastPlayed;
  return (
    <div>
      <h3>Last Played</h3>
      <p>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</p>
      <img src={track.album.images[0].url} alt="Album Art" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default SpotifyLastPlayed;
