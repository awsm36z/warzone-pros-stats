import logo from "./logo.svg";
import "./Css_Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlayerStatsPage from "./pages/PlayerStatsPage";
import PlayerList from "./pages/PlayerList";
import { getPlayers } from "./config/players";
import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";

function App() {
  const [players, setPlayers] = useState([]);
  const usersCollectionRef = collection(db, "Players");
  const [loading, setLoading] = useState(true);

  //  const createPlayersList = async () => {
  //   getPlayers().then((list) => {
  //     console.log("\nhere is the list\n" + list)
  //   })
  // }

  const initPlayers = async () => {
    const data = await getDocs(usersCollectionRef);
    const tList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPlayers(tList);
    setLoading(false);
  };
  useEffect(() => {
    // createPlayersList()
    initPlayers();
  }, [loading]);
  console.log(players)
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playerstatspage" element={<Home />} />
          {players.map((player) => {
            let name = player.name;
            return (
              <Route
                path={`/${name}`}
                key={name}
                element={<PlayerStatsPage player={player} />}
              />
            );
          })}
          <Route path="/playerlist" element={<PlayerList playerslist = {players} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
