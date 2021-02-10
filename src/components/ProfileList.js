import SearchProfiles from './SearchProfiles'
import ProfileCard from './ProfileCard'

function ProfileList({ users, searchTerm, setSearchTerm, onDeleteUser }) {

    const displayUsers = users.map((user) => {
        return <ProfileCard key={user.id} user={user} onDeleteUser={onDeleteUser} />
    })

    return (
    <section>
        <h1>User Profiles</h1>
        <SearchProfiles searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ul className="cards">{displayUsers}</ul>
    </section>)
}

export default ProfileList;
