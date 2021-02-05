import HomePage from "../components/Nav/HomePage"
import ProfilePage from "../components/Nav/ProfilePage"
import CreateForm from "../components/Nav/CreateForm"
import ExplorePage from "../components/Nav/ExplorePage"


function NavBar({ cleanups }) {


    // ROUTES
    // /home
    // /cleanups
    // /profile
    // /cleanups/add
    // /cleanup/:id

    return (
    <div>
        <button><i class="fas fa-home"></i></button>
        {/* <HomePage /> */}
        <button><i class="fas fa-search-location"></i></button>
        {/* <ExplorePage cleanups={cleanups} /> */}
        <button><i class="far fa-user-circle"></i></button>
        {/* <ProfilePage /> */}
        <button><i class="fas fa-plus"></i></button>
        {/* <CreateForm /> */}
    </div>
    )
}

export default NavBar;