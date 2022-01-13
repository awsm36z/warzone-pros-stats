import "./Css_Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlayerStatsPage from "./pages/PlayerStatsPage";
import PlayerList from "./pages/PlayerList";
import { useState, useEffect } from "react";
import firebaseconfig from "./config/firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import cheerio from "cheerio";
import axios from "axios";

const app = initializeApp(firebaseconfig);
const functions = getFunctions(app);

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true)

  //Test function for google cloud functions using api calls for axios and cheerio
  // const test = async () => {
  //   try {
  //     let html = await axios.get(
  //       "https://cors-anywhere.herokuapp.com/https://www.esportsearnings.com/games/648-call-of-duty-warzone/top-players"
  //     );
  //     const $ = await cheerio.load(html.data);
  //     let data = [];

  //     $("tr.highlight").each((i, elem) => {
  //       const playerID = $(elem).find("td.detail_list_player").children().get(1)
  //         .children[0].data;

  //       let tPlayerRanking = $(elem)
  //       .find("td").get(0).children[0].data;
  //       let str = tPlayerRanking;
  //       tPlayerRanking = str.substring(0,str.length-1);
  //       const playerRanking = parseInt(tPlayerRanking, 10);

  //       const playerRealName = $(elem)
  //         .find("td.detail_list_player")
  //         .children()
  //         .get(2).children[0].data;

  //       const totalEarnedFromGame = $(elem).find("td").get(3).children[0].data;

  //       const nation = $(elem).find("td").get(1).children[0].children[0]
  //         .attribs.title;

  //       const player = {
  //         ranking: playerRanking,
  //         username: playerID,
  //         realName: playerRealName,
  //         totalEarnings: totalEarnedFromGame,
  //         playerNation: nation,
  //       };

  //       let tempData = [...data, player];
  //       data = tempData;
  //     });

  //     data.forEach((player) => {
  //       console.log(player);
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const getplayers = async () => {
    const getPlayers = await httpsCallable(functions, "getPlayers");
    const tlist = await getPlayers({});
    setPlayers(tlist.data);
    setLoading(false)
  };

  useEffect(() => {
    //  test();
    getplayers();
  }, [loading]);
  return (
    <div className="App">
      {loading ? <h1>loading</h1> : <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playerstatspage" element={<Home />} />
          {players.map((player) => {
            let name = player.username;
            return (
              <Route
                path={`/${name}`}
                key={name}
                element={<PlayerStatsPage player={player} />}
              />
            );
          })}
          <Route
            path="/playerlist"
            element={<PlayerList playerslist={players} />}
          />
        </Routes>
      </Router>
      </div>}
    </div>
  );
}

export default App;
