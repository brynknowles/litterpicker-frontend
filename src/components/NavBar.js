
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
            <button className="home">home</button>
        </span>
        <span onClick={() => onNavClick("explore")} className={selectedNav === "explore" ? "item active" : "item"}>
            <button className="explore">explore</button>
        </span>
        <span onClick={() => onNavClick("profile")} className={selectedNav === "profile" ? "item active" : "item"}>
            <button className="profile">profile</button>
        </span>
        <span onClick={() => onNavClick("create")} className={selectedNav === "create" ? "item active" : "item"}>
            <button className="create">create</button>
        </span>
    </div>
    )
}

export default NavBar;


{/* <button><i class="fas fa-home"></i></button>
<button><i class="fas fa-search-location"></i></button>
<button><i class="far fa-user-circle"></i></button>
<button><i class="fas fa-plus"></i></button> */}