
const functions = require("firebase-functions");
const admin = require('firebase-admin');

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


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
exports.updatePlayers = functions.pubsub.schedule('every 240 hours').onRun((context) => {
  console.log("this ran!");
  return null;
//   const getPlayers = async () => {
//     try {
//       let html = await axios.get(
//         "https://cors-anywhere.herokuapp.com/https://www.esportsearnings.com/history/2020/games/648-call-of-duty-warzone"
//       );
//       const $ = await cheerio.load(html.data);
//       let data = [];
  
//       $("tr.highlight").each((i, elem) => {
//         const playerID = $(elem).find("td.detail_list_player").children().get(1)
//           .children[0].data;
//           let tempData = [ ...data, playerID];
//         data = tempData;
//       });
      
//       return data.toString().split(",");
//     } catch (error) {
//       console.error("ERROR in players.js " + error);
//     }
//   };
})

// import axios from "axios";
// import cheerio from "cheerio";