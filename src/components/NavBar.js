// import HomePage from "../components/Nav/HomePage"
import LoginForm from "./Header/LoginForm"
import SignupForm from "./Header/SignupForm"
import ProfilePage from "../components/Nav/ProfilePage"
import CreateForm from "../components/Nav/CreateForm"
import ExplorePage from "../components/Nav/ExplorePage"


function NavBar() {
    return (
    <div>
        <ExplorePage />
        <ProfilePage />
        <CreateForm />
    </div>
    )
}

export default NavBar;