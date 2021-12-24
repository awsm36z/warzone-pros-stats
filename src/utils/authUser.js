import { TWITCH_GET_TOKEN, CLIENT_ID, CLIENT_SECRET } from "../config/consts";
import axios from "axios";
export const getUserToken = async (authURL, scopes) => {
  return await axios
    .post(
      `${authURL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials&scope=${scopes}`
    )
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) =>
      console.error("Error in authuser getusertoken line 3 " + error)
    );
};

export const getTwitchToken = async () => {
  return await getUserToken(TWITCH_GET_TOKEN, "user_read");
};
