
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


  
exports.getPlayers =  functions.https.onCall( async (data, constext) => {
    const players = await admin.firestore().collection("Players").get();
    return players.docs.map((doc) => doc.data());
})
  