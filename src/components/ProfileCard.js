
function ProfileCard({ user }) {
    const { avatar, username, age, catchphrase, park_badge, playground_badge, shoreline_badge, trail_badge, general_badge } = user
    return (
        <li className="card">  
            <div className="image">
                <img src={avatar} alt="avatar" width="200px"/>
            </div>
            <div className="details">
                <h3>{username}</h3>
                <p>Age: {age}</p>
                <p>Catchphrase: {catchphrase}</p>
                <section>
                    <h1>Badges</h1>
                    <ul>
                        <li>Park Badge: {park_badge}</li>
                        <li>Playground Badge: {playground_badge}</li>
                        <li><i class="fas fa-umbrella-beach"></i> {shoreline_badge}</li>
                        <li>Trail Badge: {trail_badge}</li>
                        <li>General Badge: {general_badge}</li>
                    </ul>
                </section>

            </div>

        </li>
    )
}

export default ProfileCard;
