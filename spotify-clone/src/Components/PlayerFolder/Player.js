import React from "react";
import "./Player.css";
import Sidebar from "../SidebarFolder/Sidebar"
import Body from "../BodyFolder/Body"
import Footer from "../FooterFolder/Footer"



function Player(spotify) {
  return (
    <div className="player">
     <div className="player__body">
      <Sidebar/>
      <Body />
     </div>
<Footer />

    </div>
  );
}

export default Player;
