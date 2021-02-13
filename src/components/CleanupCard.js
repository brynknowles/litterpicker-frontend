import React, { useState } from 'react'
import { format } from "date-fns";
import EditCleanupForm from './EditCleanupForm';

function CleanupCard({ cleanup, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onDeleteCleanup }) {
    const { id, name, location, category, image, date, start_time, end_time, comment, cheer, users } = cleanup
    const [newCheer, setNewCheer] = useState(cheer)
    // const [newDate, setNewDate] = useState(date)
    // const [newStartTime, setNewStartTime] = useState(start_time)
    // const [newEndTime, setNewEndTime] = useState(end_time)
    const [showEditForm, setShowEditForm] = useState(false)

    const attendees = users.map((user) => <li>- {user.username}</li>)

    function changeDate(str) {
        let updatedDate = new Date(str.split('-'))
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return updatedDate.toLocaleDateString('en-US', options)
    }

    let startTime = new Date(start_time);
    startTime = new Date(startTime.setHours(startTime.getHours() + 5)); 

    let endTime = new Date(end_time);
    endTime = new Date(endTime.setHours(endTime.getHours() + 5)); 

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
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
        //         cleanup_id: cleanup.id
        //     })
        // })
        // .then(r => r.json())
        // .then(console.log)
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
                <p>Start Time: {format(startTime, "h:mm aa")}</p>
                <p>End Time: {format(endTime, "h:mm aa")}</p>
                <p>Comment: {comment}</p>
                <p>LitterPickers:</p>
                <ul>
                    {attendees}
                </ul>
            </div>
            <button onClick={handleSignupClick}>Sign Up To Event</button>
            <button onClick={toggleEditForm}>Edit Event</button>
            {showEditForm ? (
                <EditCleanupForm 
                    cleanup={cleanup} 
                    onUpdateCleanup={onUpdateCleanup} 
                />
                ) : (
                    null
                )
            }
            <button className="button" onClick={handleDeleteClick}>Cancel Event</button>
        </li>
    )
}

export default CleanupCard;
