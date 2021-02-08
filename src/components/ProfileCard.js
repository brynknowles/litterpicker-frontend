
function ProfileCard({ user }) {
    const { avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, earth_steward_badge } = user
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
            </div>
        </li>
    )
}

export default ProfileCard;

/*
<i class="fas fa-umbrella-beach"></i>
 */
