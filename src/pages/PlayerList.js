import "../Css_Styles/PlayerList.css"
import {players, getPlayers} from "../config/players";


const tempList = getPlayers()
const PlayerList = () => {
    console.log("hi " + players)
  return (
    <div className = "list">
        {players.map((name) =>(
            <a href={`/${name}`} key = {name}>{name}</a>
        ))}
    </div>
  );
};

export default PlayerList;
