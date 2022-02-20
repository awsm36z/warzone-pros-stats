import "../Css_Styles/PlayerList.css";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { initializeApp } from "firebase-admin";
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebase";

const PlayerList = (props) => {
  const [players, setPlayers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPlayers(props.players.sort(compare));
    setLoading(false);
    console.log(players);
  }, [loading])

   const initState = async () => {

  };

  function compare(a, b) {
    return a.ranking = b.ranking;
  }
  return (
    <div className="playerList">
      <Navbar />
      {loading ? <h1>loading</h1> :
        <div className="list">
          {players.map((player) => (
            <div className="card">
              <a className="url" href={`/${player.username}`} key={player.username}>
                {player.username}
              </a>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default PlayerList;
