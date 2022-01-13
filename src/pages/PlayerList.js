import "../Css_Styles/PlayerList.css";
import { useState, useEffect } from "react";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebase";

const PlayerList = (props) => {
  const players = props.playerslist;
//     const usersCollectionRef = collection(db, "Players")



  return ( 
    <div className="list">

      {players.map((player) => (
        <a href={`/${player.username}`} key={player.username}>
          {player.username}
        </a>
      ))}
      </div>
  );
};

export default PlayerList;
