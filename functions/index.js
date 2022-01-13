const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const cheerio = require("cheerio");
var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

//getter function for players list
exports.getPlayers = functions.https.onCall(async (data, constext) => {
  const players = await admin.firestore().collection("Players").get();
  return players.docs.map((doc) => doc.data());
});

exports.getRecentTourney = functions.https.onCall(async (data, constext) => {
  const tourney = await admin.firestore().collection("Tournaments").get();
  return tourney.docs.map((doc) => doc.data());
});

//Scheduled function to update list of players and data
exports.updatePlayers = functions.pubsub
.schedule('0 0 1 2 *')
.timeZone('America/Chicago') .onRun(async (context) => {
    try {
      let html = await axios.get(
        "https://www.esportsearnings.com/games/648-call-of-duty-warzone/top-players"
      );
      const $ = await cheerio.load(html.data);
      let data = [];

      $("tr.highlight").each((i, elem) => {
        const playerID = $(elem).find("td.detail_list_player").children().get(1)
          .children[0].data;

        let tPlayerRanking = $(elem).find("td").get(0).children[0].data;
        let str = tPlayerRanking;
        tPlayerRanking = str.substring(0, str.length - 1);
        const playerRanking = parseInt(tPlayerRanking, 10);

        const playerRealName = $(elem)
          .find("td.detail_list_player")
          .children()
          .get(2).children[0].data;

        const totalEarnedFromGame = $(elem).find("td").get(3).children[0].data;

        const nation = $(elem).find("td").get(1).children[0].children[0]
          .attribs.title;

        const player = {
          ranking: playerRanking,
          username: playerID,
          realName: playerRealName,
          totalEarnings: totalEarnedFromGame,
          playerNation: nation,
        };

        let tempData = [...data, player];
        data = tempData;
      });

      data.forEach((player) => {
        admin.firestore().collection("Players").add(player).then(console.log(player))
      });
    } catch (err) {
      console.error(err);
    }
  });

  