import logo from "./logo.svg";
import "./Css_Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlayerStatsPage from "./pages/PlayerStatsPage";
import PlayerList from "./pages/PlayerList";
import {players} from "./config/players";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playerstatspage" element={<Home />} />

          <Route path="/playerlist" element={<PlayerList />} />
         {players.map((name) =>(
           <Route path={`/${name}`} 
            key = {name}
           element = {<PlayerStatsPage name = {name}/>}
           />
         ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
