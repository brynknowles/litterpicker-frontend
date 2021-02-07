import React, { useState } from 'react'

function CleanupCard({ cleanup }) {
    const { id, name, category, image, date, duration, comment, cheer, user, location } = cleanup
    // console.log(user)
    const [giveCheers, setGiveCheers] = useState(0)
    console.log("giveCheers in CleanupCard", giveCheers)

    function handleCheersClick() {
        console.log("clicked")
        setGiveCheers(giveCheers + 1);
    }

    return (
        <li className="card">
            <div className="image">
                <img src={image} alt="cleanup site" width="200px"/>
                <button onClick={handleCheersClick}>👏 {cheer} </button>
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
