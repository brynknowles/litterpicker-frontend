// import React, { useState, useEffect } from 'react'
import ProfileList from './ProfileList'


function Profile({ cleanups, users }) {
    console.log("cleanups in Profile", cleanups)

    return (
        <section>
            <ProfileList users={users} />
        </section>
    )
}

export default Profile;