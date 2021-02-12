import React, { useState } from 'react'

function CleanupCard({ cleanup, onUpdateCheer, onUpdateCleanup, onDeleteCleanup }) {
    // console.log(cleanup)
    const { id, name, location, category, image, date, start_time, end_time, comment, cheer, users } = cleanup
    // console.log("cheer in CleanupCard: ", cheer)
    const [newCheer, setNewCheer] = useState(cheer)

    // console.log("location in CleanupCard: ", location)
    // console.log(cheer, newCheer)

    function changeDate(str) {
        let updatedDate = new Date(str.split('-'))
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return updatedDate.toLocaleDateString('en-US', options)
    }

    const usernames = users.map((user) => user.username)

    function handleCleanupChange() {

    }

    function handleCheersClick(event) {
        event.preventDefault()
        // console.log("clicked")
        const updatedObj = {
            cheer: newCheer + 1
        }

        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedObj)
        })
            .then(r => r.json())
            // .then(console.log)
            .then(updatedCleanup => {
                console.log("updatedCleanup in CleanupCard: ", updatedCleanup)
                onUpdateCheer(updatedCleanup)
            })
        setNewCheer(updatedObj.cheer)
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
        // console.log("edit button clicked!")
        console.log("onUpdateCleanup fn in CleanupCard", onUpdateCleanup)
    }

    function handleDeleteClick() {
        // console.log(id)
        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "DELETE"
        })
        onDeleteCleanup(id)
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
                <p>Start Time: {start_time}</p>
                <p>End Time: {end_time}</p>
                <p>Comment: {comment}</p>
                <p>LitterPickers: {usernames}</p>
            </div>
            <button onClick={handleSignupClick}>Sign Up To Event</button>
            <button onClick={handleEditClick}>Edit Event</button>
            <button className="button" onClick={handleDeleteClick}>Cancel Event</button>
        </li>
    )
}

export default CleanupCard;


    // const eventStartTime = new Date().toUTCString(start_time)

    // const eventEndTime = new Date().toUTCString(end_time)
    
    // const eventStartTime = start_time.strftime("at %I:%M%p")
    
    // function changeTime(str) {
    //     let updatedTime = new Date(str)
    //     updatedTime.toTimeString('en-US')
    // }

            // old way w/ no fetch, just onClick
        // setClaps((claps) => {
        //     return claps + 1
        // });