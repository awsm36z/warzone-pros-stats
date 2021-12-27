import "../Css_Styles/PlayerList.css";
import { getPlayers } from "../config/players";
import { useState, useEffect } from "react";

const PlayerList = () => {
  const [players, setPlayers] = useState(["nickmercs", "swagg", "diazbiffle"]);

  const createPlayersList = async () => {
    getPlayers().then((list) => {
      setPlayers(list);
      console.log("\nhere is the list\n" + players);
    });
  };

  useEffect(() => {
    createPlayersList();
  }, []);
  return (
    <div className="list">
      {players.map((name) => (
        <a href={`/${name}`} key={name}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default PlayerList;
