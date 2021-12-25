import "../Css_Styles/PlayerList.css"
import { players } from "../config/players";
const PlayerList = () => {
  return (
    <div className = "list">
        {players.map((name) =>(
            <a href={`/${name}`}>{name}</a>
        ))}
    </div>
  );
};

export default PlayerList;
