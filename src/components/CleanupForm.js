import React, { useState } from 'react'

function CleanupForm({ users, onCreateCleanup }) {
    // console.log("users in CleanupForm: ", users)
    // const { username } = users

    const optionItems = users.map(user => {
        return <option key={user.id} value={user.username}>{user.username}</option>
    })

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        category: "",
        image: "",
        date: Date.now(),
        duration: 0,
        comment: "",
        username: ""
    });

    console.log(formData.username)
    // console.log("form data ", formData)

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("submitting")
        fetch("http://localhost:3000/cleanups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((newCleanup) => {
                onCreateCleanup(newCleanup);
            });
    }

    function handleChange(event) {
        // console.log("event.target.id", event.target.id)
        // console.log("event.target.value", event.target.value)
        const key = event.target.id;
        let value = event.target.value;
        setFormData({
            ...formData,
            [key]: value
        });
        // console.log( "key and value", { key, value })
        // console.log("formData in handleChange", formData)
    }

    // console.log("formData in CleanupForm: ", formData)

    return (
        <section>
            <div>
                <h1>Create A Cleanup Event</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}/>
                <label htmlFor="category">Choose a Category:</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange}>
                    <optgroup label="Category">
                        <option value="Park">Park</option>
                        <option value="Playground">Playground</option>
                        <option value="Shoreline">Shoreline</option>
                        <option value="Trail">Trail</option>
                        <option value="Other">Other</option>
                    </optgroup>
                </select>
                <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" name="image" value={formData.image} onChange={handleChange}/>
                <label htmlFor="date">Date:</label>
                <input type="date"  id="date" name="date" value={formData.date} onChange={handleChange}/>
                <label htmlFor="duration">Duration in Hours:</label>
                <input type="number"  id="duration" name="duration" value={formData.duration} onChange={handleChange}/>
                <label htmlFor="comment">Comment:</label>
                <input type="text"  id="comment" name="comment" value={formData.comment} onChange={handleChange}/>
                <label htmlFor="username">Username:</label>
                <select id="username" name="username" value={formData.username} onChange={handleChange}>
                    <optgroup label="Username">
                        {optionItems}
                    </optgroup>
                </select>
                <button type="submit">Create Cleanup Event</button>
            </form>
        </section>
    )
}

export default CleanupForm;