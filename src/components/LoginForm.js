
function LoginForm() {

    return (
        <section>
            <h1>Login Form</h1>
            <form className="form">
                <label htmlFor="name">Name:</label>
                <input type="text"></input>
                <label type="password">Password:</label>
                <input></input>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default LoginForm