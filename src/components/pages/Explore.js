
// import React, { useState, useEffect } from 'react'
import ProfileList from '../ProfileList'
import CleanupList from "../CleanupList"

function Explore({ users, cleanups, onUpdateUser, onDeleteUser, cleanupSearchTerm, setCleanupSearchTerm, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onDeleteCleanup }) {

    return (
        <section>
            <ProfileList 
                users={users} 
                onUpdateUser={onUpdateUser}
                onDeleteUser={onDeleteUser} 
            />
            <CleanupList 
                cleanups={cleanups} 
                cleanupSearchTerm={cleanupSearchTerm} 
                setCleanupSearchTerm={setCleanupSearchTerm} 
                onUpdateCheer={onUpdateCheer} 
                onUpdateCleanup={onUpdateCleanup} 
                onAttendeeSignup={onAttendeeSignup} 
                onDeleteCleanup={onDeleteCleanup} 
            />
        </section>
    )
}

export default Explore;
