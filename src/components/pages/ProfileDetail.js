import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

function ProfileDetail() {
    // console.log("cleanups in Profile", cleanups)
    const [profile, setProfile] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    // const id = 1

    const params = useParams();
    console.log("params in ProfileDetail: ", params);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${params.id}`)
        .then((r) => r.json())
        .then((profile) => {
            setProfile(profile)
            setIsLoaded(true)
        })
    }, [params.id])

    console.log("profile in ProfileDetail: ", profile)

    const { id, avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge } = profile

    if (!isLoaded) return <h2>Loading...</h2>

    return (
        <section>
            <h1>user profile</h1>
            <div className="card-detail-box">  
                <div className="profile-image">
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
                    {/* <button className="button" onClick={toggleEditForm}>Edit Profile</button>
                    {showProfileEditForm ? (
                        <EditProfileForm 
                            user={user}
                            onUpdateProfile={onUpdateProfile}
                        />
                        ) : ( 
                            null 
                        )
                    }
                    <button className="button" onClick={handleDeleteClick}>Delete Profile</button> */}
                    <button>Edit Profile</button>
                    <button>Delete Profile</button>
                </div>
            </div>
            <Link exact to="/cleanups/" className="button">
                Back to Explore
            </Link>
        </section>
    )
}

export default ProfileDetail;