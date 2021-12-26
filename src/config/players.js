import axios from "axios";
import cheerio from "cheerio";

export const getPlayers = async () => {
  try {
    let html = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://www.esportsearnings.com/history/2020/games/648-call-of-duty-warzone"
    );
    const $ = await cheerio.load(html.data);
    let data = [];

    $('tr.highlight').each((i, elem) => {
        const playerID = $(elem).find('td.detail_list_player').children().get(1).children[0].data
        console.log(playerID)
        data.push(playerID)
      });
    return data
  } catch (error) {
    console.error("ERROR in players.js " + error);
  }
};

export const players = [
  "diazbiffle",
  "aydan",
  "huskerrs",
  "icemanisaac",
  "tommey",
  "nickmercs",
];
