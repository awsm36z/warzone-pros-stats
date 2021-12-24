import React, { useState, useEffect } from "react";
import "../Css_Styles/PlayerStatsPage.css";
import player from "../assets/playerPics/diazbiffle.jpeg";
import ReactPlayer from "react-player";
import api from "../API/api";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, TWITCH_GET_TOKEN, TWITCH_GET_USER} from "../config/consts";

const PlayerStatsPage = (props) => {
  const [name, setName] = useState(props.name);
  const [realName, setRealName] = useState(props.realName);
  const [earnings, setEarnings] = useState(205495.5);
  const [player, setPlayer] = useState([]);
  const [tok, setTok] = useState();
  const [header, setHeader] = useState({});

  const bodyParameters = {};

  useEffect(() => {
    axios
      .post(`${TWITCH_GET_TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=user_read`)
      .then((response) => {
        setTok(response.data.access_token); 
        console.log({ Authorization: `Bearer ${response.data.access_token}`});
        const result = api.get(
          `${TWITCH_GET_USER}?login=diazbiffle`,
          {headers:  {"Authorization": `Bearer ${response.data.access_token}`,
                      
        }}
          
        ).then(userData => console.log("USER DATA " + JSON.stringify(userData))).catch(error => console.error("failed to get user " + error))
        

      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },[]);


  return (
    <div className="PlayerStatsPage">
      <img className="playerIcon" src={player} alt="no image" height="300" />
      <a href={"https://twitch.tv/" + name} className="twitchChannel">
        Twitch channel
      </a>
      <ReactPlayer
        className="streamPlayer"
        url={"twitch.tv/" + name}
        controls={false}
      />
    </div>
  );
};

export default PlayerStatsPage;
