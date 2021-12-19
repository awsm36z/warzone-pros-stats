import logo from "./logo.svg";
import "./Css_Styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PlayerStatsPage from "./pages/PlayerStatsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/playerstatspage" element={<Home />} />
          <Route
            path="/diazbiffle"
            element={
              <PlayerStatsPage
                name="diazbiffle"
                realname="Diaz"
              />
            }
          />

          <Route
            path="/aydan"
            element={
              <PlayerStatsPage
                name="aydan"
                realname="Aydan"
                earnings={230658.34}
              />
            }
          />

          <Route
            path="/diazbiffle"
            element={
              <PlayerStatsPage
                name="diazbiffle"
                realname="Diaz"
                earnings={230658.34}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
