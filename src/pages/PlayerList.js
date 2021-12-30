import "../Css_Styles/PlayerList.css";
import { getPlayers } from "../config/players";
import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const PlayerList = (props) => {
    const [players, setPlayers] = useState()
    const usersCollectionRef = collection(db, "Players")
    const [loading, setLoading] = useState(true);

    const addPlayers = () => {

    }

  useEffect(() => {
    setPlayers(props.playerslist)
    setLoading(players == undefined);
    console.log(players)
  }, [players]);

  return ( 
    <div className="list">
        {loading ? <h1>loading</h1> : 
        <div>
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
