import React, { useState } from 'react'

function ProfileCard({ user, onDeleteUser }) {
    const { id, avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge } = user

        // edit profile state and setState
    const [showEditForm, setShowEditForm] = useState(false)
    const [editedAvatar, setEditedAvatar] = useState(avatar)
    const [editedUsername, setEditedUsername] = useState(username)
    const [editedAge, setEditedAge] = useState(age)
    const [editedCatchphrase, setEditedCatchphrase] = useState(catchphrase)

    function toggleEditForm() {
        setShowEditForm(!showEditForm)
    }

    function handleEditChange(){
        console.log("submitting changes")
    }

    function handleEditSubmit(event) {
        event.preventDefault()
        console.log("submitting")
        console.log({ editedAvatar, editedUsername, editedAge, editedCatchphrase })
        // fetch(`http://localhost:3000/users/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         avatar: editedAvatar,
        //         username: editedUsername,
        //         age: editedAge,
        //         catchphrase: editedCatchphrase
        //     })
        // })
        //     .then(r => r.json())
        //     .then(console.log)
        //     // .then(data => {
        //     //   onEditUser(data)
        //     // })
    }

    function handleDeleteClick() {
        // console.log("delete clicked")
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
        onDeleteUser(id)
    }

    return (
        <li className="card">  
            <div className="image">
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
                <button className="button" onClick={toggleEditForm}>Edit Profile</button>
                {showEditForm ? (
                    <form className="form" onSubmit={handleEditSubmit}>
                        <label htmlFor="avatar">Avatar (Image URL):</label>
                        <input type="text" aria-label="user avatar" id="avatar" name="avatar" value={editedAvatar} onChange={handleEditChange}></input>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={editedUsername} onChange={handleEditChange}></input>
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" value={editedAge} onChange={handleEditChange}></input>
                        <label htmlFor="catchphrase">Catchphrase:</label>
                        <input type="text" id="catchphrase" name="catchphrase" value={editedCatchphrase} onChange={handleEditChange}></input>
                        <button type="submit">Save Changes</button>
                        {/* <button type="cancel">Cancel Edit</button> */}
                    </form>
                ) : ( 
                    null 
                )
            }
                <button className="button" onClick={handleDeleteClick}>Delete Profile</button>
            </div>
        </li>
    )
}

export default ProfileCard;

/*
<i class="fas fa-umbrella-beach"></i>
 */



// need to make a toggle in the form so that if it's a post request, handleCreateSubmit and setNoteBody + setNoteTitle OR if it's a patch request, handleEditSubmit and setEditedTitle + setEditedBody

  // *************************     JSX RETURNS Note Editor Form     *************************

//   return (
//     <form className="note-editor" onSubmit={handleCreateSubmit}>
//       <input type="text" name="title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
//       <textarea name="body" value={noteBody} onChange={(e) => setNoteBody(e.target.value)}/>
//       <div className="button-row">
//         <input className="button" type="submit" value="Save" />
//         <button type="button" onClick={onCancelAddNote}>Cancel</button>
//       </div>
//     </form>
//   );


{/* <form className="form" onSubmit={handleSubmit}>
<label htmlFor="avatar">Avatar (Image URL):</label>
<input type="image" aria-label="user avatar" id="avatar" name="avatar" value={formData.avatar} onChange={handleChange}></input>
<label htmlFor="username">Username:</label>
<input type="text" id="username" name="username" value={formData.username} onChange={handleChange}></input>
<label htmlFor="age">Age:</label>
<input type="number" id="age" name="age" value={formData.age} onChange={handleChange}></input>
<label htmlFor="catchphrase">Catchphrase:</label>
<input type="text" id="catchphrase" name="catchphrase" value={formData.catchphrase} onChange={handleChange}></input>
<button type="submit">Sign Up</button>
</form> */}