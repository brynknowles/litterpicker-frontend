import React, { useState } from 'react'
// import { format } from "date-fns";

function CleanupForm({ onCreateCleanup }) {
    // console.log("users in CleanupForm: ", users)
    // const { username } = users

    // const optionItems = users.map(user => {
    //     return <option key={user.id} value={user.username}>{user.username}</option>
    // })

        // Ian's way to convert backend time table column type
    // const date = new Date("Thu, 11 Feb 2021 20:10:42 GMT");
    // console.log(format(date, "h:mm:ss aa"));

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        category: "Park",
        image: "",
        date: "",
        start_time: "",
        end_time: "",
        comment: ""
    });

    function handleChange(event) {
        // console.log("event.target.id", event.target.id)
        // console.log("event.target.value", event.target.value)
        const key = event.target.name;
        let value = event.target.value;
        setFormData({
            ...formData,
            [key]: value
        });

        // console.log( "key and value", { key, value })
        // console.log("formData in handleChange", formData)
    }

    // console.log("formData before submit", formData)
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
                console.log("newCleanup after submit", newCleanup)
                onCreateCleanup(newCleanup);
            });
        console.log("formData.category on submit", formData.category)
        setFormData({
            name: "",
            location: "",
            category: "",
            image: "",
            date: "",
            start_time: "",
            end_time: "",
            comment: ""
        })

    }

    console.log("formData before submit", formData)

    // console.log("formData in CleanupForm: ", formData)

    // minute_step: 15, ampm: true

    // HH:mm

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
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}/>
                <label htmlFor="start_time">Start Time:</label>
                <input type="time" id="start_time" name="start_time" value={formData.start_time} onChange={handleChange}/>
                <label htmlFor="end_time">End Time:</label>
                <input type="time" id="end_time" name="end_time" value={formData.end_time} onChange={handleChange}/>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" name="comment" value={formData.comment} onChange={handleChange}/>
                <button type="submit">Create Cleanup Event</button>
            </form>
        </section>
    )
}

export default CleanupForm;

