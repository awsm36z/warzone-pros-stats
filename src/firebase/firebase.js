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
  const app = initializeApp(firebaseConfig)
  
  //init services firestore
  export const db = getFirestore(app);
