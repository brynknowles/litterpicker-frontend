import { formatWithOptions } from "date-fns/fp"
import React, { useState } from 'react'

function EditProfileForm({ user, onUpdateUser }) {
    // edit profile state and setState
    const [showEditForm, setShowEditForm] = useState(false)
    const [editedAvatar, setEditedAvatar] = useState(avatar)
    const [editedUsername, setEditedUsername] = useState(username)
    const [editedAge, setEditedAge] = useState(age)
    const [editedCatchphrase, setEditedCatchphrase] = useState(catchphrase)
        
    return (
        <section>
            <h1>Edit Profile Form</h1>
            <form className="form" onSubmit={handleEditSubmit}>
                <label htmlFor="avatar">Avatar (Image URL):</label>
                <input type="text" aria-label="user avatar" id="avatar" name="avatar" value={editedAvatar} onChange={(e) => setEditedAvatar(e.target.value)}></input>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={editedUsername} onChange={(e) => setEditedUsername(e.target.value)}></input>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={editedAge} onChange={(e) => setEditedAge(e.target.value)}></input>
                <label htmlFor="catchphrase">Catchphrase:</label>
                <input type="text" id="catchphrase" name="catchphrase" value={editedCatchphrase} onChange={(e) => setEditedCatchphrase(e.target.value)}></input>
                <button type="submit">Save Changes</button>
                {/* <button type="cancel">Cancel Edit</button> */}
            </form>
        </section>
    )
}

export default EditProfileForm