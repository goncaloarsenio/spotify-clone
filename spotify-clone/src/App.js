import React, { useEffect } from "react";
import "./App.css";
import Login from "./Components/LoginFolder/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/PlayerFolder/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  //{user} -> isto é o mesmo que ter dataLayer.user, ou seja fizemos deconstruct do dataLayer, e tiramos o 'user' daí

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); //this is giving the access token to the spotify API allowing spotify to talk with react

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //get data from spotiify to show playlists + reducer.js
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcN4Qz49O3FKm').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

    }

  }, []);

  return <div className="App">{token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
