import React, { useState, useEffect } from 'react'
import ProfileList from './ProfileList'


function ProfileContainer() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/users")
        // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
        .then(r => r.json())
        .then(setUsers)
    }, [])


    return (
        <>
            <ProfileList users={users} />
            {/* <ProfileCard /> */}
        </>
    )
}

export default ProfileContainer