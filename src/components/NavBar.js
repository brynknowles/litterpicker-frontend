
function NavBar({ selectedNav, onNavClick }) {

    // ROUTES
    // /home
    // /cleanups
    // /profile
    // /cleanups/add
    // /cleanup/:id

    return (
    <div className="nav">
        <span onClick={() => onNavClick("home")} className={selectedNav === "home" ? "item active" : "item"}>
            <button className="home">Home</button>
        </span>
        <span onClick={() => onNavClick("explore")} className={selectedNav === "explore" ? "item active" : "item"}>
            <button className="explore">Explore</button>
        </span>
        <span onClick={() => onNavClick("profile")} className={selectedNav === "profile" ? "item active" : "item"}>
            <button className="profile">Profile</button>
        </span>
        <span onClick={() => onNavClick("create")} className={selectedNav === "create" ? "item active" : "item"}>
            <button className="create">Create</button>
        </span>
    </div>
    )
}

export default NavBar;
