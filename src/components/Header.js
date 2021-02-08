import React, { useState } from 'react'
import LoginForm from "../components/Header/LoginForm"
import SignupForm from "../components/Header/SignupForm"

function Header() {
    const [isLoginClicked, setIsLoginClicked] = useState(false)
    const [isSignupClicked, setIsSignupClicked] = useState(false)


    function handleLoginClick() {
        setIsLoginClicked(!isLoginClicked)
    }

    function handleSignupClick() {
        setIsSignupClicked(!isSignupClicked)
    }

    return (
        <header>
            <div className="title">
                <h1>LitterPicker</h1>
            </div>
            <div className="button">
                {isLoginClicked ? <LoginForm /> : null}  
                <button onClick={handleLoginClick}>Login</button>
                {isSignupClicked ? <SignupForm /> : null}
                <button onClick={handleSignupClick}>Signup</button>
            </div>
        </header>
    )
}

export default Header;