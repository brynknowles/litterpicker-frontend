import React, { useState } from 'react'

function CleanupForm() {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        category: "",
        image: "",
        date: Date.now(),
        duration: 0,
        comment: ""
    });

    console.log(formData)

    function handleSubmit(event) {
        event.preventDefault()
        // console.log("submitting")
    }


    return (
        <section>
            {/* <h1>Create A Cleanup</h1> */}
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData(e.target.value)}/>
                <input type="text" id="location" name="location" placeholder="Location" value={formData.location}/>
                <label for="category">Choose a Category:</label>
                <select id="category" name="category" value={formData.category} onChange={(e) => setFormData(e.target.value)}>
                    <optgroup label="Category">
                        <option value={formData.category}>Park</option>
                        <option value={formData.category}>Playground</option>
                        <option value={formData.category}>Shoreline</option>
                        <option value={formData.category}>Trail</option>
                        <option value={formData.category}>Other</option>
                    </optgroup>
                </select>
                <input type="url" id="image" name="image" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData(e.target.value)}/>
                <input type="date"  id="date" name="date" value={formData.date}/>
                <input type="number"  id="duration" name="duration" placeholder="Duration (in Hours)" value={formData.duration} onChange={(e) => setFormData(e.target.value)}/>
                <input type="text"  id="comment" name="comment" placeholder="Comment" value={formData.comment} onChange={(e) => setFormData(e.target.value)}/>
                <button type="submit">Create Cleanup Event</button>
            </form>
        </section>
    )
}

export default CleanupForm;