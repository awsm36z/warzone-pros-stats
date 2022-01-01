import "../Css_Styles/PlayerList.css";
import { useState, useEffect } from "react";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebase";

const PlayerList = (props) => {
  const players = props.playerslist;
//     const usersCollectionRef = collection(db, "Players")
    const [loading, setLoading] = useState(false);


  return ( 
    <div className="list">
        {loading ? <h1>loading</h1> : 
        <div className = "list">
      {players.map((player) => (
        <a href={`/${player.name}`} key={player.name}>
          {player.name}
        </a>
      ))}
      </div>
      }
    </div>
  );
};

export default PlayerList;
