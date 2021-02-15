import React, { useState } from 'react'
import EditProfileForm from './EditProfileForm'

function ProfileCard({ user, onUpdateProfile, onDeleteUser }) {
    const { id, avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge } = user

    const [showProfileEditForm, setShowProfileEditForm] = useState(false)

    function toggleEditForm() {
        setShowProfileEditForm(!showProfileEditForm)
    }

    function handleDeleteClick() {
        // console.log("delete clicked")
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
        onDeleteUser(id)
    }

    return (
        <li className="card">  
            <div className="image">
                <img src={avatar} alt="avatar" width="200px"/>
            </div>
            <div className="details">
                <h3>{username}</h3>
                <p>Age: {age}</p>
                <p>Catchphrase: {catchphrase}</p>
                <br/>
                <h3>Badges</h3>
                <ul>
                    <li>Park: {park_badge}</li>
                    <li>Playground: {playground_badge}</li>
                    <li>Shoreline: {shoreline_badge}</li>
                    <li>Trail: {trail_badge}</li>
                    <li>Earth Steward: {earth_steward_badge}</li>
                </ul>
                <button className="button" onClick={toggleEditForm}>Edit Profile</button>
                {showProfileEditForm ? (
                    <EditProfileForm 
                        user={user}
                        onUpdateProfile={onUpdateProfile}
                    />
                    ) : ( 
                        null 
                    )
                }
                <button className="button" onClick={handleDeleteClick}>Delete Profile</button>
            </div>
        </li>
    )
}

export default ProfileCard;
