import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDP4PuouS6cL-fOooBtIARbtNehD4MqA8I",
  authDomain: "warzoneprostats.firebaseapp.com",
  projectId: "warzoneprostats",
  storageBucket: "warzoneprostats.appspot.com",
  messagingSenderId: "713733423137",
  appId: "1:713733423137:web:9d013b397972ee3eaa2360",
  measurementId: "G-0KKJMDPKE7"
};

//initialize firebase for app
initializeApp(firebaseConfig)

//init services firestore
const db = getFirestore();
//collection reference
const colRef = collection(db, 'Players');
//get collection data
getDocs(colRef).then((player) => {
  console.log(player.docs)
  let players = []
  player.docs.forEach((doc)=> {
    players.push({...doc.data(), id: doc.id})
  })
  console.log(players)
}).catch((error) => {
  console.error("error on index.js" + error);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
