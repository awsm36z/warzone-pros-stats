import React, { useState, useEffect } from "react";
import "../Css_Styles/PlayerStatsPage.css";
import ReactPlayer from "react-player";
import api from "../API/api";
import {TWITCH_GET_USER} from "../config/consts";
import { getTwitchToken } from "../utils/authUser";

const PlayerStatsPage = (props) => {
  const [name, setName] = useState(props.name);
  const [playerIcon, setPlayerIcon] = useState();
    //get from a different api, or maybe webscrape from stats page.
  //const [realName, setRealName] = useState(props.realName);
  // const [earnings, setEarnings] = useState(205495.5);
  const [player, setPlayer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async () => {
    const token = await getTwitchToken();
    try {
      const result = await api.get(
        `${TWITCH_GET_USER}?login=${name}`,
        {headers: {"Authorization": `Bearer ${token}`}}
      );
        setPlayer(result.data.data[0])
        setPlayerIcon(result.data.data[0].profile_image_url)
      } catch(error){
        console.error("There was an error!")
      }
      setIsLoading(false);
  }

  //Get user Data
  useEffect(() => {
    fetchData()
  },[]);



  return (
    <div className="PlayerStatsPage">
      {isLoading ? <h>loading</h> :
      <div>  
      <img className="playerIcon" src={playerIcon} alt="no image" height="300" />
      <a href={"https://twitch.tv/" + name} className="twitchChannel">
        Twitch channel
      </a>
      <ReactPlayer
        className="streamPlayer"
        url={`twitch.tv/${name}`}
        controls={false}
      />
      </div>
}
    </div>
  );
};

export default PlayerStatsPage;
