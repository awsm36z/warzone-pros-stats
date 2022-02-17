import React, { useState, useEffect } from "react";
import "../Css_Styles/PlayerStatsPage.css";
import ReactPlayer from "react-player";
import api from "../API/api";
import { TWITCH_GET_USER } from "../config/consts";
import { getTwitchToken } from "../utils/authUser";

const PlayerStatsPage = (props) => {
  const [playerIcon, setPlayerIcon] = useState();
  const [player, setPlayer] = useState(props.player);
  const [playerData, setPlayerData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const name = player.username;

  const fetchData = async () => {
    const token = await getTwitchToken();
    try {
      const result = await api.get(`${TWITCH_GET_USER}?login=${name}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPlayerData(result.data.data[0]);
      setPlayerIcon(result.data.data[0].profile_image_url);
    } catch (error) {
      console.error("There was an error!");
    }
    setIsLoading(false);
  };

  //Get user Data
  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <h>loading</h>
      ) : (
        <div className="PlayerStatsPage">
          <div classname="playerIcon">
            <img src={playerIcon} alt="no image" height={200} />
            <h1>{name}</h1>
          </div>
          <div className="streamPlayer">
            <ReactPlayer
              className="streamPlayer"
              url={`twitch.tv/${name}`}
              controls={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStatsPage;
