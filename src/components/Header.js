import LoginForm from "../components/Header/LoginForm"
import SignupForm from "../components/Header/SignupForm"

function Header({ title }) {
    return (
        <header>
            <div className="title">
                <h1>LitterPicker</h1>
            </div>
            <div>
                <button>login</button>
                <button>signup</button>
            </div>
            {/* <LoginForm /> */}
            {/* <SignupForm /> */}
        </header>
    )
}

export default Header;