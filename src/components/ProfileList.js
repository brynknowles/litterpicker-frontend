import ProfileCard from './ProfileCard'

function ProfileList({ users }) {
    console.log("users in ProfileList ", users)

    const displayUsers = users.map((user) => {
        return <ProfileCard key={user.id} user={user} />
    })

    return (
    <section>
        <h1>User Profiles</h1>
        <ul className="cards">{displayUsers}</ul>
    </section>)
}

export default ProfileList;
