import "../Css_Styles/Navbar.css"
const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1 className = "WebsiteName">Warzone Pro Tracker</h1>
            <div className = "links">
                <a href = "/Home">Home</a>
                <a href = "/PlayerStatsPage">Player Stats</a>
            </div>

        </nav>
     );
}
 
export default Navbar;