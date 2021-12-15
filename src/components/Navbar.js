import "../Css_Styles/Navbar.css"
const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <a href = "/Home" className = "WebsiteName">Warzone Pro Tracker</a>
            <div className = "links">
                <a href = "/PlayerStatsPage">Player Stats</a>
            </div>

        </nav>
     );
}
 
export default Navbar;