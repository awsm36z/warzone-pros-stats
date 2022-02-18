import "../Css_Styles/PlayerList.css";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebase";

const PlayerList = (props) => {
  const players = props.playerslist;
  //     const usersCollectionRef = collection(db, "Players")

  return (
    <div className="playerList">
      <Navbar />
      
      <div className="list">
        {players.map((player) => (
          <div className="card">
            <a className="url" href={`/${player.username}`} key={player.username}>
              {player.username}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
