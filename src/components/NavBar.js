
function NavBar({ selectedButton, onNavClick }) {

    // ROUTES
    // /home
    // /cleanups
    // /profile
    // /cleanups/add
    // /cleanup/:id

    return (
    <div className="nav">
        <span onClick={() => onNavClick("Home")} className={selectedButton === "Home" ? "item active" : "item"}>
            <button className="home">Home</button>
        </span>
        <span onClick={() => onNavClick("Explore")} className={selectedButton === "Explore" ? "item active" : "item"}>
            <button className="explore">Explore</button>
        </span>
        <span onClick={() => onNavClick("Profile")} className={selectedButton === "Profile" ? "item active" : "item"}>
            <button className="profile">Profile</button>
        </span>
        <span onClick={() => onNavClick("Create")} className={selectedButton === "Create" ? "item active" : "item"}>
            <button className="create">Create</button>
        </span>
    </div>
    )
}

export default NavBar;
