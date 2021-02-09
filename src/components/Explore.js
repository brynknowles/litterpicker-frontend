import ProfileList from './ProfileList'
import CleanupList from "./CleanupList"

function Explore() {
    
    function handleCreateUser(newUser) {
        console.log(newUser)
        // const newUserArray = [newUser, ...users];
        // setUsers(newUserArray)
    }

        // adds new cleanup to list of cleanups
    function handleCreateCleanup(newCleanup) {
        console.log(newCleanup)
        // const newCleanupArray = [newCleanup, ...cleanups];
        // setCleanups(newCleanupArray);
    }

    return (
        <section>
            <ProfileList onCreateUser={handleCreateUser} />
            <CleanupList onCreateCleanup={handleCreateCleanup} />
        </section>
    )
}

export default Explore;



// function CleanupContainer() {
//     const [cleanups, setCleanups] = useState([])
//     const [searchTerm, setSearchTerm] = useState("")

//     useEffect(() => {
//         fetch("http://localhost:3000/cleanups")
//         // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
//         .then(r => r.json())
//         .then(setCleanups)
//     }, [])

//     const filteredCleanups = cleanups.filter((cleanup) => {
//         // console.log("cleanup in search term filter: ", cleanup)
//         return cleanup.location.name.toLowerCase().includes(searchTerm.toLowerCase())
//     })

//     console.log(cleanups)


//     return (
//         <>
//             <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//             <CleanupForm />
//             <CleanupList cleanups={filteredCleanups}/>
//         </>
//     )
// }

// export default CleanupContainer;