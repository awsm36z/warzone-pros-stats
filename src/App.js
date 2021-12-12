import logo from './logo.svg';
import './Css_Styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
          <Routes>
            <Route path = "/home" element = {<Home />} />
          </Routes>
        </Router>
    </div>
  );
}

 
export default App;
