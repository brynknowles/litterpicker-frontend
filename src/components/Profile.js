// import React, { useState, useEffect } from 'react'
import ProfileList from './ProfileList'


function Profile({ cleanups, users }) {
    console.log("cleanups in Profile", cleanups)

    return (
        <>
            <h1>Profile Page</h1>
            <ProfileList users={users} />
        </>
    )
}

export default Profile;