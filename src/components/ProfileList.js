import ProfileCard from './ProfileCard'

function ProfileList({ users }) {

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

{/* <section>
<h1>Cleanup List</h1>
<ul className="cards">{displayCleanups}</ul>
</section> */}