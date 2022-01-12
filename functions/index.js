const functions = require("firebase-functions");
const admin = require('firebase-admin');
const axios = require("axios");
const cheerio = require("cheerio")
var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


//getter function for players list 
exports.getPlayers =  functions.https.onCall( async (data, constext) => {
    const players = await admin.firestore().collection("Players").get();
    return players.docs.map((doc) => doc.data());
})

exports.getRecentTourney =  functions.https.onCall( async (data, constext) => {
  const tourney = await admin.firestore().collection("Tournaments").get();
  return tourney.docs.map((doc) => doc.data())
})

//Scheduled function to update list of players and data
exports.updatePlayers = functions.pubsub.schedule('every 240 hours').onRun( async (context) => {
  let temp = [];

  try {
    let html = await axios.get(
      "https://www.esportsearnings.com/history/2020/games/648-call-of-duty-warzone"
    );
    console.log("HTML: ")
    const $ = await cheerio.load(html.data);
    let data = [];

    $("tr.highlight").each((i, elem) => {
      const playerID = $(elem).find("td.detail_list_player").children().get(1)
        .children[0].data;
      let tempData = [...data, playerID];
      data = tempData;
    });

    temp = data.toString().split(",");
    temp.forEach((player) => {
      console.log("Player: " + player)
    })
  } catch(err) {
    console.error(err)
  }
})
