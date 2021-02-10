import SearchCleanups from "./SearchCleanups"
import CleanupCard from "./CleanupCard"

function CleanupList({ cleanups, cleanupSearchTerm, setCleanupSearchTerm, onDeleteCleanup }) {
    // console.log("cleanups in CleanupList: ", cleanups)
    const displayCleanups = cleanups.map((cleanup) => {
        return <CleanupCard key={cleanup.id} cleanup={cleanup} onDeleteCleanup={onDeleteCleanup} />
    })

    return (
        <section>
            <h1>Cleanup List</h1>
            <SearchCleanups cleanupSearchTerm={cleanupSearchTerm} setCleanupSearchTerm={setCleanupSearchTerm} />
            <ul className="cards">{displayCleanups}</ul>
        </section>
    )
}

export default CleanupList;
