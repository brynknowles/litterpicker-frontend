import React, { useState } from 'react'

function CleanupCard({ cleanup, onUpdateCheer, onDeleteCleanup }) {
    const { id, name, location, category, image, date, start_time, end_time, comment, cheer, users } = cleanup
    console.log("cheer in CleanupCard: ", cheer)
    const [newCheer, setNewCheer] = useState(0)
    // console.log("location in CleanupCard: ", location)

    function changeDate(str) {
        let updatedDate = new Date(str.split('-'))
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return updatedDate.toLocaleDateString('en-US', options)
    }

    function changeTime(str) {
        let updatedTime = new Date(str)
        updatedTime.toTimeString('en-US')
    }

    const usernames = users.map((user) => user.username)

    function handleCheersClick(event) {
        event.preventDefault()
        console.log("clicked")
        const updateObj = {
            cheer: newCheer + 1
        }

        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj)
        })
        .then(r => r.json())
        // .then(console.log("cheering"))
        .then(updatedCheer => {
        onUpdateCheer(updatedCheer)
        setNewCheer(updatedCheer)
        })
        // .then(onUpdateCheers)

        // old way w/ no fetch, just onClick
        // setClaps((claps) => {
        //     return claps + 1
        // });
    }

    function handleSignupClick() {
        console.log("signup clicked")
        // fetch(`http://localhost:3000/user_cleanups/${id}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         user_id: current_user.id,
        //         cleanup_id: current_cleanup.id
        //     })
        // })
        // .then(r => r.json())
        // .then(console.log)
    }

    function handleEditClick() {
        console.log("edit button clicked!")
    }

    function handleDeleteClick() {
        // console.log(id)
        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "DELETE"
        })
        onDeleteCleanup(cleanup)
    }

    return (
        <li className="card">
            <div className="image">
                <img src={image} alt="cleanup site" width="200px"/>
                <button onClick={handleCheersClick}>👏 {cheer} </button>
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Location: {location}</p>
                <p>Category: {category}</p>
                <p>Date: {changeDate(date)}</p>
                <p>Start Time: {start_time} hr(s)</p>
                <p>End Time: {end_time} hr(s)</p>
                <p>Comment: {comment}</p>
            </div>
            <div className="profile-button">
                <button><p>LitterPickers: {usernames}</p></button>
            </div>
            <button onClick={handleSignupClick}>Sign Up To Event</button>
            <button onClick={handleEditClick}>Edit Event</button>
            <button onClick={handleDeleteClick}>Cancel Event</button>
        </li>
    )
}

export default CleanupCard;
