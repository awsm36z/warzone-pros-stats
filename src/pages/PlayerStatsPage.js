import React from "react";
import "../Css_Styles/PlayerStatsPage.css";
import player from "../assets/playerPics/diazbiffle.jpeg"
const PlayerStatsPage = () => {
  return (
    <div className="PlayerStatsPage">
      <img className = "playerPortrait" src= {player} alt =  "no image" height = "300"/>
      <p>this is the player stats </p>
      <button>Hi, pls click here</button>
    </div>
  );
};

export default PlayerStatsPage;
