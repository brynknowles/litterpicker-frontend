// import HomePage from "../components/Nav/HomePage"
import ProfilePage from "../components/Nav/ProfilePage"
import CreateForm from "../components/Nav/CreateForm"
import ExplorePage from "../components/Nav/ExplorePage"


function NavBar() {
    return (
    <div>
        {/* <button>Explore</button> */}
        <ExplorePage />
        {/* <HomePage /> */}
        <ProfilePage />
        <CreateForm />

    </div>
    )
}

export default NavBar;