import React, {useState, useEffect} from "react";
import "../Css_Styles/PlayerStatsPage.css";
import player from "../assets/playerPics/diazbiffle.jpeg";
import ReactPlayer from "react-player";



const PlayerStatsPage = (props) => {
  const [name, setName] = useState(props.name)
  const [realName, setRealName] = useState(props.realName)
  const [earnings, setEarnings] = useState(205495.50)
  const [player, setPlayer] = useState()
  
  console.log("HERE IS THE LOGGER")
  useEffect(() => {
    fetch("https://api.twitch.tv/helix/users?login=diazbiffle")
    .then (res => res.json())
    .then((data) => setPlayer(data)).catch(console.log)
  } , []);
  return (
    <div className="PlayerStatsPage">
      <img
        className="playerIcon"
        src={player}
        alt="no image"
        height="300"
      />
      <a href={"https://twitch.tv/" + name} className="twitchChannel">
        Twitch channel
      </a>
      <ReactPlayer 
      className = "streamPlayer"
      url = {"twitch.tv/" + name}
      controls = {false}
      />

    </div>
  );
};

export default PlayerStatsPage;
