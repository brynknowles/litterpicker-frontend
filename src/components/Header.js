import LoginForm from "../components/Header/LoginForm"
import SignupForm from "../components/Header/SignupForm"

function Header({ title }) {
    return (
        <header>
            {title}
            <button>login</button>
            <button>signup</button>
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}
        </header>
    )
}

export default Header;