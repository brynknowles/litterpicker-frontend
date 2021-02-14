import React, { useState } from 'react'

function EditCleanupForm({ cleanup, onUpdateCleanup }) {
    const { id, image, date, start_time, end_time, comment } = cleanup

    const [showForm, setShowForm] = useState(false)
    const [newImage, setNewImage] = useState(image)
    const [newDate, setNewDate] = useState(date)
    const [newStartTime, setNewStartTime] = useState(start_time)
    const [newEndTime, setNewEndTime] = useState(end_time)
    const [newComment, setNewComment] = useState(comment)

    function handleEditSubmit(e) {
        e.preventDefault()
        // console.log("edit button clicked!")
        console.log("onUpdateCleanup fn in CleanupCard", onUpdateCleanup)

        const updatedObj = {
            image: newImage,
            date: newDate,
            start_time: newStartTime,
            end_time: newEndTime,
            comment: newComment
        }

        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedObj)
        })
            .then(r => r.json())
            .then(updatedCleanup => {
                console.log("updated date and time in CleanupCard: ", updatedCleanup)
                onUpdateCleanup(updatedCleanup)
            })
        setNewImage(updatedObj.image)
        setNewDate(updatedObj.date)
        setNewStartTime(updatedObj.start_time)
        setNewEndTime(updatedObj.end_time)
        setNewComment(updatedObj.comment)
        setShowForm(showForm)
    }

    return (
        <section>
            <h1>Edit Cleanup Form</h1>
            <form className="form" onSubmit={handleEditSubmit}>
            <label htmlFor="image">Image URL:</label>
                <input type="url" id="image" name="image" value={newImage} onChange={(e) => setNewImage(e.target.value)}/>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={newDate} onChange={(e) => setNewDate(e.target.value)}/>
                <label htmlFor="start_time">Start Time:</label>
                <input type="time" id="start_time" name="start_time" value={newStartTime} onChange={(e) => setNewStartTime(e.target.value)}/>
                <label htmlFor="end_time">End Time:</label>
                <input type="time" id="end_time" name="end_time" value={newEndTime} onChange={(e) => setNewEndTime(e.target.value)}/>
                <label htmlFor="comment">Comment:</label>
                <input type="text" id="comment" name="comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                <button type="submit">Save Changes</button>
            </form>
        </section>
    )
}

export default EditCleanupForm