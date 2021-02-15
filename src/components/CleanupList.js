import SearchCleanups from "./SearchCleanups"
import CleanupCard from "./CleanupCard"

function CleanupList({ currentUser, cleanups, cleanupSearchTerm, setCleanupSearchTerm, onUpdateCheer, onUpdateCleanup, onAttendeeSignup, onDeleteCleanup }) {
    // console.log("currentUser in CleanupList: ", currentUser)
    // console.log("cleanups in CleanupList: ", cleanups)

    // movies.sort(function(a, b) {
    //     var dateA = new Date(a.release), dateB = new Date(b.release);
    //     return dateA - dateB;
    // });

    const sortedCleanups = cleanups.sort(function(a, b) {
        let dateA = new Date(a.date)
        let dateB = new Date(b.date)
        return  dateB - dateA
    })
    // console.log(sortedCleanups)
    
    const displayCleanups = sortedCleanups.map((cleanup) => {
        return <CleanupCard 
                    key={cleanup.id}
                    currentUser={currentUser} 
                    cleanup={cleanup} 
                    onUpdateCheer={onUpdateCheer} 
                    onUpdateCleanup={onUpdateCleanup} 
                    onAttendeeSignup={onAttendeeSignup} 
                    onDeleteCleanup={onDeleteCleanup} 
                />
    })

    // const sortedActivities = activities.sort((a, b) => b.date - a.date)

    return (
        <section>
            <h1>Cleanup List</h1>
            <SearchCleanups 
                cleanupSearchTerm={cleanupSearchTerm} 
                setCleanupSearchTerm={setCleanupSearchTerm} 
            />
            <ul className="cards">{displayCleanups}</ul>
        </section>
    )
}

export default CleanupList;
