import React, { useState, useEffect } from 'react'
import SearchProfiles from './SearchProfiles'
import ProfileCard from './ProfileCard'

function ProfileList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then(r => r.json())
        // .then(data => console.log("user data in Explore", data))
        .then(setUsers)
    }, [])

    const displayUsers = users.map((user) => {
        return <ProfileCard key={user.id} user={user} />
    })

    return (
    <section>
        <h1>User Profiles</h1>
        <SearchProfiles />
        <ul className="cards">{displayUsers}</ul>
    </section>)
}

export default ProfileList;
