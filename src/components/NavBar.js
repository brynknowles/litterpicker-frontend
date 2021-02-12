import { NavLink } from "react-router-dom";

function NavBar({ currentUser, setCurrentUser }) {
    // console.log("current user in navbar", currentUser)

    // function login() {
    //     fetch(`${process.env.REACT_APP_API_BASE_URL}/login`, {
    //         method: "POST",
    //     })
    //         .then((r) => r.json())
    //         .then(setCurrentUser);
    // }
    
    // function logout() {
    //     setCurrentUser(null);
    // }

    return (
    <nav className="nav">
        <NavLink exact to="/" className="button">
            Home
        </NavLink>
        <NavLink exact to={"/cleanups"} className="button">
            Explore
        </NavLink>
        {/* <NavLink exact to="/users/:id" className="button">
            Profile
        </NavLink> */}
        <NavLink exact to="/cleanups/new" className="button">
            Create
        </NavLink>
        {/* {currentUser ? (
            <button onClick={logout}>Logout</button>
        ) : (
            <button onClick={login}>Login</button>
        )} */}
        <NavLink exact to="/users/signup" className="button">
            Signup
        </NavLink>
    </nav>
    )
}

export default NavBar;

// return (
//         <nav>
//             <NavLink exact to="/projects" className="button">
//             All Projects
//             </NavLink>
//             <NavLink to="/projects/add" className="button">
//             Add Project
//             </NavLink>
//             {currentUser ? (
//             <button onClick={logout}>Logout</button>
//             ) : (
//             <button onClick={login}>Login</button>
//             )}
//             <button onClick={onDarkModeClick}>
//             </button>
//         </nav>

// );

