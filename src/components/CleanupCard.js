import React, { useState } from 'react'

function CleanupCard({ cleanup }) {
    const { id, name, category, image, date, duration, comment, cheer, user, location } = cleanup
    console.log(user)
    const [cheers, setCheers] = useState(0)

    function handleCheersClick() {
        console.log("clicked")
        setCheers(cheers + 1);
    }

    return (
        <li className="card">
            <div className="image">
                <img src={image} alt="cleanup site" width="200px"/>
                <button onClick={handleCheersClick}>👏 Cheers! {cheer}</button>
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Location: {location.name}</p>
                <p>Category: {category}</p>
                <p>Date: {date}</p>
                <p>Duration: {duration} hr</p>
                <p>Comment: {comment}</p>
            </div>
            <div className="profile-button">
                <button><p>LitterPicker: {user.username}</p></button>
            </div>
        </li>
    )
}

export default CleanupCard
