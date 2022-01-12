import React from "react";
import Navbar from "../components/Navbar";
import RecentTournaments from "../components/RecentTournamentsCard";
import "../Css_Styles/Home.css";
import { useState, useEffect } from "react";
import firebaseconfig from "../config/firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerStatsPage from "./PlayerStatsPage";

const app = initializeApp(firebaseconfig);
const functions = getFunctions(app);

const Home = () => {
  const [recentTourney, setRecentTourney] = useState({});
  const [loading, setloading] = useState(true);
  const [tourneyName, setTourneyName] = useState();

  const gettourney = async () => {
    const getTourney = await httpsCallable(functions, "getRecentTourney");
    const tour = await getTourney({});
    setRecentTourney(tour.data);
    console.log(tour.data[0].name);
    setloading(false);
  };

  useEffect(() => {
    gettourney();
    if (!loading) {
      setTourneyName(recentTourney[0].name);
    }
  }, [loading]);

  return (
    <div className="Home">
      <a href="/playerlist">CLICK HERE TO GET STARTED</a>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
        <a href={`/${recentTourney[0].name}`}>
          Most recent Tournament: {recentTourney[0].name}
        </a>
        <h1>{Date().toLocaleLowerCase()}</h1>
        </div>
      )}
      <RecentTournaments />
    </div>
  );
};

export default Home;
