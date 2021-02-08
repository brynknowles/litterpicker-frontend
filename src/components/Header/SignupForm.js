
function SignupForm() {
    return (
        <section>
            <h1>Signup Form</h1>
            <form className="form">
                <label htmlFor="avatar">Avatar (Image URL):</label>
                <input type="text" id="image" name="image"></input>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age"></input>
                <label htmlFor="catchphrase">Catchphrase:</label>
                <input type="number" id="catchphrase" name="catchphrase"></input>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default SignupForm