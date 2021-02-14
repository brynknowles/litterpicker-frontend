import ProfileCard from './ProfileCard'

function ProfileList({ users, onUpdateProfile, onDeleteUser }) {

    const displayUsers = users.map((user) => {
        return <ProfileCard key={user.id} user={user} onUpdateProfile={onUpdateProfile} onDeleteUser={onDeleteUser} />
    })

    return (
    <section>
        <h1>User Profiles</h1>
        <ul className="cards">{displayUsers}</ul>
    </section>)
}

export default ProfileList;
