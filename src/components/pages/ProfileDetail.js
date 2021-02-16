import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from "react-router-dom";
import EditProfileForm from '../EditProfileForm'

function ProfileDetail({ onUpdateProfile, onDeleteUser }) {
    // const [profile, setProfile] = useState(null)
    // const [showProfileEditForm, setShowProfileEditForm] = useState(false)

    // const id = 1

    // const params = useParams();
    // console.log("params in ProfileDetail: ", params);

    // function toggleEditForm() {
    //     setShowProfileEditForm(!showProfileEditForm)
    // }

    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/${params.id}`)
    //     .then((r) => r.json())
    //     .then(console.log)
    //     // .then((profile) => {
    //     //     console.log("profile after fetch: ", profile)
    //     //     setProfile(profile)
    //     // })
    // }, [params.id])

    // console.log("profile in ProfileDetail: ", profile)

    // const { avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge } = profile

    // console.log("destructured attributes: ", { avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge })

    // function handleDeleteClick() {
    //     // console.log("delete clicked")
    //     fetch(`http://localhost:3000/users/${params.id}`, {
    //         method: "DELETE"
    //     })
    //     onDeleteUser(params.id)
    // }

    return (
        <section>
            <h1>user profile</h1>
            <div className="card-detail-box">
                {/* <div className="profile-image">
                    <img src={avatar} alt="avatar" width="200px"/>
                </div> */}
                <div className="details">
                    {/* <h3>{username}</h3>
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
                    </ul> */}
                    {/* <button className="button" onClick={toggleEditForm}>Edit Profile</button>
                    {showProfileEditForm ? (
                        <EditProfileForm 
                            profile={profile}
                            onUpdateProfile={onUpdateProfile}
                        />
                        ) : ( 
                            null 
                        )
                    } */}
                    {/* <button className="button" onClick={handleDeleteClick}>Delete Profile</button> */}
                    <button>Edit Profile</button>
                    <button>Delete Profile</button>
                </div>
            </div>
            <NavLink exact to="/cleanups/" className="button">
                Back to Explore
            </NavLink>
        </section>
    )
}

export default ProfileDetail;