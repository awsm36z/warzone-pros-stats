import "../Css_Styles/Navbar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/Home" className="WebsiteName">
        Warzone Pro Tracker
      </a>
      <div className="links">

        <DropdownButton id="dropdown-basic-button" title="Players">
          <Dropdown.Item href="/diazbiffle">DiazBiffle</Dropdown.Item>
          <Dropdown.Item href="/Aydan">Aydan</Dropdown.Item>
          <Dropdown.Item href="/HusKerrs">HusKerrs</Dropdown.Item>
        </DropdownButton>

        <a href="/PlayerStatsPage">Player Stats</a>
      </div>
    </nav>
  );
};

export default Navbar;
