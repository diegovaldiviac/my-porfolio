import React, { useEffect } from 'react';

const SpotifyAuth = () => {
  const CLIENT_ID = '5571af492c3743b8a58037d13ba50495';
  const REDIRECT_URI = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.yourwebsite.com/';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'user-read-recently-played';

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
  }, []);

  const handleLogin = () => {
    window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login to Spotify</button>
    </div>
  );
};

export default SpotifyAuth;
