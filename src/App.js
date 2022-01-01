import "./Css_Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlayerStatsPage from "./pages/PlayerStatsPage";
import PlayerList from "./pages/PlayerList";
// import { getPlayers } from "./config/players";
import { useState, useEffect } from "react";
import firebaseconfig from "./config/firebaseconfig";
import {initializeApp} from "firebase/app"
import {getFunctions, httpsCallable} from "firebase/functions"

const app = initializeApp(firebaseconfig);
const functions = getFunctions(app);

function App() {
  const [players, setPlayers] = useState([]);
  const getplayers = async () => {
    const getPlayers =  await httpsCallable(functions, "getPlayers");
    const tlist = await getPlayers({})
    setPlayers(tlist.data)
  }
  useEffect(() => {
    getplayers();
  }, []);
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
