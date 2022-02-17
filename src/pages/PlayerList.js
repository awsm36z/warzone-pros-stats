import "../Css_Styles/PlayerList.css";
import { useState, useEffect } from "react";
import PlayerListCard from "../components/PlayerListCard";


const PlayerList = (props) => {
  const players = props.playerslist;



  return ( 
    <div className="list">

      {players.map((player) => (
        <PlayerListCard playerName={player.username} />
      ))}
      </div>
  );
};

export default PlayerList;
