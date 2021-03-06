
// import React, { useState, useEffect } from 'react'
import ProfileList from '../ProfileList'
import CleanupList from "../CleanupList"

function Explore({ handleDeleteAttendee, users, cleanups, currentUser, onUpdateProfile, onDeleteUser, cleanupSearchTerm, setCleanupSearchTerm, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onLeaveEvent, onDeleteCleanup }) {

    // console.log("currentUser in Explore: ",currentUser)
    return (
        <section>
            <ProfileList 
                users={users} 
                onUpdateProfile={onUpdateProfile}
                onDeleteUser={onDeleteUser} 
            />
            <CleanupList 
                handleDeleteAttendee={handleDeleteAttendee}
                currentUser={currentUser}
                cleanups={cleanups} 
                cleanupSearchTerm={cleanupSearchTerm} 
                setCleanupSearchTerm={setCleanupSearchTerm} 
                onUpdateCheer={onUpdateCheer} 
                onUpdateCleanup={onUpdateCleanup} 
                onAttendeeSignup={onAttendeeSignup} 
                onLeaveEvent={onLeaveEvent}
                onDeleteCleanup={onDeleteCleanup} 
            />
        </section>
    )
}

export default Explore;
