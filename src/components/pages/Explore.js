
// import React, { useState, useEffect } from 'react'
import ProfileList from '../ProfileList'
import CleanupList from "../CleanupList"

function Explore({ users, cleanups, onDeleteUser, cleanupSearchTerm, setCleanupSearchTerm, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onDeleteCleanup }) {

    return (
        <section>
            <ProfileList 
                users={users} 
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
