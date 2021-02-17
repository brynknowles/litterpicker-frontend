import React, { useState } from 'react'
import { format } from "date-fns";
import EditCleanupForm from './EditCleanupForm';

function CleanupCard({ currentUser, cleanup, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onLeaveEvent, onDeleteCleanup }) {
    // console.log("cleanup.id in CleanupCard: ", cleanup.id)
    // console.log("currentUser.id in CleanupCard: ", currentUser.id)
    // console.log("userCleanups in CleanupCard: ", userCleanups)

    const { id, name, location, category, image, date, start_time, end_time, comment, cheer, users, user_cleanups } = cleanup
    // console.log("user_cleanups in CleanupCard: ", user_cleanups)

    const [newCheer, setNewCheer] = useState(cheer)
    const [showEditForm, setShowEditForm] = useState(false)

    const eventAttendees = users.map((user) => <li key={user.username}>- {user.username}</li>)

    const cleanupEventId = user_cleanups.map((userCleanup) => userCleanup.id)

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
            .then(updatedCleanup => {
                // console.log("updatedCleanup in CleanupCard: ", updatedCleanup)
                onUpdateCheer(updatedCleanup)
            })
        setNewCheer(updatedObj.cheer)
    }

    function handleDeleteClick() {
        // console.log(id)
        fetch(`http://localhost:3000/cleanups/${id}`, {
            method: "DELETE"
        })
        onDeleteCleanup(id)
    }

    function handleSignupClick(e) {
        e.preventDefault()
        // console.log("signup clicked")
        fetch("http://localhost:3000/user_cleanups/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                cleanup_id: id
            })
        })
        .then(r => r.json())
        .then(newAttendee => {
            console.log("newAttendee in POST: ", newAttendee)
            onAttendeeSignup(newAttendee)
        })
    }

    // function handleLeaveEventClick() {
    //     fetch(`http://localhost:3000/user_cleanups/${cleanupEventId}`, {
    //         method: "DELETE",
    //         headers: {
    //             'Content-Type': "application/json"
    //         }
    //     })
    //     .then(r => r.json())
    //     .then(deletedObj => {
    //         console.log("deletedObj in CleanupCard: ", deletedObj)
    //         onLeaveEvent(deletedObj)
    //     })
    //     // window.location.reload()
    //     console.log("cleanup after delete userCleanup: ", cleanup)
    // }

    // function handleEventClick() {
    //     fetch()
    //     .then(r => r.json()) 
    //     .then(deletedObj => {
    //     onLeaveEvent(cleanupEventID)
    //     }
    //     }
// console.log(cleanup)

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
                    {eventAttendees}
                </ul>
            </div>
            <button onClick={handleSignupClick}>Sign Up To Event</button>
            {/* <button onClick={handleLeaveEventClick}>Leave Event</button> */}
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
