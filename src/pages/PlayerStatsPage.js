import React, { useState, useEffect } from "react";
import "../Css_Styles/PlayerStatsPage.css";

import ReactPlayer from "react-player";
import api from "../API/api";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, TWITCH_GET_TOKEN, TWITCH_GET_USER} from "../config/consts";
import { getTwitchToken } from "../utils/authUser";

const PlayerStatsPage = (props) => {
  const [name, setName] = useState(props.name);
  const [playerIcon, setPlayerIcon] = useState();
    //get from a different api, or maybe webscrape from stats page.
  //const [realName, setRealName] = useState(props.realName);
  // const [earnings, setEarnings] = useState(205495.5);
  const [player, setPlayer] = useState([]);
  
  //Get user Data
  useEffect(() => {
      
    getTwitchToken()
    .then((token) => {
        const result = api.get(
          `${TWITCH_GET_USER}?login=${name}`,
          {headers:  {"Authorization": `Bearer ${token}`,
                      
        }}
          
        ).then(userData => setPlayer(userData) ).catch(error => console.error("failed to get user " + error))
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },[]);


  useEffect(() => {},[]);

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
