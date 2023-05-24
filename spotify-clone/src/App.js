import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/LoginFolder/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Components/PlayerFolder/Player';
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token); //this is giving the access token to the spotify API allowing spotify to talk with react

      spotify.getMe().then((user) => {
        console.log("person:", user);
      });
    }

    console.log("I Have a token >>", token);
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
