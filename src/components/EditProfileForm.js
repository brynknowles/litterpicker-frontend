import React, { useState } from 'react'

function EditProfileForm({ user, onUpdateProfile }) {
    const { id, avatar, username, age, catchphrase } = user

    const [newAvatar, setNewAvatar] = useState(avatar)
    const [newUsername, setNewUsername] = useState(username)
    const [newAge, setNewAge] = useState(age)
    const [newCatchphrase, setNewCatchphrase] = useState(catchphrase)

    function handleProfileSubmit(event) {
        event.preventDefault()
        // console.log("clicked")
        const updatedObj = {
            avatar: newAvatar,
            username: newUsername,
            age: newAge,
            catchphrase: newCatchphrase
        }

        fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedObj)
        })
            .then(r => r.json())
            .then(updatedProfile => {
                console.log("updatedProfile in ProfileCard: ", updatedProfile)
                onUpdateProfile(updatedProfile)
            })
        setNewAvatar(updatedObj.avatar)
        setNewUsername(updatedObj.username)
        setNewAge(updatedObj.age)
        setNewCatchphrase(updatedObj.catchphrase)
    }
        
    return (
        <section>
            <h1>Edit Profile Form</h1>
            <form className="form" onSubmit={handleProfileSubmit}>
                <label htmlFor="avatar">Avatar (Image URL):</label>
                <input type="text" aria-label="user avatar" id="avatar" name="avatar" value={newAvatar} onChange={(e) => setNewAvatar(e.target.value)}></input>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" value={newAge} onChange={(e) => setNewAge(e.target.value)}></input>
                <label htmlFor="catchphrase">Catchphrase:</label>
                <input type="text" id="catchphrase" name="catchphrase" value={newCatchphrase} onChange={(e) => setNewCatchphrase(e.target.value)}></input>
                <button type="submit">Save Changes</button>
                {/* <button type="cancel">Cancel Edit</button> */}
            </form>
        </section>
    )
}

export default EditProfileForm