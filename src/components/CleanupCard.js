import React, { useState } from 'react'

function CleanupCard({ cleanup }) {
    const { name, location, category, image, date, duration, comment, users } = cleanup
    const [claps, setClaps] = useState(0)

    function handleClapsClick() {
        console.log("clicked")
        setClaps((claps) => {
            return claps + 1
        });
    }

    return (
        <li className="card">
            <div className="image">
                <img src={image} alt="cleanup site" width="200px"/>
                <button onClick={handleClapsClick}>👏 {claps} </button>
            </div>
            <div className="details">
                <h3>{name}</h3>
                <p>Location: {location.name}</p>
                <p>Category: {category}</p>
                <p>Date: {date}</p>
                <p>Duration: {duration} hr(s)</p>
                <p>Comment: {comment}</p>
            </div>
            <div className="profile-button">
                <button><p>LitterPicker: {users.map((user) => user.username)}</p></button>
            </div>
        </li>
    )
}

export default CleanupCard;
