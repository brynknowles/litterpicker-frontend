import React, { useState } from 'react'

function SignupForm({ onCreateUser }) {
    // console.log("onCreateUser in SignupForm", onCreateUser)

    const [formData, setFormData] = useState({
        avatar: "",
        username: "",
        password: "",
        age: 1,
        catchphrase: ""
    })

    function handleChange(event) {
        const key = event.target.id;
        let value = event.target.value;
        setFormData({
            ...formData,
            [key]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitting new user signup")

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newUser) => {console.log("newUser after submit", newUser)
                onCreateUser(newUser);
            });

            setFormData({
                avatar: "",
                username: "",
                password: "",
                age: 1,
                catchphrase: ""
            })
    }

    // console.log("form data ", formData)

    return (
        <section>
            <h1>Signup Form</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="avatar">Avatar (Image URL):</label>
                <input type="text" aria-label="user avatar" id="avatar" name="avatar" value={formData.avatar} onChange={handleChange}></input>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}></input>
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" value={formData.password} onChange={handleChange}></input>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={formData.age} onChange={handleChange}></input>
                <label htmlFor="catchphrase">Catchphrase:</label>
                <input type="text" id="catchphrase" name="catchphrase" value={formData.catchphrase} onChange={handleChange}></input>
                <button type="submit">Sign Up</button>
            </form>
        </section>
    )
}

export default SignupForm